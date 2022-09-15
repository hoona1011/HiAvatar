import React from 'react'
import * as S from './style'
import { PlayIcon, StopIcon } from '../../Icons'

interface AvatarVoicePlayerProps {
  characterName: string
  hashtag1?: string
  hashtag2?: string
  hashtag3?: string
}
export const AvatarVoicePlayer = ({
  characterName,
  hashtag1,
  hashtag2,
  hashtag3
}: AvatarVoicePlayerProps) => {
  const audio = new Audio(
    '../../../../public/tuesday-glitch-soft-hip-hop-118327.mp3'
  )

  const playAudio = () => {
    audio.play()
  }
  const stopAudio = () => {
    audio.pause()
  }
  return (
    <S.Container>
      <S.TextContainer>
        <S.AvatarName>{characterName}</S.AvatarName>
        {hashtag1 && <S.Language>#{hashtag1}</S.Language>}
        {hashtag2 && <S.Language>#{hashtag2}</S.Language>}
        {hashtag3 && <S.Language>#{hashtag3}</S.Language>}
      </S.TextContainer>
      <S.BtnContainer>
        <S.PlayBtn onClick={playAudio}>
          <PlayIcon width='51.25' height='51.25' />
        </S.PlayBtn>
        <S.StopBtn onClick={stopAudio}>
          <StopIcon width='51.25' height='51.25' />
        </S.StopBtn>
      </S.BtnContainer>
    </S.Container>
  )
}
