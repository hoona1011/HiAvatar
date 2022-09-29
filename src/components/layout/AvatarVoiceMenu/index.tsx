import { TooltipIcon } from 'components/Icons'
import React from 'react'
import { useAppDispatch } from 'store'
import { changeOption } from 'store/slices/optionSlice'
import { AvatarVoicePlayer } from '../../ui/AvatarVoicePlayer'
import { RadioButton } from '../../ui/RadioButton'
import * as S from './style'
export const AvatarVoiceMenu = () => {
  const dispatch = useAppDispatch()
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    dispatch(changeOption({ name, value }))
  }
  return (
    <S.Container>
      <S.Title>
        <div>
          <TooltipIcon width='1.6rem' height='1.6rem' />
        </div>
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
            value={'일본어'}
            content={'일본어'}
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
        <AvatarVoicePlayer
          characterName={'김차분'}
          hashtag1={'차분한'}
          hashtag2={'중저음'}
          hashtag3={'30대'}
          buttonType={'characterName'}
        />
        <AvatarVoicePlayer
          characterName={'나성우'}
          hashtag1={'나긋한'}
          hashtag2={'중저음'}
          hashtag3={'20대'}
          buttonType={'characterName'}
        />
        <AvatarVoicePlayer
          characterName={'나성은'}
          hashtag1={'명랑한'}
          hashtag2={'대학생'}
          hashtag3={'20대'}
          buttonType={'characterName'}
        />
        <AvatarVoicePlayer
          characterName={'다성은'}
          hashtag1={'명랑한'}
          hashtag2={'대학생'}
          hashtag3={'20대'}
          buttonType={'characterName'}
        />
        <AvatarVoicePlayer
          characterName={'라성은'}
          hashtag1={'명랑한'}
          hashtag2={'대학생'}
          hashtag3={'20대'}
          buttonType={'characterName'}
        />
        <AvatarVoicePlayer
          characterName={'마성은'}
          hashtag1={'명랑한'}
          hashtag2={'대학생'}
          hashtag3={'20대'}
          buttonType={'characterName'}
        />
        <AvatarVoicePlayer
          characterName={'바성은'}
          hashtag1={'명랑한'}
          hashtag2={'대학생'}
          hashtag3={'20대'}
          buttonType={'characterName'}
        />
        <AvatarVoicePlayer
          characterName={'사성은'}
          hashtag1={'명랑한'}
          hashtag2={'대학생'}
          hashtag3={'20대'}
          buttonType={'characterName'}
        />
      </S.VoicePlayerContainer>
    </S.Container>
  )
}
