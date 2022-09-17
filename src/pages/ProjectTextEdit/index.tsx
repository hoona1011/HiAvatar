import React, { useState, useEffect } from 'react'
import {
  TextEnterButton,
  TheHeader,
  ProjectText,
  ProjectRightNav
} from '../../components'
import { VoiceUploadButton, TextEditList } from '../../components'
import * as S from './style'

export const ProjectTextEdit = () => {
  //현재

  // 지훈
  return (
    <>
      <div>
        <TheHeader />
        <S.Wrapper>
          <S.Inner>
            <S.Left>
              <S.StepNavigator></S.StepNavigator>
              <TextEditList />
              <S.VoicePlayer>test</S.VoicePlayer>
            </S.Left>
            <S.Right>
              <ProjectRightNav renderType='AvatarVoicePlayersMenu' />
              <ProjectRightNav renderType='VoiceControllerMenu' />
              <VoiceUploadButton />
              <TextEnterButton />
            </S.Right>
          </S.Inner>
        </S.Wrapper>
      </div>
    </>
  )
}
