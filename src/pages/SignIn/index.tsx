import React from 'react'
import * as S from './style'

export const SignIn = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.TopText>로그인</S.TopText>
        <S.EmailWrapper>
          <S.MidText>아이디</S.MidText>
          <S.EmailInput type='text' />
        </S.EmailWrapper>
        <S.PwWrapper>
          <S.MidText>패스워드</S.MidText>
          <S.PwInput type='password' />
        </S.PwWrapper>
        <S.SignInBtn>로그인</S.SignInBtn>
        <S.BotText>
          회원이 아니신가요? <S.SignUpSpan>가입하기</S.SignUpSpan>
        </S.BotText>
        <S.SimpleWrapper>
          <S.SimpleLogBtn>구글로 간편 로그인</S.SimpleLogBtn>
          <S.SimpleLogBtn>카카오로 간편 로그인</S.SimpleLogBtn>
        </S.SimpleWrapper>
      </S.Wrapper>
    </S.Container>
  )
}
