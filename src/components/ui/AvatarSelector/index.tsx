import React from 'react'
import * as S from './style'

import { MainSlider } from '../../../components'

export const AvatarSelector = () => {
  const data = [
    {
      name: '아바타 1'
    },
    {
      name: '아바타 2'
    },
    {
      name: '아바타 3'
    },
    {
      name: '아바타 4'
    },
    {
      name: '아바타 5'
    },
    {
      name: '아바타 6'
    },
    {
      name: '아바타 7'
    }
  ]

  return (
    <S.Container>
      <S.Title>아바타를 선택해 주세요</S.Title>
      <MainSlider data={data} />
    </S.Container>
  )
}
