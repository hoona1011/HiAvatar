import { useNavigate } from 'react-router-dom'
import * as S from './style'
import { NextButtonProps } from 'index'
export const NextButton = ({ requestFunc }: NextButtonProps) => {
  const navigate = useNavigate()

  const onClickHandler = () => {
    requestFunc() // from use~~Mutation
    navigate('/project-avatar')
  }
  return (
    <S.Button onClick={onClickHandler}>
      <span>다음</span>
    </S.Button>
  )
}
