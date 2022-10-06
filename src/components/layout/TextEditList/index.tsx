import React, { useEffect, useRef, useState } from 'react'
import * as S from './style'
import { TextPlayer } from '../../ui/TextPlayer'
import { useAppDispatch, useAppSelector } from 'store'
import { renderText, outFocus } from 'store/slices/optionSlice'

export const TextEditList = () => {
  const dispatch = useAppDispatch()
  const { texts, splitTextList, userSelectedList, textPreviewData } =
    useAppSelector((state) => state.option)

  useEffect(() => {
    dispatch(renderText(textDatas))
  }, [texts])

  // console.log(splitTextList)
  // console.log(texts)

  // const textData = {
  //   sentenceId: '',
  //   text: '',
  //   sentenceSpacing: ''
  // }

  const textDatas = texts.split('.').map((item, index) => {
    return { ...splitTextList[0], sentenceId: index + 1, text: item }
  })

  const userOutFocusHandler = () => {
    dispatch(outFocus())
  }

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
        textPreviewData={textPreviewData}
        findData={findData}
        dispatch={dispatch}
      />
    )
  })

  return (
    <S.Wrapper onClick={userOutFocusHandler}>
      <S.Title>문장별로 텍스트를 수정해주세요</S.Title>
      {render}
    </S.Wrapper>
  )
}
