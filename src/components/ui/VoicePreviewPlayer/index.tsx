import {
  VoicePreForwardIcon,
  VoicePrePlayIcon,
  VoicePreRewindIcon,
  VoicePauseIcon,
  VoiceStopIcon
} from 'components/Icons'
import React, { useEffect, useRef, useState } from 'react'
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import * as S from './style'

// 타입스크립트 추가 예정

export const VoicePreviewPlayer = () => {
  const voiceData = '/src/assets/test.mp3'
  const player = useRef()

  const stop = () => {
    const audio = player.current.audio.current
    audio.pause()
    audio.currentTime = 0
  }

  return (
    <>
      <S.Title>합친 음성을 미리 들을 수 있어요</S.Title>
      <S.CustomStyle>
        <AudioPlayer
          customIcons={{
            play: <VoicePrePlayIcon width='25' height='24' />,
            previous: <VoicePreRewindIcon width='25' height='24' />,
            next: <VoicePreForwardIcon width='25' height='24' />,
            pause: <VoicePauseIcon width='25' height='24' />
          }}
          customAdditionalControls={[
            <S.StopBtn onClick={stop}>
              <VoiceStopIcon width='25' height='24' />
            </S.StopBtn>
          ]}
          customVolumeControls={[]}
          showJumpControls={false}
          showSkipControls={false}
          layout='horizontal-reverse'
          src={voiceData}
          ref={player}
          // onPlay={(e) => {
          //   console.log(e)
          // }}
        />
      </S.CustomStyle>
    </>
  )
}
