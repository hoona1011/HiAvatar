import React from 'react'
import {
  SelectedAvatar,
  SelectedVoiceOptions,
  AvatarVoiceMenu,
  VoiceControlMenu,
  ProjectText,
  PrevButton,
  NextButton
} from 'components'
import * as S from './style'
import { ProjectRightNavProps } from 'index'

export const ProjectRightNav = ({ renderType }: ProjectRightNavProps) => {
  switch (renderType) {
    case 'ProjectText':
      return (
        <>
          <S.Container>
            <ProjectText />
            <S.BtnContainer />
          </S.Container>
        </>
      )
    case 'VoiceControllerMenu':
      return (
        <>
          <S.Container>
            <VoiceControlMenu />
            <S.BtnContainer />
          </S.Container>
        </>
      )
    case 'AvatarVoicePlayersMenu':
      return (
        <>
          <S.Container>
            <AvatarVoiceMenu />
            <S.BtnContainer>
              <PrevButton />
              <NextButton
                requestFunc={() => console.log('요청 완료')}
                content='다음'
                to='/'
              />
            </S.BtnContainer>
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
