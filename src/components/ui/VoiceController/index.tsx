import React, { useState } from 'react'
import * as S from './style'

interface VoiceProps {
  label: string
  min: number
  max: number
  step: number
  controlType: string
}

export const VoiceController = ({
  label,
  min,
  max,
  step,
  controlType
}: VoiceProps) => {
  const [optionValue, setOptionValue] = useState({ speed: 0 })

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setOptionValue({ ...optionValue, [name]: value })
  }
  return (
    <S.Container>
      <label>{label}</label>
      <span> value: {optionValue.speed}</span>
      <S.RangeContainer>
        <input
          type='range'
          name={controlType} // speed, tone, term
          value={optionValue.speed}
          min={min}
          max={max}
          step={step}
          onChange={onChangeHandler}
        />
        <S.RangeLabel>
          <span>-0.5</span>
          <span>0</span>
          <span>0.5</span>
        </S.RangeLabel>
      </S.RangeContainer>
    </S.Container>
  )
}
