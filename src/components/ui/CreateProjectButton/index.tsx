import { useCreateProjectMutation } from 'api/historyApi'
import { CreateProjectButtonIcon } from 'components/Icons'
import React from 'react'
import * as S from './style'

export const CreateProjectButton = () => {
  const [createProject] = useCreateProjectMutation()

  const onClickHandler = () => {
    createProject()
      .unwrap()
      .then((payload) => {
        console.log(payload)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <S.Button
      onClick={() => {
        onClickHandler()
      }}
    >
      <S.Top>
        <CreateProjectButtonIcon width='1.8rem' height='1.8rem' />
        <S.Content>프로젝트 생성</S.Content>
      </S.Top>
    </S.Button>
  )
}
