import * as S from './style'
import { AllTexts, VoiceModels, VoiceOptions } from 'components/Icons'

interface ProjectRightMenuButtonProps {
  name: string
  value: string
  content: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  renderType: string
  IconRenderType: string
}

export const ProjectRightMenuButton = ({
  name,
  value,
  content,
  onChange,
  renderType,
  IconRenderType
}: ProjectRightMenuButtonProps) => {
  const isSelected = renderType === value
  const Icon = () => {
    switch (IconRenderType) {
      case 'AllTexts':
        return (
          <AllTexts width='1.8rem' height='1.8rem' isSelected={isSelected} />
        )
      case 'VoiceModels':
        return (
          <VoiceModels width='1.8rem' height='1.8rem' isSelected={isSelected} />
        )
      case 'VoiceOptions':
        return (
          <VoiceOptions
            width='1.8rem'
            height='1.8rem'
            isSelected={isSelected}
          />
        )
    }
  }

  return (
    <S.Container key={value}>
      <input
        type='radio'
        name={name}
        id={value}
        value={value}
        onChange={onChange}
        defaultChecked={value === 'ProjectText'}
      />
      <label htmlFor={value}>
        <div className='icon'>{Icon()}</div>
        <div>{content}</div>
      </label>
    </S.Container>
  )
}
