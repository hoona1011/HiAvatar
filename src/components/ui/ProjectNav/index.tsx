import React from 'react'
import * as S from './style'
import { NavIon01, NavIon02, NavIon03, NavIon04 } from '../../Icons'

export const ProjectNav = () => {
  return (
    <S.ProjectNavContainer>
      <S.ProjectNavStepContainer>
        <S.ProjectNavStepIcon>
          <NavIon01 width='31' height='30' />
        </S.ProjectNavStepIcon>
        <S.ProjectNavText>01.텍스트 입력</S.ProjectNavText>
      </S.ProjectNavStepContainer>
      <S.ProjectNavHr />
      <S.ProjectNavStepContainer>
        <S.ProjectNavStepIcon>
          <NavIon02 width='31' height='30' />
        </S.ProjectNavStepIcon>
        <S.ProjectNavText>02.텍스트 수정</S.ProjectNavText>
      </S.ProjectNavStepContainer>
      <S.ProjectNavHr />
      <S.ProjectNavStepContainer>
        <S.ProjectNavStepIcon>
          <NavIon03 width='31' height='30' />
        </S.ProjectNavStepIcon>
        <S.ProjectNavText>03.아바타 선택</S.ProjectNavText>
      </S.ProjectNavStepContainer>
      <S.ProjectNavHr />
      <S.ProjectNavStepContainer>
        <S.ProjectNavStepIcon>
          <NavIon04 width='31' height='30' />
        </S.ProjectNavStepIcon>
        <S.ProjectNavText>04.제작 완료</S.ProjectNavText>
      </S.ProjectNavStepContainer>
    </S.ProjectNavContainer>
  )
}
