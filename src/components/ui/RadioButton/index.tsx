import * as S from './style'
import { RadioButtonProps } from 'index'
import { useAppSelector } from 'store'

export const RadioButton = ({
  name,
  value,
  content,
  onChange
}: RadioButtonProps) => {
  const optionStateValue = useAppSelector((state: any) => state.option[name])

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
