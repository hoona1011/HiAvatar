import React from 'react'
import * as S from './style'

export const AvatarSelector = () => {
  return (
    <S.Container>
      <S.Title>아바타를 선택해 주세요</S.Title>
      <S.AvatarContainer>
        <S.AvatarInner>
          <S.Avatar />
          <S.AvatarName>아바타 1기</S.AvatarName>
        </S.AvatarInner>
        <S.AvatarInner>
          <S.Avatar />
          <S.AvatarName>아바타 2기</S.AvatarName>
        </S.AvatarInner>
        <S.AvatarInner>
          <S.Avatar />
          <S.AvatarName>아바타 3기</S.AvatarName>
        </S.AvatarInner>
        <S.AvatarInner>
          <S.Avatar />
          <S.AvatarName>아바타 4기</S.AvatarName>
        </S.AvatarInner>
        <S.AvatarInner>
          <S.Avatar />
          <S.AvatarName>아바타 5기</S.AvatarName>
        </S.AvatarInner>
        <S.AvatarInner>
          <S.Avatar />
          <S.AvatarName>아바타 6기</S.AvatarName>
        </S.AvatarInner>
        <S.AvatarInner>
          <S.Avatar />
          <S.AvatarName>아바타 7기</S.AvatarName>
        </S.AvatarInner>
      </S.AvatarContainer>
    </S.Container>
  )
}
