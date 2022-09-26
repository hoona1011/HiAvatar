import React from 'react'
import * as S from './style'
import { MainSlider } from 'components'
import { TooltipIcon } from 'components/Icons'

export const AvatarSort = () => {
  return (
    <S.Container>
      <S.Top>
        <TooltipIcon width='1.6rem' height='1.6rem' />
        <S.Title>스타일을 선택해주세요</S.Title>
      </S.Top>
      <S.Sort>
        <S.SortTitle>스타일 1</S.SortTitle>
        <MainSlider renderType='AvatarSort-1' />
      </S.Sort>

      <S.Sort>
        <S.SortTitle>스타일 2</S.SortTitle>
        <MainSlider renderType='AvatarSort-2' />
      </S.Sort>

      <S.Sort>
        <S.SortTitle>스타일 3</S.SortTitle>
        <MainSlider renderType='AvatarSort-3' />
      </S.Sort>
    </S.Container>
  )
}
