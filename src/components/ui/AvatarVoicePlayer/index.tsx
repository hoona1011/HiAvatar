import * as S from './style'
import { useState, useRef } from 'react'
import { PlayIcon, PauseIcon, StopIcon } from '../../Icons'
import { AvatarVoicePlayerProps } from 'index'
import { useAppDispatch, useAppSelector } from 'store'
import { changeOption } from 'store/slices/optionSlice'

export const AvatarVoicePlayer = ({
  characterName,
  hashtag1,
  hashtag2,
  hashtag3,
  buttonType
}: AvatarVoicePlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const dispatch = useAppDispatch()
  const selectedCharacter = useAppSelector(
    (state) => state.option.characterName
  )
  const audioRef = useRef(new Audio('/src/assets/test.mp3'))
  const audio = audioRef.current
  const isSelected = selectedCharacter === characterName
  // HANDLERS
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

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    dispatch(changeOption({ name, value }))
  }
  return (
    <S.Container>
      <input
        type='radio'
        name={buttonType}
        id={characterName}
        value={characterName}
        onChange={onChangeHandler}
      />
      <S.VoicePlayer isSelected={isSelected} htmlFor={characterName}>
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
                <PlayIcon
                  width='51.25'
                  height='51.25'
                  isSelected={isSelected}
                />
              </S.PlayPauseBtn>
            )}
            {isPlaying && (
              <S.PlayPauseBtn onClick={onPauseHandler}>
                <PauseIcon
                  width='51.25'
                  height='51.25'
                  isSelected={isSelected}
                />
              </S.PlayPauseBtn>
            )}
          </div>

          <S.StopBtn onClick={onStopHandler}>
            <StopIcon width='51.25' height='51.25' isSelected={isSelected} />
          </S.StopBtn>
        </S.BtnContainer>
      </S.VoicePlayer>
    </S.Container>
  )
}
