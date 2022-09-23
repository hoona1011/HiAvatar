import React from 'react'
import * as S from './style'
import { SignUpIcon } from 'components/Icons'

export const SignUp = () => {
  return (
    <S.SignUpContainer>
      <S.SignUpWrapper>
        <S.SignUpText>회원가입</S.SignUpText>
        <S.SignUpEmailWrapper>
          <S.SignUpText2>이메일</S.SignUpText2>
          <S.PositionWrap>
            <S.SignUpInput type='text' />
            <S.IdCheckBtn>중복 확인</S.IdCheckBtn>
          </S.PositionWrap>
          <S.TempSpan>(이메일 중복 멘트)</S.TempSpan>
        </S.SignUpEmailWrapper>
        <S.SignUpEmailWrapper>
          <S.SignUpText2>비밀번호</S.SignUpText2>
          <S.PositionWrap>
            <S.SignUpPwInput type='paswword' />
            <S.PasswordCheckBtn>
              <SignUpIcon width='18' height='18' />
            </S.PasswordCheckBtn>
          </S.PositionWrap>
          <S.TempSpan>
            * 영문 대소문자, 숫자, 특수문자 중 2가지 이상 조합(8~50자)
          </S.TempSpan>
        </S.SignUpEmailWrapper>
        <S.SignUpEmailWrapper>
          <S.SignUpText2>비밀번호 확인</S.SignUpText2>
          <S.PositionWrap>
            <S.SignUpPwInput type='password' />
            <S.PasswordCheckBtn>
              <SignUpIcon width='18' height='18' />
            </S.PasswordCheckBtn>
          </S.PositionWrap>
          <S.TempSpan>(비밀번호 중복 확인 멘트)</S.TempSpan>
        </S.SignUpEmailWrapper>
        <S.SignUpBtn>회원가입하기 </S.SignUpBtn>
      </S.SignUpWrapper>
    </S.SignUpContainer>
  )
}
