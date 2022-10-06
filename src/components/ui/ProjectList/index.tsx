import React from 'react'
import * as S from './style'
import { TooltipIcon } from 'components/Icons'
import { useHistory } from 'store/slices/historySlice'
import { useNavigate } from 'react-router-dom'

export const ProjectList = () => {
  const { projects } = useHistory()
  const navigate = useNavigate()

  const onClickHandler = (projectId: number) => {
    navigate(`/project-text-edit/${projectId}`)
  }

  const renderValue = () => {
    if (projects.length) {
      return projects.map((project) => {
        const { projectId, projectName, lastModifiedAt } = project

        return (
          <S.Inner key={projectId}>
            <S.Project
              onClick={() => {
                onClickHandler(projectId)
              }}
            />
            <S.Name>{projectName}</S.Name>
            <S.Date>{lastModifiedAt}</S.Date>
          </S.Inner>
        )
      })
    } else {
      return (
        <S.NoProject>
          프로젝트가 없습니다. 새 프로젝트를 생성하세요.
        </S.NoProject>
      )
    }
  }

  return (
    <S.Container>
      <S.Top>
        <TooltipIcon width='1.6rem' height='1.6rem' />
        <S.Title>프로젝트 히스토리를 확인하세요.</S.Title>
      </S.Top>
      <S.ProjectContainer>{renderValue()}</S.ProjectContainer>
    </S.Container>
  )
}
