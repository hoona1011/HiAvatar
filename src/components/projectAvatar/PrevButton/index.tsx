import { useProjectAvatarSave } from 'hooks'
import * as S from './style'

export const PrevButton = () => {
  const { projectAvatarSave } = useProjectAvatarSave()

  return (
    <S.Button onClick={() => projectAvatarSave('project-avatar')}>
      <span>이전</span>
    </S.Button>
  )
}
