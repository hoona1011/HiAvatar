import React from 'react'
import * as S from './style'
import { TooltipIcon } from 'components/Icons'

export const ProjectList = () => {
  return (
    <S.Container>
      <S.Top>
        <TooltipIcon width='1.6rem' height='1.6rem' />
        <S.Title>프로젝트 히스토리를 확인하세요.</S.Title>
      </S.Top>
      <S.ProjectContainer>
        {/* <S.NoProject>
          프로젝트가 없습니다. 새 프로젝트를 생성하세요.
        </S.NoProject> */}
        <S.Inner>
          <S.Project></S.Project>
          <S.Name>프로젝트 이름</S.Name>
          <S.Date>22.02.02</S.Date>
        </S.Inner>
      </S.ProjectContainer>
    </S.Container>
  )
}
