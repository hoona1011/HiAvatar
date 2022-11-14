import React, { useEffect, useState } from 'react'
import * as S from './style'
import { PlayIcon, PauseIcon, StopIcon, CloseIcon } from '../../Icons'
import {
  editText,
  removeText,
  changeText,
  selectedText,
  changeChnsnSpcng,
  textCreatePreview
} from 'store/slices/optionSlice'
import { useAppDispatch } from 'store'

interface ItemData {
  sentenceId: number
  sentenceSpacing: number
  text: string
}

interface Props {
  itemData: ItemData
  splitTextList: ItemData[]
  findData:
    | {
        focus: boolean
        sentenceId: number
      }
    | undefined
  isPlaying: boolean
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
  audioFile: string | undefined
  audioElem: React.RefObject<HTMLAudioElement>
  changeFlag: {
    current: boolean
  }
  onendedAudio: {
    current: boolean
  }
}

export const TextPlayer = ({
  itemData,
  splitTextList,
  findData,
  isPlaying,
  setIsPlaying,
  audioFile,
  audioElem,
  changeFlag,
  onendedAudio
}: Props) => {
  const [spacingValue, setSpacingValue] = useState(0)

  const [buttonChange, setButtonChange] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!onendedAudio.current) {
      setButtonChange(false)
    }
  }, [onendedAudio.current])

  console.log('자식', audioElem.current)

  // const [isPlaying, setIsPlaying] = useState(false)
  // const audioElem: any = useRef()
  // const [audioFile, setAudioFile] = useState()
  // const [postText] = usePostTextMutation()
  // const changeFlag: any = useRef(false)

  // useEffect(() => {
  //   postText(textPreviewData)
  //     .unwrap()
  //     .then((data) => {
  //       setAudioFile(data.data.audioFile)
  //     })
  //     .catch((error) => {
  //       alert(error)
  //     })
  //   changeFlag.current = true
  // }, [textPreviewData.text])

  // useEffect(() => {
  //   if (isPlaying) {
  //     audioElem.current.play()
  //   } else {
  //     audioElem.current.pause()
  //   }
  //   audioElem.current.onended = () => {
  //     audioElem.current.pause()
  //     audioElem.current.currentTime = 0
  //     setIsPlaying(false)
  //   }
  // }, [audioFile])

  // useEffect(() => {
  //   if (!changeFlag.current) {
  //     // console.log(isPlaying)
  //     if (isPlaying) {
  //       audioElem.current.play()
  //     } else {
  //       audioElem.current.pause()
  //     }
  //   }
  //   audioElem.current.onended = () => {
  //     audioElem.current.pause()
  //     audioElem.current.currentTime = 0
  //     setIsPlaying(false)
  //   }
  // }, [isPlaying])

  const userInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    // setInputData({ ...inputData, [name]: value })
    dispatch(changeText({ ...itemData, [name]: value }))
  }

  const userRemoveHandler = () => {
    dispatch(removeText(itemData))
  }

  const userEditHandler = () => {
    dispatch(editText(itemData))
  }

  const userSelectedHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation()
    dispatch(selectedText({ itemData, splitTextList }))
  }
  const playPause = () => {
    const textData = { text: itemData.text }
    dispatch(textCreatePreview(textData))

    setIsPlaying(!isPlaying)
    setButtonChange(!buttonChange)
    changeFlag.current = false
  }

  // if (audioFile) {
  //   audioElem.current.onended = () => {
  //     audioElem.current.pause()
  //     audioElem.current.currentTime = 0
  //     setIsPlaying(false)
  //   }
  // }

  const stop = () => {
    audioElem.current!.pause()
    audioElem.current!.currentTime = 0
    setIsPlaying(false)
  }

  const chnsnSpcng = (e: React.ChangeEvent<HTMLInputElement>) => {
    let spacingValue = Number(e.target.value)
    setSpacingValue(spacingValue)
    dispatch(
      changeChnsnSpcng({ ...itemData, sentenceSpacing: Number(e.target.value) })
    )
  }

  return (
    <S.Wrapper onClick={userSelectedHandler}>
      <S.PlayerBar focus={findData?.focus}>
        <li>
          <div>
            <audio src={`data:audio/wav;base64,${audioFile}`} ref={audioElem} />
            <div onClick={playPause}>
              {buttonChange ? (
                <PauseIcon
                  width='32'
                  height='32'
                  isSelected={findData?.focus}
                />
              ) : (
                <PlayIcon width='32' height='32' />
              )}
            </div>
            <div onClick={stop}>
              <StopIcon width='32' height='32' />
            </div>
          </div>
        </li>
        <li>
          <S.ItemNum>
            {itemData.sentenceId < 10
              ? '0' + itemData.sentenceId
              : itemData.sentenceId}
          </S.ItemNum>
          <S.TextEdit
            name='text'
            onChange={userInputHandler}
            value={itemData.text}
          />
        </li>
        <li>
          <div>
            <S.CloseButton onClick={userRemoveHandler}>
              <CloseIcon width='24' height='24' isSelected={findData?.focus} />
            </S.CloseButton>
          </div>
        </li>
      </S.PlayerBar>
      <S.SetUpBtnList focus={findData?.focus}>
        <li>
          <S.TextEditBtn onClick={userEditHandler}>문장 추가</S.TextEditBtn>
        </li>
        <li>
          <S.SntncSpcngBtn>
            <span>간격조절</span>
            <span className='visibility'>{spacingValue / 10}초</span>
            <S.SntncSpcng
              className='visibility'
              type='range'
              min='0'
              max='30'
              value={spacingValue}
              step='1'
              onChange={chnsnSpcng}
            />
          </S.SntncSpcngBtn>
        </li>
      </S.SetUpBtnList>
    </S.Wrapper>
  )
}
