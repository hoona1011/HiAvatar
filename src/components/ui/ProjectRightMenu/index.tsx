import * as S from './style'
import { RadioButton } from '../RadioButton'
import { ProjectRightMenuProps } from 'index'
export const ProjectRightMenu = ({ setRenderType }: ProjectRightMenuProps) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const renderType = e.target.value
    setRenderType(renderType)
  }
  return (
    <S.Container>
      <RadioButton
        name='path'
        value={'ProjectText'}
        content={'전체 텍스트'}
        onChange={onChangeHandler}
        defaultChecked={true}
      />
      <RadioButton
        name='path'
        value={'AvatarVoicePlayersMenu'}
        content={'음성 모델'}
        onChange={onChangeHandler}
      />
      <RadioButton
        name='path'
        value={'VoiceControllerMenu'}
        content={'음성 옵션'}
        onChange={onChangeHandler}
      />
    </S.Container>
  )
}
