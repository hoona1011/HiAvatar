import React from 'react'
import * as S from './style'
import { MainSlider } from 'components'

export const AvatarSort = () => {
  return (
    <S.Container>
      <S.Title>분류를 선택해 주세요.</S.Title>
      <S.SortContainer>
        <S.SortTitle>분류 1</S.SortTitle>
        <MainSlider renderType='AvatarSort-1' />
      </S.SortContainer>

      <S.SortContainer>
        <S.SortTitle>분류 2</S.SortTitle>
        <MainSlider renderType='AvatarSort-2' />
      </S.SortContainer>

      <S.SortContainer>
        <S.SortTitle>분류 3</S.SortTitle>
        <MainSlider renderType='AvatarSort-3' />
      </S.SortContainer>
    </S.Container>
  )
}
