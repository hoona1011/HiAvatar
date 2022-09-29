import React from 'react'
import {
  TheHeader,
  AvatarSelector,
  AvatarSort,
  ProjectRightNav,
  AvatarBg,
  ProjectNav,
  ProjectAvatarModal
} from 'components'
import * as S from './style'

export const ProjectAvatar = () => {
  return (
    <>
      <TheHeader />
      <S.Container>
        <S.LeftContainer>
          <ProjectNav renderType='ProjectAvatar' />
          <AvatarSelector />
          <AvatarSort />
          <AvatarBg />
        </S.LeftContainer>
        <ProjectRightNav renderType='ProjectAvatar' />
      </S.Container>
      <ProjectAvatarModal />
    </>
  )
}
