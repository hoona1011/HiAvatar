import { LogoIcon } from 'components/Icons'
import React from 'react'
import * as S from './style'

export const TheFooter = () => {
  return (
    <S.FooterContainer>
      <S.FooterTextWrapper>
        <S.FooterTextTop>
          대표 박철민 | 서울특별시 마포구 월드컵북로 396 <br />
          admin@aipark.ai | 전화번호 02-6925-6028
        </S.FooterTextTop>
        <S.FooterTextBot>ⓒ AIPARK CO.,LTD All rights reserved</S.FooterTextBot>
      </S.FooterTextWrapper>
      <S.FooterLogo>
        <LogoIcon width='100' height='40' />
      </S.FooterLogo>
    </S.FooterContainer>
  )
}
