import React, { useEffect, useRef, useState } from 'react'
import * as S from './style'
import { TextPlayer } from '../TextPlayer'
import { useAppDispatch, useAppSelector } from 'store'
import { renderText, outFocus } from 'store/slices/optionSlice'
import {
  ProjectTextEnterButton,
  ProjectVoiceUploadButton,
  TootipMessage,
  VoiceUploadButton,
  TextEnterButton,
  ProjectTextModal
} from 'components'
import { TooltipIcon } from 'components/Icons'
import { usePostTextMutation } from 'api/optionApi'

interface ChangeFlag {
  current: boolean
}

interface SplitTextList {
  sentenceId: number
  sentenceSpacing: number
  text: string
}

interface UserSelectedList {
  focus: boolean
  sentenceId: number
}

interface Props {
  splitTextList: SplitTextList[]
  userSelectedList: UserSelectedList[]
  isPlaying: boolean
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
  audioFile: string
  audioElem: React.RefObject<HTMLAudioElement>
  changeFlag: ChangeFlag
  onendedAudio: React.MutableRefObject<boolean>
}

export const TextEditList = () => {
  const dispatch = useAppDispatch()
  const { texts, splitTextList, userSelectedList, textPreviewData } =
    useAppSelector((state) => state.option)
  const [modalText, setModalText] = useState('')
  const [modal, setModal] = useState(false)

  const [postText] = usePostTextMutation()
  const [audioFile, setAudioFile] = useState('')
  const changeFlag: ChangeFlag = useRef(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioElem = useRef<HTMLAudioElement>(null)
  const onendedAudio = useRef(false)

  useEffect(() => {
    if (texts.length) {
      dispatch(renderText(textDatas))
    }
  }, [texts])

  const textDatas = texts.split('.').map((item, index) => {
    return {
      ...splitTextList[0],
      sentenceId: index + 1,
      text: item,
      sentenceSpacing: 0
    }
  })

  useEffect(() => {
    postText(textPreviewData)
      .unwrap()
      .then((data) => {
        setAudioFile(data.data.audioFile)
      })
      .catch((error) => {
        console.log(error)
        // alert(error)
      })
    changeFlag.current = true
  }, [textPreviewData.text])

  useEffect(() => {
    if (isPlaying) {
      audioElem.current!.play()
    } else {
      audioElem.current?.pause()
    }
  }, [audioFile])

  useEffect(() => {
    if (!changeFlag.current) {
      if (isPlaying) {
        audioElem.current!.play()
      } else {
        audioElem.current!.pause()
      }
    }
    onendedAudio.current = true
  }, [isPlaying])

  if (audioElem.current) {
    audioElem.current.onended = () => {
      audioElem.current!.pause()
      audioElem.current!.currentTime = 0
      setIsPlaying(false)
      onendedAudio.current = false
    }
  }

  const userOutFocusHandler = () => {
    dispatch(outFocus())
  }

  return (
    <S.Wrapper onClick={userOutFocusHandler}>
      <S.TitleGroup>
        <S.Title>
          <S.Tooltip>
            <TooltipIcon width='1.6rem' height='1.6rem' />
            <div className='message'>
              <TootipMessage
                content='문장을 선택하면 문장별로 스크립트 수정이 가능하고 
                간격 조절과 문장을 추가, 삭제할 수 있어요.'
                width='27.0rem'
              />
            </div>
          </S.Tooltip>
          <span className='title'>문장별로 텍스트를 수정해주세요</span>
        </S.Title>
        {!!splitTextList.length && (
          <div className='button-group'>
            <ProjectTextEnterButton setModal={setModal} />
            <ProjectVoiceUploadButton />
          </div>
        )}
      </S.TitleGroup>

      {modal && (
        <ProjectTextModal
          setModal={setModal}
          modalText={modalText}
          setModalText={setModalText}
        />
      )}
      <>
        {!splitTextList.length ? (
          <S.StartPage>
            <VoiceUploadButton />
            <TextEnterButton setModal={setModal} />
          </S.StartPage>
        ) : (
          // <>{renderList}</>
          <RenderList
            splitTextList={splitTextList}
            userSelectedList={userSelectedList}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            audioFile={audioFile}
            audioElem={audioElem}
            changeFlag={changeFlag}
            onendedAudio={onendedAudio}
          />
        )}
      </>
    </S.Wrapper>
  )
}

function RenderList({
  splitTextList,
  userSelectedList,
  isPlaying,
  setIsPlaying,
  audioFile,
  audioElem,
  changeFlag,
  onendedAudio
}: Props) {
  console.log(changeFlag)
  return (
    <>
      {splitTextList.length &&
        splitTextList.map((item) => {
          let orginData = item

          const findData = userSelectedList.find((item) => {
            return orginData.sentenceId === item.sentenceId
          })
          return (
            <TextPlayer
              key={item.sentenceId}
              itemData={item}
              splitTextList={splitTextList}
              findData={findData}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              audioFile={audioFile}
              audioElem={audioElem}
              changeFlag={changeFlag}
              onendedAudio={onendedAudio}
            />
          )
        })}
    </>
  )
}
