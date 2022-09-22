import React from 'react'
import * as S from './style'

export const AvatarBg = () => {
  return (
    <S.Container>
      <S.Title>배경을 선택해 주세요</S.Title>
      <S.BgContainer>
        <S.BgInner>
          <S.Bg />
          <S.BgName>배경 1</S.BgName>
        </S.BgInner>
        <S.BgInner>
          <S.Bg />
          <S.BgName>배경 2</S.BgName>
        </S.BgInner>
        <S.BgInner>
          <S.Bg />
          <S.BgName>배경 3</S.BgName>
        </S.BgInner>
        <S.BgInner>
          <S.Bg />
          <S.BgName>배경 4</S.BgName>
        </S.BgInner>
      </S.BgContainer>
    </S.Container>
  )
}
