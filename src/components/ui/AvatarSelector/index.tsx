import React from 'react'
import * as S from './style'
import { MainSlider } from 'components'

export const AvatarSelector = () => {
  return (
    <S.Container>
      <S.Title>아바타를 선택해 주세요</S.Title>
      <MainSlider renderType='AvatarSelector' />
    </S.Container>
  )
}
