import * as S from './style'
import { RadioButtonProps } from 'index'

export const RadioButton = ({
  buttonType,
  value,
  content,
  onChange,
  defaultChecked
}: RadioButtonProps) => {
  return (
    <S.Container key={value}>
      <input
        type='radio'
        name={buttonType}
        id={value}
        value={value}
        onChange={onChange}
        defaultChecked={defaultChecked}
      />
      <label htmlFor={value}>{content}</label>
    </S.Container>
  )
}
