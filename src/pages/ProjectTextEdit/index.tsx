import React, { useState, useEffect } from 'react'
import {
  NextButton,
  TextEnterButton,
  TheHeader,
  ProjectText,
  PrevButton,
  ProjectRightNav
} from '../../components'
import { VoiceUploadButton, TextEditList } from '../../components'
import axios from 'axios'
import * as S from './style'

export const ProjectTextEdit = () => {
  //현재

  // 지훈
  return (
    <>
      <div>
        {/* 현재 */}
        <TheHeader />
        <TextEditList />
        <ProjectText />
        {/* 지훈 */}
        <ProjectRightNav renderType='AvatarVoicePlayersMenu' />
        <ProjectRightNav renderType='VoiceControllerMenu' />
        <VoiceUploadButton />
        <TextEnterButton />
        <PrevButton />
        <NextButton />
      </div>
    </>
  )
}
