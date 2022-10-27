import React from 'react'
import * as S from './style'
import { Spinner } from 'components'

export const Loading = () => {
  return (
    <S.LoadingContainer>
      <Spinner />
    </S.LoadingContainer>
  )
}
