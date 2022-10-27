import { useSaveAvatarMutation } from 'api/avatarApi'
import { useNavigate, useParams } from 'react-router-dom'
import { useAvatar } from 'hooks'

export const useProjectAvatarSave = () => {
  const navigate = useNavigate()
  const { projectId } = useParams()
  const { selectedValue } = useAvatar()
  const [saveAvatar, { isLoading }] = useSaveAvatarMutation()

  const projectAvatarSave = (requiredType: string) => {
    saveAvatar({ projectId, selectedValue })
      .unwrap()
      .then((result) => {
        if (result.code === 200) {
          switch (requiredType) {
            case 'header': {
              alert('저장되었습니다')
              navigate('/project-history')
              break
            }
            case 'project-avatar': {
              navigate(`/project-text-edit/${projectId}`)
              break
            }
          }
        } else {
          alert('에러가 발생하였습니다')
        }
      })
      .catch((error) => {
        alert(error)
      })
  }
  return { projectAvatarSave, isLoading }
}
