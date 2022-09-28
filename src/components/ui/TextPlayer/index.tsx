import React, { useEffect, useRef, useState } from 'react'
import * as S from './style'
import { PlayIcon, StopIcon, CloseIcon } from '../../Icons'
import {
  editText,
  removeText,
  changeText,
  selectedText
} from 'store/slices/optionSlice'
import { useAppSelector } from 'store'

export const TextPlayer = ({ itemData, splitTextList, findData, dispatch }) => {
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

  const userSelectedHandler = () => {
    dispatch(selectedText({ itemData, splitTextList }))
  }

  return (
    <S.Wrapper onClick={userSelectedHandler}>
      <S.PlayerBar focus={findData?.focus}>
        <li>
          <S.ItemNum>{itemData.sentenceId + 1}</S.ItemNum>
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
            <PlayIcon width='32' height='32' />
          </div>
          <div>
            <StopIcon width='32' height='32' />
            <S.CloseButton onClick={userRemoveHandler}>
              <CloseIcon width='24' height='24' />
            </S.CloseButton>
          </div>
        </li>
      </S.PlayerBar>
      <S.SetUpBtnList focus={findData?.focus}>
        <li>
          <button onClick={userEditHandler}>+ 문장 추가</button>
        </li>
        <li>
          <button>간격설정</button>
        </li>
      </S.SetUpBtnList>
    </S.Wrapper>
  )
}
