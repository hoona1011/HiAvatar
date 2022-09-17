import React from 'react'
import * as S from './style'

export const PrevButton = () => {
  const onClickHandler = () => {
    console.log('클릭')
  }
  return (
    <S.Button onClick={onClickHandler}>
      <span>이전</span>
    </S.Button>
  )
}
