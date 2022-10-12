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
              content='영상 제작에 필요한 스크립트를 입력 후
              확인 버튼을 눌러주세요.'
              width='20.5rem'
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
