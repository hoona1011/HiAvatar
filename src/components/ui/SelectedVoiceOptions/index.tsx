import React from 'react'
import * as S from './style'

export const SelectedVoiceOptions = () => {
  return (
    <S.Container>
      <S.Title>내가 선택한 음성 옵션이에요</S.Title>
      <S.SelectedOptions>
        <S.OptionsInner>
          <S.Option>
            <S.OptionKey>음성 모델</S.OptionKey>
            <S.OptionValue>가영</S.OptionValue>
          </S.Option>
          <S.Option>
            <S.OptionKey>성별</S.OptionKey>
            <S.OptionValue>여성</S.OptionValue>
          </S.Option>
          <S.Option>
            <S.OptionKey>사용 언어</S.OptionKey>
            <S.OptionValue>한국어</S.OptionValue>
          </S.Option>
          <S.Option>
            <S.OptionKey>속도</S.OptionKey>
            <S.OptionValue>1배속</S.OptionValue>
          </S.Option>
          <S.Option>
            <S.OptionKey>톤</S.OptionKey>
            <S.OptionValue>0</S.OptionValue>
          </S.Option>
          <S.Option>
            <S.OptionKey>호흡</S.OptionKey>
            <S.OptionValue>1s</S.OptionValue>
          </S.Option>
        </S.OptionsInner>
      </S.SelectedOptions>
    </S.Container>
  )
}
