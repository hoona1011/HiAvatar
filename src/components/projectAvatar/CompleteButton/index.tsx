import React from 'react'
import * as S from './style'
import { changeIsShowModal } from 'store/slices/avatarSlice'
import { useAvatar } from 'hooks'

export const CompleteButton = () => {
  const { isAllSelected, dispatch } = useAvatar()
  const modalHandler = () => {
    dispatch(changeIsShowModal(true))
  }
  return (
    <S.Button disabled={!isAllSelected} onClick={modalHandler}>
      <span>완료</span>
    </S.Button>
  )
}
