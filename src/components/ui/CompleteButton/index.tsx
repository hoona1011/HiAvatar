import React, { useEffect } from 'react'
import * as S from './style'
import { useAvatar } from 'store/slices/avatarSlice'

export const CompleteButton = () => {
  const { isAllSelected } = useAvatar()

  return (
    <S.Button disabled={!isAllSelected}>
      <span>완료</span>
    </S.Button>
  )
}
