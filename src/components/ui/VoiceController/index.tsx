import React from 'react'
import * as S from './style'
import { useAppDispatch } from 'store'
import { changeOption } from 'store/slices/optionSlice'
import { VoiceControllerProps } from 'index'

export const VoiceController = ({
  label,
  min,
  max,
  step,
  controlType,
  optionValue
}: VoiceControllerProps) => {
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
      <S.RangeContainer controlType={controlType}>
        <span>{min}</span>
        <input
          type='range'
          name={controlType} // ex) speed, pitch, sentenceSpacing
          value={optionValue}
          min={min}
          max={max}
          step={step}
          onChange={onChangeHandler}
        />
        <span>{max}</span>
      </S.RangeContainer>
    </S.Container>
  )
}
