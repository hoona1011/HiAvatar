import * as S from './style'
import React, { useState, useRef, useCallback } from 'react'
import { PlayIcon, PauseIcon, StopIcon } from '../../Icons'
import { AvatarVoicePlayerProps } from 'index'
import { useAppDispatch } from 'store'
import { changeOption } from 'store/slices/optionSlice'

export const AvatarVoicePlayer = ({
  characterName,
  hashtag1,
  hashtag2,
  hashtag3,
  buttonType,
  audioUrl,
  selectedCharacter
}: AvatarVoicePlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const dispatch = useAppDispatch()

  const audioRef = useRef(new Audio(audioUrl))
  const audio = audioRef.current

  const isSelected = selectedCharacter === characterName

  const playerHandler = useCallback(
    (action: string) => {
      switch (action) {
        case 'play':
          setIsPlaying(true)
          audio.play()
          break
        case 'stop':
          setIsPlaying(false)
          audio.pause()
          audio.currentTime = 0
          break

        case 'pause':
          setIsPlaying(false)
          audio.pause()
      }
    },
    [audio]
  )

  audio.addEventListener('ended', () => {
    playerHandler('stop')
  })

  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      dispatch(changeOption({ name, value }))
    },
    []
  )
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
            {hashtag1 && <div className='hashtag'>#{hashtag1}</div>}
            {hashtag2 && <div className='hashtag'>#{hashtag2}</div>}
            {hashtag3 && <div className='hashtag'>#{hashtag3}</div>}
          </S.Hashtag>
        </S.TextContainer>
        <S.BtnContainer>
          <div>
            {!isPlaying && (
              <S.PlayBtn onClick={() => playerHandler('play')}>
                <PlayIcon
                  width='4.8rem'
                  height='4.8rem'
                  isSelected={isSelected}
                />
              </S.PlayBtn>
            )}
            {isPlaying && (
              <S.PauseBtn onClick={() => playerHandler('pause')}>
                <PauseIcon
                  width='4.8rem'
                  height='4.8rem'
                  isSelected={isSelected}
                />
              </S.PauseBtn>
            )}
          </div>

          <S.StopBtn onClick={() => playerHandler('stop')}>
            <StopIcon width='4.8rem' height='4.8rem' isSelected={isSelected} />
          </S.StopBtn>
        </S.BtnContainer>
      </S.VoicePlayer>
    </S.Container>
  )
}
