import {
  VoicePreForwardIcon,
  VoicePrePlayIcon,
  VoicePreRewindIcon
} from 'components/Icons'
import React, { useEffect, useRef, useState } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import * as S from './style'

// 타입스크립트 추가 예정

export const VoicePreviewPlayer = () => {
  const VoiceData = '/src/assets/test.mp3'
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
            next: <VoicePreForwardIcon width='25' height='24' />
          }}
          customAdditionalControls={[<button onClick={stop}>stop</button>]}
          customVolumeControls={[]}
          showJumpControls={false}
          showSkipControls={false}
          layout='horizontal-reverse'
          src={VoiceData}
          ref={player}
          onPlay={(e) => {
            console.log(e)
          }}
          // other props here
        />
      </S.CustomStyle>
    </>
  )
}
