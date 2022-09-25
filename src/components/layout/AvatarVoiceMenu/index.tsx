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
      <S.Title>음성 모델을 선택해 주세요</S.Title>
      <S.OptionContainer>
        <S.Sex>
          {/* 백엔드 분들께 request,response 남,여로 통일 요청..? */}
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
        <AvatarVoicePlayer
          characterName={'철수'}
          hashtag1={'밝은'}
          hashtag2={'높은'}
          hashtag3={'명랑한'}
          buttonType={'characterName'}
        />
        <AvatarVoicePlayer
          characterName={'영희'}
          hashtag1={'밝은'}
          hashtag2={'높은'}
          hashtag3={'명랑한'}
          buttonType={'characterName'}
        />
        <AvatarVoicePlayer
          characterName={'민수'}
          hashtag1={'밝은'}
          hashtag2={'높은'}
          hashtag3={'명랑한'}
          buttonType={'characterName'}
        />
      </S.VoicePlayerContainer>
    </S.Container>
  )
}
