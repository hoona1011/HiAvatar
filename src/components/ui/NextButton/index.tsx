import { useNavigate } from 'react-router-dom'
import * as S from './style'
import { NextButtonProps } from 'index'
export const NextButton = ({ requestFunc, isComplete }: NextButtonProps) => {
  const navigate = useNavigate()

  const onClickHandler = () => {
    requestFunc() // from use~~Mutation
    navigate(isComplete ? '/project-history' : '/project-avatar')
  }
  return (
    <S.Button onClick={onClickHandler} isComplete={isComplete}>
      <span>{isComplete ? '완료' : '다음'}</span>
    </S.Button>
  )
}
