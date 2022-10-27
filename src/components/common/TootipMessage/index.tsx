import React from 'react'
import * as S from './style'
import type { TooltipMessageProps } from 'index'

export const TootipMessage = ({ content, width }: TooltipMessageProps) => {
  return (
    <S.Container width={width}>
      <S.Content>{content}</S.Content>
      <S.Point />
    </S.Container>
  )
}
