import React from 'react'
import * as S from './style'

export const ProjectList = () => {
  return (
    <S.Container>
      <S.Title>작업중인 프로젝트 히스토리를 확인하세요.</S.Title>
      <S.ProjectContainer>
        <S.ProjectInner>
          <S.Project></S.Project>
          <S.ProjectName>프로젝트 이름</S.ProjectName>
          <S.ProjectDate>22.02.02</S.ProjectDate>
        </S.ProjectInner>
      </S.ProjectContainer>
    </S.Container>
  )
}
