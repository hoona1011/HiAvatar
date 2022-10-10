import React from 'react'
import * as S from './style'
import { AvatarModalCloseIcon } from 'components/Icons'
import { changeIsShowHistoryModal, useHistory } from 'store/slices/historySlice'
import { useCreateProjectMutation } from 'api/historyApi'
import { useNavigate } from 'react-router-dom'

export const ProjectHistoryModal = () => {
  const { isShowHistoryModal, dispatch } = useHistory()
  const [createProject] = useCreateProjectMutation()
  const navigate = useNavigate()

  const modalHandler = () => {
    dispatch(changeIsShowHistoryModal(false))
  }

  const completeHandler = () => {
    createProject()
      .unwrap()
      .then(({ projectId }) => {
        dispatch(changeIsShowHistoryModal(false))
        navigate(`/project-text-edit/${projectId}`)
      })
      .catch((error) => {
        alert(error)
      })
  }

  return (
    <S.Container isShowHistoryModal={isShowHistoryModal}>
      <S.Inner>
        <S.Icon onClick={modalHandler}>
          <AvatarModalCloseIcon
            width='1.4rem'
            height='1.4rem'
            fillColor='#6691FF'
          />
        </S.Icon>
        <S.Content>
          프로젝트가 5개 입니다, <br />
          기존 프로젝트 하나를 삭제하고 <br />
          새로운 프로젝트를 만드시겠습니까?
        </S.Content>
        <S.BtnContainer>
          <S.CancelButton onClick={modalHandler}>취소</S.CancelButton>
          <S.CompleteButton onClick={completeHandler}>생성</S.CompleteButton>
        </S.BtnContainer>
      </S.Inner>
    </S.Container>
  )
}
