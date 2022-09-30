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
import { useAppSelector } from 'store'

export const TextPlayer = ({ itemData, splitTextList, findData, dispatch }) => {
  const [songs, setSongs] = useState('/src/assets/test.mp3')
  const [isplaying, setisplaying] = useState(false)
  const [currentSong, setCurrentSong] = useState('/src/assets/test.mp3')

  const audioElem = useRef()
  const [spacingValue, setSpacingValue] = useState(0)

  // console.log(audioElem)

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play()
    } else {
      audioElem.current.pause()
    }
  }, [isplaying])

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

  const playPause = () => setisplaying(!isplaying)

  const stop = () => {
    audioElem.current.pause()
    audioElem.current.currentTime = 0
    setisplaying(false)
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
          <S.ItemNum>{itemData.sentenceId}</S.ItemNum>
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
            <audio src={currentSong} ref={audioElem} />
            <div onClick={playPause}>
              {isplaying ? (
                <PauseIcon
                  width='32'
                  height='32'
                  isSelected={findData?.focus}
                />
              ) : (
                <PlayIcon width='32' height='32' isSelected={findData?.focus} />
              )}
            </div>
            <div onClick={stop}>
              <StopIcon width='32' height='32' isSelected={findData?.focus} />
            </div>
          </div>
          <div>
            <S.CloseButton onClick={userRemoveHandler}>
              <CloseIcon width='24' height='24' />
            </S.CloseButton>
          </div>
        </li>
      </S.PlayerBar>
      <S.SetUpBtnList focus={findData?.focus}>
        <li>
          <S.TextEditBtn onClick={userEditHandler}>+ 문장 추가</S.TextEditBtn>
        </li>
        <li>
          <span>{spacingValue / 10}초</span>
          <S.SntncSpcng
            type='range'
            min='0'
            max='30'
            value={spacingValue}
            step='1'
            onChange={chnsnSpcng}
          />
        </li>
      </S.SetUpBtnList>
    </S.Wrapper>
  )
}
