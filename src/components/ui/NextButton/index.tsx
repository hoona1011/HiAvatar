import React from 'react'
import * as S from './style'
export const NextButton = () => {
  const onClickHandler = () => {
    console.log('클릭')
  }
  return (
    <S.Button onClick={onClickHandler}>
      <span>다음</span>
    </S.Button>
  )
}
