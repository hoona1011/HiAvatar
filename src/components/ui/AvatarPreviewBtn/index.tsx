import { PreviewReload } from 'components/Icons'
import React from 'react'
import * as S from './style'

export const AvatarPreviewBtn = () => {
  return (
    <S.Container>
      <S.Inner>
        <S.Button>미리보기 재설정</S.Button>
        <PreviewReload width='1.3rem' height='1.2rem' />
      </S.Inner>
    </S.Container>
  )
}
