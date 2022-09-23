import React from 'react'
import { AvatarVoicePlayer } from '../../ui/AvatarVoicePlayer'
import { RadioButton } from '../../ui/RadioButton'
import * as S from './style'
export const AvatarVoiceMenu = () => {
  return (
    <S.Container>
      <S.Title>음성 모델을 선택해 주세요</S.Title>
      <S.OptionContainer>
        <S.Sex>
          {/* 백엔드 분들께 request,response 남,여로 통일 요청..? */}
          <RadioButton buttonType={'sex'} value={'남자'} content={'남'} />
          <RadioButton buttonType={'sex'} value={'여자'} content={'여'} />
        </S.Sex>
        <S.Language>
          <RadioButton
            buttonType={'language'}
            value={'한국어'}
            content={'한국어'}
          />
          <RadioButton
            buttonType={'language'}
            value={'영어'}
            content={'영어'}
          />
          <RadioButton
            buttonType={'language'}
            value={'중국어'}
            content={'중국어'}
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
