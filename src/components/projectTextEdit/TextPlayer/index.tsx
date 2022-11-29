import React, { useEffect, useRef, useState } from 'react'
import * as S from './style'
import { PlayIcon, PauseIcon, StopIcon, CloseIcon } from '../../Icons'
import {
  editText,
  removeText,
  changeText,
  selectedText,
  changeChnsnSpcng
} from 'store/slices/optionSlice'
import { useAppDispatch } from 'store'
import { usePostTextMutation } from 'api/optionApi'
import { set } from 'immer/dist/internal'

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
}

export const TextPlayer = ({ itemData, splitTextList, findData }: Props) => {
  const [spacingValue, setSpacingValue] = useState(0)
  const dispatch = useAppDispatch()
  const [postText] = usePostTextMutation()
  const [audioFile, setAudioFile] = useState()
  const [isPlaying, setIsPlaying] = useState(false)
  const audioElem: any = useRef()
  const isChanged = useRef(false)
  console.log(isPlaying)
  useEffect(() => {
    // changeFlag.current = true
    isChanged.current = true
  }, [itemData.text])

  useEffect(() => {
    if (isPlaying) {
      audioElem?.current!.play()
    } else {
      audioElem?.current!.pause()
    }
  }, [isPlaying])

  useEffect(() => {
    audioElem.current.onended = () => {
      audioElem.current.pause()
      audioElem.current.currentTime = 0
      setIsPlaying(false)
      console.log('온엔디드')
    }
  }, [])

  const userInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
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
    if (!isPlaying) {
      isChanged.current &&
        postText(textData)
          .unwrap()
          .then((data) => {
            setAudioFile(data.data.audioFile)
            isChanged.current = false
            setIsPlaying(true)
            console.log('요청')
          })
          .catch((error) => {
            alert(error)
          })
      !isChanged.current && setIsPlaying(true)
      // setIsPlaying(true)
    } else {
      setIsPlaying(false)
    }
    // changeFlag.current = false
    // console.log(changeFlag)
  }

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
              {isPlaying ? (
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
