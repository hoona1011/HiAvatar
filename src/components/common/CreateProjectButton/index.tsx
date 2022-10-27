import React from 'react'
import * as S from './style'
import { CreateProjectButtonIcon } from 'components/Icons'
import { useCreateProject } from 'hooks'

export const CreateProjectButton = () => {
  const { useFunction } = useCreateProject()

  return (
    <S.Button onClick={useFunction}>
      <S.Top>
        <CreateProjectButtonIcon width='1.8rem' height='1.8rem' />
        <S.Content>프로젝트 생성</S.Content>
      </S.Top>
    </S.Button>
  )
}
