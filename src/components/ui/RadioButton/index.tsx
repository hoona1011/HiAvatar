import * as S from './style'
import { RadioButtonProps } from 'index'
import { useAppSelector } from 'store'

export const RadioButton = ({
  name,
  value,
  content,
  onChange,
  defaultChecked
}: RadioButtonProps) => {
  const optionValue = useAppSelector((state) => state.option[name])

  return (
    <S.Container key={value}>
      <input
        type='radio'
        name={name}
        value={value}
        id={value}
        onChange={onChange}
        defaultChecked={value === 'ProjectText' ? true : optionValue === value}
      />
      <label htmlFor={value}>{content}</label>
    </S.Container>
  )
}
