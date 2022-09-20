import {
  VoicePreForwardIcon,
  VoicePrePlayIcon,
  VoicePreRewindIcon
} from 'components/Icons'
import React from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import * as S from './style'
export const VoicePreviewPlayer = () => {
  const VoiceData = '/src/assets/test.mp3'
  return (
    <>
      <S.Title>합친 음성을 미리 들을 수 있어요</S.Title>
      <S.CustomStyle>
        <AudioPlayer
          customIcons={{
            play: <VoicePrePlayIcon width='25' height='24' />,
            rewind: <VoicePreRewindIcon width='25' height='24' />,
            forward: <VoicePreForwardIcon width='25' height='24' />
          }}
          customVolumeControls={[]}
          customAdditionalControls={[]}
          layout='horizontal-reverse'
          src={VoiceData}
          onPlay={(e) => console.log('onPlay')}
          // other props here
        />
      </S.CustomStyle>
    </>
  )
}
