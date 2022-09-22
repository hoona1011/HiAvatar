import { useState } from 'react'
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
        buttonType='path'
        value={'ProjectText'}
        content={'전체 텍스트'}
        onChange={onChangeHandler}
        defaultChecked={true}
      />
      <RadioButton
        buttonType='path'
        value={'AvatarVoicePlayersMenu'}
        content={'음성 모델'}
        onChange={onChangeHandler}
      />
      <RadioButton
        buttonType='path'
        value={'VoiceControllerMenu'}
        content={'음성 옵션'}
        onChange={onChangeHandler}
      />
    </S.Container>
  )
}
