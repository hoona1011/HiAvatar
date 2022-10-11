import React from 'react'
import * as S from './style'
import { AvatarPreviewBtn, Spinner, TootipMessage } from 'components'
import { TooltipIcon } from 'components/Icons'
import { useAvatar } from 'store/slices/avatarSlice'

export const SelectedAvatar = () => {
  const { avatarPreview, isAvatarPreviewLoading } = useAvatar()

  return (
    <S.Container>
      <S.Top>
        <S.Tooltip>
          <TooltipIcon width='1.6rem' height='1.6rem' />
          <div className='message'>
            <TootipMessage
              content='선택한 아바타를 미리 확인할 수 있어요.'
              width='20.8rem'
            />
          </div>
        </S.Tooltip>
        <S.Title>선택한 아바타를 미리 볼 수 있어요</S.Title>
      </S.Top>
      {isAvatarPreviewLoading ? (
        <S.PreviewAvatarLoading>
          <Spinner />
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
