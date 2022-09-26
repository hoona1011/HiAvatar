import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './style'

export const PrevButton = () => {
  const navigate = useNavigate()
  const onClickHandler = () => {
    navigate('/project-text-edit')
  }
  return (
    <S.Button onClick={onClickHandler}>
      <span>이전</span>
    </S.Button>
  )
}
