import React from 'react'
import * as S from './style'
// import { InitialOption } from '../../layout/VoiceControlMenu'
import { useAppDispatch } from 'store'
import { changeOption } from '../../../store/slices/optionSlice'

interface VoiceProps {
  label: string
  min: number
  median?: number
  max: number
  step: number
  controlType: string
  optionValue: number
}

export const VoiceController = ({
  label,
  min,
  median,
  max,
  step,
  controlType,
  optionValue
}: VoiceProps) => {
  const dispatch = useAppDispatch()
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    dispatch(
      changeOption({
        name,
        value: Number(value)
      })
    )
  }

  return (
    <S.Container>
      <label>{label}</label>
      <S.RangeContainer>
        <input
          type='range'
          name={controlType} // ex) speed, pitch, sentenceSpacing
          value={optionValue}
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
