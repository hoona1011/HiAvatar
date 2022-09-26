import React, { useEffect } from 'react'
import * as S from './style'
import { useAvatar } from 'store/slices/avatarSlice'
import { TooltipIcon } from 'components/Icons'

export const SelectedVoiceOptions = () => {
  const { totalAvatarData } = useAvatar()

  return (
    <S.Container>
      <S.Top>
        <TooltipIcon width='1.6rem' height='1.6rem' />
        <S.Title>내가 선택한 음성 옵션이에요</S.Title>
      </S.Top>
      <S.Options>
        <S.Inner>
          <S.Option>
            <S.OptionKey>음성 모델</S.OptionKey>
            <S.OptionValue>{totalAvatarData?.characterName}</S.OptionValue>
          </S.Option>
          <S.Option>
            <S.OptionKey>성별</S.OptionKey>
            <S.OptionValue>{totalAvatarData?.sex}</S.OptionValue>
          </S.Option>
          <S.Option>
            <S.OptionKey>사용 언어</S.OptionKey>
            <S.OptionValue>{totalAvatarData?.language}</S.OptionValue>
          </S.Option>
          <S.Option>
            <S.OptionKey>속도</S.OptionKey>
            <S.OptionValue>{totalAvatarData?.speed}배속</S.OptionValue>
          </S.Option>
          <S.Option>
            <S.OptionKey>톤</S.OptionKey>
            <S.OptionValue>{totalAvatarData?.pitch}</S.OptionValue>
          </S.Option>
          <S.Option>
            <S.OptionKey>호흡</S.OptionKey>
            <S.OptionValue>{totalAvatarData?.sentenceSpacing}s</S.OptionValue>
          </S.Option>
        </S.Inner>
      </S.Options>
    </S.Container>
  )
}
