import React, { useEffect, useRef, useState } from 'react'
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
import { usePostTextMutation } from 'api/optionApi'

export const TextPlayer = ({
  itemData,
  splitTextList,
  findData,
  textPreviewData,
  dispatch
}) => {
  const [isPlaying, setIsPlaying] = useState(false)

  const audioElem = useRef()
  const [audioFile, setAudioFile] = useState()
  const [spacingValue, setSpacingValue] = useState(0)
  const [postText] = usePostTextMutation()

  // console.log(audioElem)

  useEffect(() => {
    // console.log(Boolean(audioFile))
    if (Boolean(audioFile)) {
      if (isPlaying) {
        audioElem.current.play()
      } else {
        audioElem.current.pause()
      }
    }
  }, [isPlaying, audioFile])

  useEffect(() => {
    postText(textPreviewData)
      .unwrap()
      .then((data) => {
        setAudioFile(data.data.audioFile)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [textPreviewData.text, audioFile])

  // const userInputHandler = (e) => {
  //   const { name, value } = e.target
  //   setInputData({ ...inputData, [name]: value })
  //   dispatch(changeText(inputData))
  // }

  // console.log(itemData)
  // console.log(userSelectedData)

  const userInputHandler = (e) => {
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

  const userSelectedHandler = (e) => {
    e.stopPropagation()
    dispatch(selectedText({ itemData, splitTextList }))
  }
  // console.log(audioFile)
  const playPause = () => {
    const textData = { text: itemData.text }
    dispatch(textCreatePreview(textData))
    // console.log(audioFile)

    setIsPlaying(!isPlaying)
  }

  const audioFileUrl = `data:audio/wav;base64,${audioFile}`

  const stop = () => {
    audioElem.current.pause()
    audioElem.current.currentTime = 0
    setIsPlaying(false)
  }

  const chnsnSpcng = (e) => {
    setSpacingValue(e.target.value)
    // console.log({ ...itemData, sentenceSpacing: e.target.value })
    dispatch(
      changeChnsnSpcng({ ...itemData, sentenceSpacing: Number(e.target.value) })
    )
  }

  return (
    <S.Wrapper onClick={userSelectedHandler}>
      <S.PlayerBar focus={findData?.focus}>
        <li>
          <div>
            <audio src={audioFileUrl} ref={audioElem} />
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
          {/* <S.TextEdit
            name='text'
            onChange={userInputHandler}
            defaultValue={itemData.text}
          /> */}
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
