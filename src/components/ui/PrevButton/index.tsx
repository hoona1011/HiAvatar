import { useSaveAvatarMutation } from 'api/avatarApi'
import { useNavigate, useParams } from 'react-router-dom'
import { useAvatar } from 'store/slices/avatarSlice'
import * as S from './style'

export const PrevButton = () => {
  const navigate = useNavigate()
  const { projectId } = useParams()
  const { selectedValue } = useAvatar()
  const [saveAvatar] = useSaveAvatarMutation()
  const onClickHandler = () => {
    saveAvatar({ projectId, selectedValue })
    navigate(`/project-text-edit/${projectId}`)
  }
  return (
    <S.Button onClick={onClickHandler}>
      <span>이전</span>
    </S.Button>
  )
}
