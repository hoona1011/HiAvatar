import React from 'react'
import * as S from './style'
interface Props {
  width?: string
}
export const Spinner = ({ width }: Props) => {
  return <S.Container width={width} />
}
