import React from 'react'
import * as S from './style'
import { AvatarModalCloseIcon } from 'components/Icons'
import { useAvatar, changeIsShowModal } from 'store/slices/avatarSlice'
import { useNavigate } from 'react-router-dom'

export const ProjectAvatarModal = () => {
  const { isShowModal, dispatch } = useAvatar()
  const navigate = useNavigate()

  const modalHandler = () => {
    dispatch(changeIsShowModal({ diff: false }))
  }
  const completeHandler = () => {
    navigate('/project-history')
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
