import React from 'react'
import * as S from './style'
import { useProjectAvatarSave } from 'hooks'
import { Spinner } from 'components'

export const ProjectAvatarSaveButton = () => {
  const { projectAvatarSave, isLoading } = useProjectAvatarSave()

  return (
    <S.Button onClick={() => projectAvatarSave('header')}>
      {!isLoading ? (
        <span>프로젝트 저장</span>
      ) : (
        <>
          <span>프로젝트 저장</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <Spinner width='0.2rem' />
        </>
      )}
    </S.Button>
  )
}
