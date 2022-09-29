import React from 'react'
import * as S from './style'
import { useAvatar, changeIsShowModal } from 'store/slices/avatarSlice'

export const CompleteButton = () => {
  const { isAllSelected, dispatch } = useAvatar()
  const modalHandler = () => {
    dispatch(changeIsShowModal({ diff: true }))
  }
  return (
    <S.Button disabled={!isAllSelected} onClick={modalHandler}>
      <span>완료</span>
    </S.Button>
  )
}
