import React from 'react'
import * as S from './style'
import { AvatarPreviewBtn } from 'components'
import { TooltipIcon } from 'components/Icons'
import { useAvatar } from 'store/slices/avatarSlice'

export const SelectedAvatar = () => {
  const { avatarPreview, isAvatarPreviewLoading } = useAvatar()

  return (
    <S.Container>
      <S.Top>
        <TooltipIcon width='1.6rem' height='1.6rem' />
        <S.Title>선택한 아바타를 미리 볼 수 있어요</S.Title>
      </S.Top>
      {isAvatarPreviewLoading ? (
        <S.PreviewAvatarLoading>
          <S.Spinner />
        </S.PreviewAvatarLoading>
      ) : (
        <S.PreviewAvatar
          thumbnail={`data:image/png;base64, ${avatarPreview}`}
        />
      )}
      <AvatarPreviewBtn />
    </S.Container>
  )
}
