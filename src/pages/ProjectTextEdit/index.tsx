import React, { useState } from 'react'
import {
  AvatarVoiceMenu,
  NextButton,
  TextEnterButton,
  TheHeader,
  VoiceControlMenu,
  ProjectText,
  PrevButton
} from '../../components'
import { VoiceUploadButton, TextEditList } from '../../components'
import * as S from './style'

export const ProjectTextEdit = () => {
  return (
    <>
      <div>
        {/* 현재 */}
        <TheHeader />
        <TextEditList />
        <ProjectText />

        {/* 지훈 */}
        <AvatarVoiceMenu />
        <VoiceControlMenu />
        <VoiceUploadButton />
        <TextEnterButton />
        <PrevButton />
        <NextButton />
      </div>
    </>
  )
}
