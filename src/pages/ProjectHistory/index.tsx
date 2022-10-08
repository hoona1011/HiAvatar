import React, { useEffect } from 'react'
import * as S from './style'
import {
  ProjectList,
  ProjectVideoList,
  CreateProjectButton,
  Loading
} from 'components'
import { useGetHistoryQuery } from 'api/historyApi'
import { changeHistory, useHistory } from 'store/slices/historySlice'

export const ProjectHistory = () => {
  const { data, isLoading, isError } = useGetHistoryQuery()
  const { dispatch } = useHistory()

  const changeHistoryHandler = () => {
    data && dispatch(changeHistory(data))
  }

  useEffect(() => {
    data && changeHistoryHandler()
  }, [data])

  if (isLoading || !data) {
    return <Loading />
  }

  if (isError) {
    return <></>
  }
  return (
    <>
      <S.Container>
        <CreateProjectButton />
        <ProjectList />
        <ProjectVideoList />
      </S.Container>
    </>
  )
}
