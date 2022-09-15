import { useState } from 'react'
import {
  AvatarVoicePlayer,
  VoiceController,
  VoiceUploadButton
} from '../../components'
import * as S from './style'

export interface InitialOption {
  [key: string]: number
}

export const ProjectTextEnter = () => {
  const initialOption: InitialOption = {
    speed: 0.5,
    pitch: 0,
    sentenceSpacing: 0
  }
  const [optionValue, setOptionValue] = useState(initialOption)

  return (
    <div>
      <S.Container>
        <S.Label>음성 옵션을 선택해주세요</S.Label>
        <S.ControllerContainer>
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
        </S.ControllerContainer>
      </S.Container>

      <AvatarVoicePlayer
        avatarName='가영'
        hashtag1='활발한'
        hashtag2='명랑한'
        hashtag3='밝은'
      />
      <VoiceUploadButton />
    </div>
  )
}
