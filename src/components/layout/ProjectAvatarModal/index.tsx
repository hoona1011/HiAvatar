import React from 'react'
import * as S from './style'
import { AvatarModalCloseIcon } from 'components/Icons'
import { useNavigate, useParams } from 'react-router-dom'
import { useCreateVideoMutation } from 'api/historyApi'
import { changeIsShowModal } from 'store/slices/avatarSlice'
import { changeIsCreating } from 'store/slices/historySlice'
import { useAvatar, useHistory } from 'hooks'

export const ProjectAvatarModal = () => {
  const { isShowModal, selectedValue, dispatch } = useAvatar()
  const { dispatch: historyDispatch } = useHistory()
  const { projectId } = useParams()
  const navigate = useNavigate()
  const [createVideo] = useCreateVideoMutation()

  const modalHandler = () => {
    dispatch(changeIsShowModal(false))
  }
  const completeHandler = () => {
    createVideo({ projectId, selectedValue })
      .unwrap()
      .then(({ result }) => {
        switch (result) {
          case 'Success': {
            historyDispatch(changeIsCreating(false))
            break
          }
          case 'Failed': {
            alert('영상 합성에 실패하였습니다')
            historyDispatch(changeIsCreating(false))
            break
          }
          default: {
            historyDispatch(changeIsCreating(false))
          }
        }
      })
      .catch((error) => {
        historyDispatch(changeIsCreating(false))
        console.log(error)
        alert(error)
      })
    modalHandler()
    navigate('/project-history')
    historyDispatch(changeIsCreating(true))
  }

  return (
    <S.Container isShowModal={isShowModal}>
      <S.Inner>
        <S.Icon onClick={modalHandler}>
          <AvatarModalCloseIcon
            width='1.4rem'
            height='1.4rem'
            fillColor='#6691FF'
          />
        </S.Icon>
        <S.Content>작업을 완료하시겠습니까?</S.Content>
        <S.BtnContainer>
          <S.CancelButton onClick={modalHandler}>취소</S.CancelButton>
          <S.CompleteButton onClick={completeHandler}>완료</S.CompleteButton>
        </S.BtnContainer>
      </S.Inner>
    </S.Container>
  )
}
