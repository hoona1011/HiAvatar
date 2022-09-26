import React, { useEffect, useState } from 'react'
import * as S from './style'
import { PlayIcon, StopIcon, CloseIcon } from '../../Icons'
import { editText, removeText, changeText } from 'store/slices/optionSlice'

export const TextPlayer = ({ itemData, dispatch }) => {
  const [inputData, setInputData] = useState(itemData)

  // const userInputHandler = (e) => {
  //   const { name, value } = e.target
  //   setInputData({ ...inputData, [name]: value })
  //   dispatch(changeText(inputData))
  // }

  const userInputHandler = (e) => {
    const { name, value } = e.target
    setInputData({ ...inputData, [name]: value })
    dispatch(changeText({ ...itemData, [name]: value }))
  }

  const userRemoveHandler = () => {
    dispatch(removeText(itemData))
  }

  const userEditHandler = () => {
    dispatch(editText(itemData))
  }

  return (
    <S.Wrapper>
      <S.PlayerBar>
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
      <S.SetUpBtnList>
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
