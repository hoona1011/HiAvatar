import React, { useEffect, useRef, useState } from 'react'
import * as S from './style'
import { TextPlayer } from '../../ui/TextPlayer'
import { useAppDispatch, useAppSelector } from 'store'
import { renderText, changeOption } from 'store/slices/optionSlice'

export const TextEditList = () => {
  const dispatch = useAppDispatch()
  const { texts, splitTextList } = useAppSelector((state) => state.option)
  const [changTextData, setChangTextData] = useState('')

  useEffect(() => {
    dispatch(renderText(textDatas))
  }, [changTextData, texts])

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

  // splitTextList.forEach((item) => {
  //   // return item
  //   setChangTextData(item.text)
  // })
  // console.log('test', changTextData)

  return (
    <S.Wrapper>
      <S.Title>문장별로 텍스트를 수정해주세요</S.Title>
      {splitTextList.map((item) => (
        <TextPlayer key={item.sentenceId} itemData={item} dispatch={dispatch} />
      ))}
    </S.Wrapper>
  )
}
