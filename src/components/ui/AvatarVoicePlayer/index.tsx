import * as S from './style'
import { useState, useRef } from 'react'
import { PlayIcon, PauseIcon, StopIcon } from '../../Icons'
import { AvatarVoicePlayerProps } from 'index'

export const AvatarVoicePlayer = ({
  characterName,
  hashtag1,
  hashtag2,
  hashtag3
}: AvatarVoicePlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(new Audio('/src/assets/test.mp3'))
  const audio = audioRef.current
  const onPlayHandler = () => {
    setIsPlaying(true)
    audio.play()
  }
  const onStopHandler = () => {
    setIsPlaying(false)
    audio.pause()
    audio.currentTime = 0
  }
  const onPauseHandler = () => {
    setIsPlaying(false)
    audio.pause()
  }
  return (
    <S.Container>
      <S.TextContainer>
        <S.AvatarName>{characterName}</S.AvatarName>
        {hashtag1 && <S.Hashtag>#{hashtag1}</S.Hashtag>}
        {hashtag2 && <S.Hashtag>#{hashtag2}</S.Hashtag>}
        {hashtag3 && <S.Hashtag>#{hashtag3}</S.Hashtag>}
      </S.TextContainer>
      <S.BtnContainer>
        <div>
          {!isPlaying && (
            <S.PlayPauseBtn onClick={onPlayHandler}>
              <PlayIcon width='51.25' height='51.25' />
            </S.PlayPauseBtn>
          )}
          {isPlaying && (
            <S.PlayPauseBtn onClick={onPauseHandler}>
              <PauseIcon width='51.25' height='51.25' />
            </S.PlayPauseBtn>
          )}
        </div>

        <S.StopBtn onClick={onStopHandler}>
          <StopIcon width='51.25' height='51.25' />
        </S.StopBtn>
      </S.BtnContainer>
    </S.Container>
  )
}
