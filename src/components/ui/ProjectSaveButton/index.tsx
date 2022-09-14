import React from 'react'
import * as S from './style'

export const ProjectSaveButton = () => {
  const onClickHandler = () => {
    console.log('클릭')
  }
  return (
    <S.Button onClick={onClickHandler}>
      <span>프로젝트 저장</span>
    </S.Button>
  )
}
