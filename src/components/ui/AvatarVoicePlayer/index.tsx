import React from 'react'
import * as S from './style'
import { AvatarVoicePlayBtn, AvatarVoiceStopBtn } from '../../Icons'

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
          <AvatarVoicePlayBtn />
        </S.PlayBtnWrapper>
        <AvatarVoiceStopBtn />
      </S.BtnWrapper>
    </S.Container>
  )
}
