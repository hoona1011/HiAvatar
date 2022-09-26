import React from 'react'
import * as S from './style'
import { ProjectTextEditNavIcon, ProjectAvatarNavIcon } from 'components/Icons'
import type { ProjectNavProps } from 'index'

export const ProjectNav = ({ renderType }: ProjectNavProps) => {
  return (
    <S.Container>
      {renderType === 'ProjectTextEdit' ? (
        <ProjectTextEditNavIcon />
      ) : (
        <ProjectAvatarNavIcon />
      )}
    </S.Container>
  )
}
