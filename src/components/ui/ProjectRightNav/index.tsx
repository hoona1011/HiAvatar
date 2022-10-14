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
          <S.Inner>
            <ProjectText />
            <S.BtnContainer>
              <NextButton requestFunc={() => console.log('요청 완료')} />
            </S.BtnContainer>
          </S.Inner>
        </S.Container>
      )
    case 'VoiceControllerMenu':
      return (
        <S.Container>
          <S.Inner>
            <VoiceControlMenu />
            <S.BtnContainer>
              <NextButton requestFunc={() => console.log('요청 완료')} />
            </S.BtnContainer>
          </S.Inner>
        </S.Container>
      )
    case 'AvatarVoicePlayersMenu':
      return (
        <S.Container>
          <S.Inner>
            <AvatarVoiceMenu />
            <S.BtnContainer>
              <NextButton requestFunc={() => console.log('요청 완료')} />
            </S.BtnContainer>
          </S.Inner>
        </S.Container>
      )
    case 'ProjectAvatar':
      return (
        <S.Container>
          <S.Inner>
            <SelectedAvatar />
            <SelectedVoiceOptions />
            <S.BtnGr>
              <PrevButton />
              <CompleteButton />
            </S.BtnGr>
          </S.Inner>
        </S.Container>
      )
    default:
      return <></>
  }
}
