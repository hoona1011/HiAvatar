import { TooltipIcon } from 'components/Icons'
import { useAppSelector } from 'store'
import { VoiceController } from '../../index'
import { TootipMessage } from 'components/ui/TootipMessage'
import * as S from './style'

export const VoiceControlMenu = () => {
  const { speed, pitch, sentenceSpacing } = useAppSelector(
    (state) => state.option
  )

  return (
    <S.Container>
      <S.Title>
        <S.Tooltip>
          <TooltipIcon width='1.6rem' height='1.6rem' />
          <div className='message'>
            <TootipMessage
              content='선택한 음성의 속도, 톤, 간격을 조절할 수 있어요.'
              width='25.1rem'
            />
          </div>
        </S.Tooltip>
        <span>음성 옵션을 선택해 주세요</span>
      </S.Title>

      <S.VoiceControllerContainer>
        <div className='voice-controller'>
          <VoiceController
            label={'속도 조절'}
            min={-5}
            max={5}
            step={1}
            controlType={'speed'}
            optionValue={speed}
          />
        </div>
        <div className='voice-controller'>
          <VoiceController
            label={'톤 조절'}
            min={-5}
            max={5}
            step={1}
            controlType={'pitch'}
            optionValue={pitch}
          />
        </div>
        <div className='voice-controller'>
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
