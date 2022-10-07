import React from 'react'
import * as S from './style'
import { PwCheckIcon } from 'components/Icons'

export const MyPage = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.TopText>계정관리</S.TopText>
        <S.MyPwWrapper>
          <S.MidText>기존 비밀번호</S.MidText>
          <S.PwInput type='text' />
        </S.MyPwWrapper>
        <S.ChangePwWrapper>
          <S.MidText>변경할 비밀번호</S.MidText>
          <S.PositionWrap>
            <S.PwInput type='paswword' />
            <S.PwCheckBtn>
              <PwCheckIcon width='18' height='18' />
            </S.PwCheckBtn>
          </S.PositionWrap>
          <S.TempSpan>
            * 영문 대소문자, 숫자, 특수문자 중 2가지 이상 조합(8~50자)
          </S.TempSpan>
        </S.ChangePwWrapper>
        <S.NewPwWrapper>
          <S.MidText>새로운 비밀번호 확인</S.MidText>
          <S.PositionWrap>
            <S.PwInput type='password' />
            <S.PwCheckBtn>
              <PwCheckIcon width='18' height='18' />
            </S.PwCheckBtn>
          </S.PositionWrap>
          <S.NewPwSpan>(비밀번호 중복 확인 멘트)</S.NewPwSpan>
        </S.NewPwWrapper>
        <S.SubmitBtn>비밀번호 변경하기</S.SubmitBtn>
      </S.Wrapper>
    </S.Container>
  )
}
