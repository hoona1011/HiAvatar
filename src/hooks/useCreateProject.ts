import { useCreateProjectMutation } from 'api/historyApi'
import { useNavigate } from 'react-router-dom'
import { changeIsShowHistoryModal } from 'store/slices/historySlice'
import { useHistory } from 'hooks'

export const useCreateProject = () => {
  const [createProject] = useCreateProjectMutation()
  const navigate = useNavigate()
  const { projects, dispatch } = useHistory()

  const useFunction = () => {
    if (projects.length === 5) {
      dispatch(changeIsShowHistoryModal(true))
    } else {
      createProject()
        .unwrap()
        .then(({ projectId }) => {
          navigate(`/project-text-edit/${projectId}`)
        })
        .catch((error) => {
          alert(error)
        })
    }
  }

  return { useFunction }
}
