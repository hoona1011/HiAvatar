import React from 'react'
import * as S from './style'
import { MainSlider } from 'components'
import { TooltipIcon } from 'components/Icons'

export const AvatarSelector = () => {
  return (
    <S.Container>
      <S.Top>
        <TooltipIcon width='1.6rem' height='1.6rem' />
        <S.Title>아바타를 선택해주세요</S.Title>
      </S.Top>
      <MainSlider renderType='AvatarSelector' />
    </S.Container>
  )
}
