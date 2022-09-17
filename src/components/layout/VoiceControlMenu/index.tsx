import React, { useState } from 'react'
import { VoiceController } from '../../ui/VoiceController'
import * as S from './style'

export interface InitialOption {
  [key: string]: number | string
}
export const VoiceControlMenu = () => {
  const initialOption: InitialOption = {
    projectId: 1,
    projectName: '프로젝트',
    language: '한국어',
    sex: '남자',
    characterName: '가온',
    speed: 0.5,
    pitch: 0,
    sentenceSpacing: 0,
    texts: '안녕하세요?',
    audioFile: ''
  }
  const [optionValue, setOptionValue] = useState(initialOption)

  console.log(optionValue)

  return (
    <S.Container>
      <S.Title>음성 옵션을 선택해주세요</S.Title>

      <S.VoiceControllerContainer>
        <VoiceController
          label={'속도 조절'}
          min={-0.5}
          median={0}
          max={0.5}
          step={0.5}
          controlType={'speed'}
          optionValue={optionValue}
          setOptionValue={setOptionValue}
        />
        <VoiceController
          label={'톤 조절'}
          min={-0.5}
          median={0}
          max={0.5}
          step={0.5}
          controlType={'pitch'}
          optionValue={optionValue}
          setOptionValue={setOptionValue}
        />
        <VoiceController
          label={'호흡 조절'}
          min={0.0}
          max={5.0}
          step={0.1}
          controlType={'sentenceSpacing'}
          optionValue={optionValue}
          setOptionValue={setOptionValue}
        />
      </S.VoiceControllerContainer>
    </S.Container>
  )
}
