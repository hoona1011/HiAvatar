import React from 'react'
import * as S from './style'
import {
  TheHeader,
  ProjectList,
  ProjectVideoList,
  ProjectHistoryData
} from 'components'
import { CreateProjectButton } from 'components/ui/CreateProjectButton'

export const ProjectHistory = () => {
  return (
    <>
      <ProjectHistoryData />
      <TheHeader />
      <S.Container>
        <CreateProjectButton />
        <ProjectList />
        <ProjectVideoList />
      </S.Container>
    </>
  )
}
