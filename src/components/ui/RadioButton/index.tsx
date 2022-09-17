import React from 'react'
import * as S from './style'

interface RadioButtonProps {
  buttonType: string
  value: string
  content: string
}

export const RadioButton = ({
  buttonType,
  value,
  content
}: RadioButtonProps) => {
  const onClickHandler = () => {
    console.log('라디오 테스트')
  }

  return (
    <S.Container key={value}>
      <input
        type='radio'
        name={buttonType}
        value={value}
        id={value}
        onClick={onClickHandler}
      />
      <label htmlFor={value}>{content}</label>
    </S.Container>
  )
}
