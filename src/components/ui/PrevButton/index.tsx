import { useSaveAvatarMutation } from 'api/avatarApi'
import { useNavigate, useParams } from 'react-router-dom'
import { useAvatar } from 'hooks'
import * as S from './style'

export const PrevButton = () => {
  const navigate = useNavigate()
  const { projectId } = useParams()

  const onClickHandler = () => {
    navigate(`/project-text-edit/${projectId}`)
  }
  return (
    <S.Button onClick={onClickHandler}>
      <span>이전</span>
    </S.Button>
  )
}
