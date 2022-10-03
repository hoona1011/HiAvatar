import React from 'react'
import {
  SelectedAvatar,
  SelectedVoiceOptions,
  AvatarVoiceMenu,
  VoiceControlMenu,
  ProjectText,
  PrevButton,
  NextButton,
  CompleteButton
} from 'components'
import * as S from './style'
import { ProjectRightNavProps } from 'index'

export const ProjectRightNav = ({ renderType }: ProjectRightNavProps) => {
  switch (renderType) {
    case 'ProjectText':
      return (
        <S.Container>
          <ProjectText />
          <S.BtnContainer />
        </S.Container>
      )
    case 'VoiceControllerMenu':
      return (
        <S.Container>
          <VoiceControlMenu />
          <S.BtnContainer>
            <NextButton requestFunc={() => console.log('요청 완료')} />
          </S.BtnContainer>
        </S.Container>
      )
    case 'AvatarVoicePlayersMenu':
      return (
        <S.Container>
          <AvatarVoiceMenu />
          <S.BtnContainer>
            <NextButton requestFunc={() => console.log('요청 완료')} />
          </S.BtnContainer>
        </S.Container>
      )
    case 'ProjectAvatar':
      return (
        <S.Container>
          <S.Inner>
            <SelectedAvatar />
            <SelectedVoiceOptions />
          </S.Inner>
          <PrevButton />
          <CompleteButton />
        </S.Container>
      )
    default:
      return <></>
  }
}
