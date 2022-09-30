import React from 'react'
import * as S from './style'
import {
  TheHeader,
  ProjectList,
  ProjectHistoryPlayer,
  ProjectVideoList
} from 'components'
import { CreateProjectButton } from 'components/ui/CreateProjectButton'

export const ProjectHistory = () => {
  return (
    <div>
      <TheHeader />
      <S.Container>
        <CreateProjectButton />
        <ProjectList />
        <ProjectVideoList />
      </S.Container>
    </div>
  )
}
