import React from 'react'
import * as S from './style'
import { TextPlayer } from '../../ui/TextPlayer'

export const TextEditList = () => {
  return (
    <S.Wrapper>
      <S.Title>문장별로 텍스트를 수정해주세요</S.Title>
      <TextPlayer />
    </S.Wrapper>
  )
}
