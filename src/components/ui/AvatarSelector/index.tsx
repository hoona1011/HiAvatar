import React from 'react'
import * as S from './style'

export const AvatarSelector = () => {
  return (
    <S.Container>
      <S.Title>아바타를 선택해 주세요</S.Title>
      <S.AvatarContainer>
        <S.AvatarInner>
          <S.Avatar></S.Avatar>
          <S.AvatarName>아바타 1기</S.AvatarName>
        </S.AvatarInner>
      </S.AvatarContainer>
    </S.Container>
  )
}
