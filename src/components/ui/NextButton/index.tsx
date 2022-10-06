import { useLocation, useNavigate, useParams } from 'react-router-dom'
import * as S from './style'
import { NextButtonProps } from 'index'

export const NextButton = ({ requestFunc }: NextButtonProps) => {
  const navigate = useNavigate()
  const { projectId } = useParams()

  const onClickHandler = () => {
    requestFunc() // from use~~Mutation
    navigate(`/project-avatar/${projectId}`)
  }
  return (
    <S.Button onClick={onClickHandler}>
      <span>다음</span>
    </S.Button>
  )
}
