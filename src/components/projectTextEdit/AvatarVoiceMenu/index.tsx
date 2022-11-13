import React, { useCallback, useMemo } from 'react'
import { TooltipIcon } from 'components/Icons'
import { useAppDispatch } from 'store'
import { changeOption } from 'store/slices/optionSlice'
import { RadioButton, AvatarVoicePlayer } from 'components'
import { useAppSelector } from 'store'

import * as S from './style'
import { TootipMessage } from 'components/common/TootipMessage'
export const AvatarVoiceMenu = () => {
  const {
    dummyData,
    sex: selectedSex,
    language: selectedLanguage,
    characterName: selectedCharacter
  } = useAppSelector((state) => state.option)

  const dispatch = useAppDispatch()

  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      dispatch(changeOption({ name, value }))
    },
    []
  )
  const languageConverter = useCallback((language: string) => {
    switch (language) {
      case '한국어':
        return 'korean'
      case '영어':
        return 'english'
      case '중국어':
        return 'chinese'
    }
  }, [])

  const avatarVoices = Object.entries(dummyData)
  console.log('아바타보이스', avatarVoices)

  interface Voice {
    characterName: string
    audioUrl: string
    characterTags: string[]
  }
  interface VoicesBySex {
    femaleList: Voice[]
    maleList: Voice[]
  }
  type VoicesByLanguage = [string, any]

  const filteredVoices = useMemo(() => {
    return avatarVoices
      .map((voicesByLanguage: VoicesByLanguage) => {
        switch (selectedSex) {
          case '남자':
            return {
              language: voicesByLanguage[0],
              voices: voicesByLanguage[1].maleList
            }

          case '여자':
            return {
              language: voicesByLanguage[0],
              voices: voicesByLanguage[1].femaleList
            }
        }
      })
      .find((data) => {
        return data!.language === languageConverter(selectedLanguage)
      })?.voices
  }, [avatarVoices, selectedSex, selectedLanguage])
  return (
    <S.Container>
      <S.Title>
        <S.Tooltip>
          <TooltipIcon width='1.6rem' height='1.6rem' />
          <div className='message'>
            <TootipMessage
              content='모델의 성별, 언어, 음성 스타일을 미리 듣고 선택할 수 있어요.'
              width='28.5rem'
            />
          </div>
        </S.Tooltip>
        <span>음성 모델을 선택해 주세요</span>
      </S.Title>
      <S.OptionContainer>
        <S.Sex>
          <RadioButton
            name={'sex'}
            value={'남자'}
            content={'남'}
            onChange={onChangeHandler}
          />
          <RadioButton
            name={'sex'}
            value={'여자'}
            content={'여'}
            onChange={onChangeHandler}
          />
        </S.Sex>
        <S.Language>
          <RadioButton
            name={'language'}
            value={'한국어'}
            content={'한국어'}
            onChange={onChangeHandler}
          />
          <RadioButton
            name={'language'}
            value={'영어'}
            content={'영어'}
            onChange={onChangeHandler}
          />
          <RadioButton
            name={'language'}
            value={'중국어'}
            content={'중국어'}
            onChange={onChangeHandler}
          />
        </S.Language>
      </S.OptionContainer>
      <S.VoicePlayerContainer>
        {filteredVoices?.map((voice: Voice) => {
          const { characterName, audioUrl, characterTags } = voice
          return (
            <AvatarVoicePlayer
              key={characterName}
              characterName={characterName}
              hashtag1={characterTags[0]}
              hashtag2={characterTags[1]}
              hashtag3={characterTags[2]}
              buttonType={'characterName'}
              audioUrl={audioUrl}
              selectedCharacter={selectedCharacter}
            />
          )
        })}
      </S.VoicePlayerContainer>
    </S.Container>
  )
}
