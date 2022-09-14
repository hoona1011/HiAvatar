import React, { useState } from 'react'
import * as S from './style'

interface VoiceProps {
  label: string
  min: number
  median?: number
  max: number
  step: number
  controlType: string
}

export const VoiceController = ({
  label,
  min,
  median,
  max,
  step,
  controlType
}: VoiceProps) => {
  interface InitialOption {
    [key: string]: number
  }
  const initialOption: InitialOption = { speed: 0.5, tone: 0, term: 0 }
  const [optionValue, setOptionValue] = useState(initialOption)

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setOptionValue({ ...optionValue, [name]: Number(value) })
  }
  return (
    <S.Container>
      <label>{label}</label>
      <S.RangeContainer>
        <input
          type='range'
          name={controlType} // ex) speed, tone, term
          value={optionValue[controlType]}
          min={min}
          max={max}
          step={step}
          onChange={onChangeHandler}
        />
        <S.RangeLabel>
          <span>{min}</span>
          <span>{median}</span>
          <span>{max}</span>
        </S.RangeLabel>
      </S.RangeContainer>
    </S.Container>
  )
}
