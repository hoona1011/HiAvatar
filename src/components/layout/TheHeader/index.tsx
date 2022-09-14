import React from 'react'
import * as S from './styles'

export const TheHeader = () => {
  return (
    <S.Wrapper>
      <S.Inner>
        <div>로고</div>
        <div></div>
        <div>
          <S.SignUpBtn>회원가입</S.SignUpBtn>
        </div>
      </S.Inner>
    </S.Wrapper>
  )
}
