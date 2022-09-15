import React from 'react'
import * as S from './style'
import { InitialOption } from '../../../pages/ProjectTextEnter'

interface VoiceProps {
  label: string
  min: number
  median?: number
  max: number
  step: number
  controlType: string
  optionValue: InitialOption
  setOptionValue: React.Dispatch<React.SetStateAction<InitialOption>>
}

export const VoiceController = ({
  label,
  min,
  median,
  max,
  step,
  controlType,
  optionValue,
  setOptionValue
}: VoiceProps) => {
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
          name={controlType} // ex) speed, pitch, sentenceSpacing
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
