import React from 'react'
import {
  TheHeader,
  AvatarSelector,
  AvatarSort,
  ProjectRightNav,
  AvatarBg,
  ProjectNav
} from 'components'
import * as S from './style'

export const ProjectAvatar = () => {
  return (
    <>
      <TheHeader />
      <S.Container>
        <S.LeftContainer>
          <ProjectNav />
          <AvatarSelector />
          <AvatarSort />
          <AvatarBg />
        </S.LeftContainer>
        <ProjectRightNav renderType='ProjectAvatar' />
      </S.Container>
    </>
  )
}
