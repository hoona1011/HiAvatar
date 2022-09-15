import React from 'react'
import * as S from './style'
import { PlayIcon, StopIcon } from '../../Icons'

export const AvatarVoicePlayer = () => {
  return (
    <S.Container>
      <S.TextWrapper>
        <S.AvatarName>가영</S.AvatarName>
        <S.Language>#가나다</S.Language>
        <S.Language>#가나다</S.Language>
        <S.Language>#가나다</S.Language>
      </S.TextWrapper>
      <S.BtnWrapper>
        <S.PlayBtnWrapper>
          <PlayIcon width='51' height='50' />
        </S.PlayBtnWrapper>
        <StopIcon width='51' height='50' />
      </S.BtnWrapper>
    </S.Container>
  )
}
