import { useLocation, useNavigate } from 'react-router-dom'
import * as S from './style'
import { NextButtonProps } from 'index'
export const NextButton = ({ requestFunc }: NextButtonProps) => {
  const navigate = useNavigate()
  const location = useLocation()

  const onClickHandler = () => {
    requestFunc() // from use~~Mutation
    const projectId = location.pathname.replace(/[^0-9]/g, '')
    navigate(`/project-avatar/${projectId}`)
  }
  return (
    <S.Button onClick={onClickHandler}>
      <span>다음</span>
    </S.Button>
  )
}
