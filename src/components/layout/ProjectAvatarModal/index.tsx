import React, { useState } from 'react'
import * as S from './style'
import { AvatarModalCloseIcon } from 'components/Icons'
import { useAvatar, changeIsShowModal } from 'store/slices/avatarSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { useCreateVideoMutation } from 'api/avatarApi'

export const ProjectAvatarModal = () => {
  const { isShowModal, selectedValue, dispatch } = useAvatar()
  const [isCreateVideo, setIsCreateVideo] = useState(false)
  const { projectId } = useParams()
  const navigate = useNavigate()
  const [createVideo] = useCreateVideoMutation()

  const modalHandler = () => {
    dispatch(changeIsShowModal(false))
  }
  const completeHandler = () => {
    console.log('id', projectId)
    console.log('value', selectedValue)
    setIsCreateVideo(true)
    createVideo({ projectId, selectedValue })
      .unwrap()
      .then(({ result }) => {
        switch (result) {
          case 'Success': {
            navigate('/project-history')
            navigate(0)
            modalHandler()
          }
          case 'Failed': {
            alert('영상 합성에 실패하였습니다')
            setIsCreateVideo(false)
            modalHandler()
          }
          default: {
            setIsCreateVideo(false)
            modalHandler()
          }
        }
      })
      .catch((error) => {
        alert(error)
        setIsCreateVideo(false)
        modalHandler()
      })
  }

  return (
    <S.Container isShowModal={isShowModal}>
      {isCreateVideo ? (
        <S.Inner>
          <S.LoadingContent>영상을 생성중입니다...</S.LoadingContent>
          <S.Spinner />
        </S.Inner>
      ) : (
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
      )}
    </S.Container>
  )
}
