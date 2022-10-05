import React from 'react'
import {
  TheHeader,
  AvatarSelector,
  AvatarSort,
  ProjectRightNav,
  AvatarBg,
  ProjectNav,
  ProjectAvatarModal,
  ProjectAvatarData
} from 'components'
import * as S from './style'

export const ProjectAvatar = () => {
  return (
    <>
      <ProjectAvatarData />
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
