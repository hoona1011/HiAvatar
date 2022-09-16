import React from 'react'
import { SelectedAvatar, SelectedVoiceOptions } from '../../../components'
import * as S from './style'

interface ProjectRightNavProps {
  renderType: string
}

export const ProjectRightNav = ({ renderType }: ProjectRightNavProps) => {
  switch (renderType) {
    case 'ProjectText':
      return (
        <>
          <S.Container>
            프로젝트 텍스트 관련 내용
            <S.BtnContainer />
          </S.Container>
        </>
      )
    case 'VoiceControllerMenu':
      return (
        <>
          <S.Container>
            보이스 컨트롤 메뉴
            <S.BtnContainer />
          </S.Container>
        </>
      )
    case 'AvatarVoicePlayersMenu':
      return (
        <>
          <S.Container>
            보이스 플레이어즈 메뉴
            <S.BtnContainer />
          </S.Container>
        </>
      )
    case 'ProjectAvatar':
      return (
        <>
          <S.Container>
            <S.Inner>
              <SelectedAvatar />
              <SelectedVoiceOptions />
            </S.Inner>
            <S.BtnContainer />
          </S.Container>
        </>
      )
    default:
      return <></>
  }
}
