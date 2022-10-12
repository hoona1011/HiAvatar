import React, { useEffect } from 'react'
import * as S from './style'
import {
  ProjectList,
  ProjectVideoList,
  CreateProjectButton,
  Loading,
  ProjectHistoryModal,
  TheHeader
} from 'components'
import { useGetHistoryQuery } from 'api/historyApi'
import { changeHistory } from 'store/slices/historySlice'
import { Cookies } from 'react-cookie'
import { useHistory } from 'hooks'

export const ProjectHistory = () => {
  const { data, isLoading, isError } = useGetHistoryQuery()
  const { dispatch } = useHistory()

  useEffect(() => {
    const cookies = new Cookies()
    const token = cookies.get('accessToken')
    if (token) {
      data && changeHistoryHandler()
    }
  }, [data])

  const changeHistoryHandler = () => {
    data && dispatch(changeHistory(data))
  }

  if (isLoading || !data) {
    return <Loading />
  }

  if (isError) {
    return <></>
  }
  return (
    <>
      <TheHeader />
      <S.Container>
        <CreateProjectButton />
        <ProjectList />
        <ProjectVideoList />
      </S.Container>
      <ProjectHistoryModal />
    </>
  )
}
