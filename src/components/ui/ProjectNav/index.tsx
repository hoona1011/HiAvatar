import React from 'react'
import * as S from './style'
import { ProjectTextEditNavIcon, ProjectAvatarNavIcon } from 'components/Icons'
import type { ProjectNavProps } from 'index'

export const ProjectNav = ({ renderType }: ProjectNavProps) => {
  const renderValue = () => {
    switch (renderType) {
      case 'ProjectTextEdit':
        return <ProjectTextEditNavIcon />
      case 'ProjectAvatar':
        return <ProjectAvatarNavIcon />
      default:
        return <></>
    }
  }
  return <S.Container>{renderValue()}</S.Container>
}
