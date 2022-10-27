import * as S from './style'
import { ProjectRightMenuButton } from 'components'
import { ProjectRightMenuProps } from 'index'

export const ProjectRightMenu = ({
  renderType,
  setRenderType
}: ProjectRightMenuProps) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const renderType = e.target.value
    setRenderType(renderType)
  }
  return (
    <S.Container>
      <ProjectRightMenuButton
        name='path'
        value={'ProjectText'}
        content={'전체 텍스트'}
        onChange={onChangeHandler}
        defaultChecked={true}
        renderType={renderType}
        IconRenderType={'AllTexts'}
      />
      <ProjectRightMenuButton
        name='path'
        value={'AvatarVoicePlayersMenu'}
        content={'음성 모델'}
        onChange={onChangeHandler}
        renderType={renderType}
        IconRenderType={'VoiceModels'}
      />
      <ProjectRightMenuButton
        name='path'
        value={'VoiceControllerMenu'}
        content={'음성 옵션'}
        onChange={onChangeHandler}
        renderType={renderType}
        IconRenderType={'VoiceOptions'}
      />
    </S.Container>
  )
}
