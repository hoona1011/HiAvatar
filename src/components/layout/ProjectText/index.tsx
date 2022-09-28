import React from 'react'
import { useAppSelector } from 'store'
import * as S from './style'

export const ProjectText = () => {
  const { splitTextList, userSelectedList } = useAppSelector(
    (state) => state.option
  )

  const render = splitTextList.map((item) => {
    let orginData = item

    const findData = userSelectedList.find((item) => {
      return orginData.sentenceId === item.sentenceId
    })

    return (
      <div key={item.sentenceId}>
        <S.TextBox findData={findData?.focus}>{item.text}</S.TextBox>
      </div>
    )
  })

  return (
    <S.Wrapper>
      <S.Title>전체 텍스트를 확인해주세요</S.Title>
      <S.TextGroup>{render}</S.TextGroup>
    </S.Wrapper>
  )
}
