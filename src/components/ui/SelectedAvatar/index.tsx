import { TooltipIcon } from 'components/Icons'
import React from 'react'
import { AvatarPreviewBtn } from 'components'
import * as S from './style'

export const SelectedAvatar = () => {
  return (
    <S.Container>
      <S.Top>
        <TooltipIcon width='16' height='16' />
        <S.Title>선택한 아바타를 미리 볼 수 있어요</S.Title>
      </S.Top>
      <S.PreviewAvatar />
      <AvatarPreviewBtn />
    </S.Container>
  )
}
