import React, { useEffect, useRef, useState } from 'react'
import * as S from './style'
import { TextPlayer } from '../../ui/TextPlayer'
import { useAppDispatch, useAppSelector } from 'store'
import {
  renderText,
  changeOption,
  selectedText,
  focusOutText
} from 'store/slices/optionSlice'

export const TextEditList = () => {
  const dispatch = useAppDispatch()
  const { texts, splitTextList, userSelectedList } = useAppSelector(
    (state) => state.option
  )

  useEffect(() => {
    dispatch(renderText(textDatas))
  }, [texts])
  // useEffect(() => {}, [userSelectedList.length])

  // console.log(splitTextList)
  // console.log(texts)

  const textData = {
    sentenceId: '',
    text: '',
    sentenceSpacing: ''
  }

  const textDatas = texts.split('.').map((item, index) => {
    return { ...textData, sentenceId: index, text: item }
  })

  const render = splitTextList.map((item) => {
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
        dispatch={dispatch}
      />
    )
  })

  return (
    <S.Wrapper>
      <S.Title>문장별로 텍스트를 수정해주세요</S.Title>
      {render}
    </S.Wrapper>
  )
}
