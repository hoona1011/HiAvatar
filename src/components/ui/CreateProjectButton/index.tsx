import { CreateProjectButtonIcon } from 'components/Icons'
import React from 'react'
import * as S from './style'

export const CreateProjectButton = () => {
  return (
    <S.Button>
      <S.Top>
        <CreateProjectButtonIcon width='1.8rem' height='1.8rem' />
        <S.Content>프로젝트 생성</S.Content>
      </S.Top>
    </S.Button>
  )
}
