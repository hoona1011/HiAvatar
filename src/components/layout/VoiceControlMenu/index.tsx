import { TooltipIcon } from 'components/Icons'
import { useAppSelector } from 'store'
import { VoiceController } from '../../index'

import * as S from './style'

export const VoiceControlMenu = () => {
  const { speed, pitch, sentenceSpacing } = useAppSelector(
    (state) => state.option
  )

  return (
    <S.Container>
      <S.Title>
        <div>
          <TooltipIcon width='1.6rem' height='1.6rem' />
        </div>
        <span>음성 옵션을 선택해 주세요</span>
      </S.Title>

      <S.VoiceControllerContainer>
        <div>
          <VoiceController
            label={'속도 조절'}
            min={-5}
            max={5}
            step={1}
            controlType={'speed'}
            optionValue={speed}
          />
        </div>
        <div>
          <VoiceController
            label={'톤 조절'}
            min={-5}
            max={5}
            step={1}
            controlType={'pitch'}
            optionValue={pitch}
          />
        </div>
        <div>
          <VoiceController
            label={'간격 조절'}
            min={0.0}
            max={5.0}
            step={0.1}
            controlType={'sentenceSpacing'}
            optionValue={sentenceSpacing}
          />
        </div>
      </S.VoiceControllerContainer>
    </S.Container>
  )
}
