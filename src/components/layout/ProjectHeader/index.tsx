import React from 'react'
import * as S from './style'
import { ProjectSaveButton } from '../../ui/ProjectSaveButton'
import { EditIcon } from '../../Icons'

export const ProjectHeader = () => {
  return (
    <S.Wrapper>
      <div>로고</div>
      <div>
        <span>프로젝트명</span>
        <S.EditBtn>
          <EditIcon width='20' height='19' />
        </S.EditBtn>
      </div>
      <div>
        <ProjectSaveButton />
      </div>
    </S.Wrapper>
  )
}
