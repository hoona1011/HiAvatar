import { useNavigate } from 'react-router-dom'
import * as S from './style'

interface Props {
  content: string
  requestFunc: any // 추후 수정
  to: string
}

export const NextButton = ({ content, requestFunc, to }: Props) => {
  const navigate = useNavigate()

  const onClickHandler = () => {
    requestFunc() // from use~~Mutation
    navigate(to)
  }
  return (
    <S.Button onClick={onClickHandler}>
      <span>{content}</span>
    </S.Button>
  )
}
