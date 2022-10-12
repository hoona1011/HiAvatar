import React from 'react'
import * as S from './style'
import { useCreateProjectMutation } from 'api/historyApi'
import { CreateProjectButtonIcon } from 'components/Icons'
import { useNavigate } from 'react-router-dom'
import { changeIsShowHistoryModal } from 'store/slices/historySlice'
import { useHistory } from 'hooks'

export const CreateProjectButton = () => {
  const [createProject] = useCreateProjectMutation()
  const navigate = useNavigate()
  const { projects, dispatch } = useHistory()

  const onClickHandler = () => {
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

  return (
    <S.Button
      onClick={() => {
        onClickHandler()
      }}
    >
      <S.Top>
        <CreateProjectButtonIcon width='1.8rem' height='1.8rem' />
        <S.Content>프로젝트 생성</S.Content>
      </S.Top>
    </S.Button>
  )
}
