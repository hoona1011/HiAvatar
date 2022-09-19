import { useSelector } from 'react-redux'
import { VoiceController } from '../../ui/VoiceController'

import * as S from './style'

export const VoiceControlMenu = () => {
  const voiceOption = useSelector((state: any) => {
    const { speed, pitch, sentenceSpacing } = state.option
    return { speed, pitch, sentenceSpacing }
  })

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
          optionValue={voiceOption.speed}
        />
        <VoiceController
          label={'톤 조절'}
          min={-0.5}
          median={0}
          max={0.5}
          step={0.5}
          controlType={'pitch'}
          optionValue={voiceOption.pitch}
        />
        <VoiceController
          label={'호흡 조절'}
          min={0.0}
          max={5.0}
          step={0.1}
          controlType={'sentenceSpacing'}
          optionValue={voiceOption.sentenceSpacing}
        />
      </S.VoiceControllerContainer>
    </S.Container>
  )
}
