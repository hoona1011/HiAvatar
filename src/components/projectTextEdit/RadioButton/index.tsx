import React from 'react'
import * as S from './style'
import { useAppSelector } from 'store'

interface RadioButtonProps {
  name: string
  value: string
  content: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const RadioButton = ({
  name,
  value,
  content,
  onChange
}: RadioButtonProps) => {
  const optionStateValue = useAppSelector((state) => state.option[name])

  return (
    <S.Container key={value}>
      <input
        type='radio'
        name={name}
        id={value}
        value={value}
        onChange={onChange}
        defaultChecked={optionStateValue === value}
      />
      <label htmlFor={value}>{content}</label>
    </S.Container>
  )
}
