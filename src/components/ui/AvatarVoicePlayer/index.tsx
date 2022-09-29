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
          <S.Hashtag isSelected={isSelected}>
            {hashtag1 && <div>#{hashtag1}</div>}
            {hashtag2 && <div>#{hashtag2}</div>}
            {hashtag3 && <div>#{hashtag3}</div>}
          </S.Hashtag>
        </S.TextContainer>
        <S.BtnContainer>
          <div>
            {!isPlaying && (
              <S.PlayBtn onClick={onPlayHandler}>
                <PlayIcon
                  width='4.8rem'
                  height='4.8rem'
                  isSelected={isSelected}
                />
              </S.PlayBtn>
            )}
            {isPlaying && (
              <S.PauseBtn onClick={onPauseHandler}>
                <PauseIcon
                  width='4.8rem'
                  height='4.8rem'
                  isSelected={isSelected}
                />
              </S.PauseBtn>
            )}
          </div>

          <S.StopBtn onClick={onStopHandler}>
            <StopIcon width='4.8rem' height='4.8rem' isSelected={isSelected} />
          </S.StopBtn>
        </S.BtnContainer>
      </S.VoicePlayer>
    </S.Container>
  )
}
