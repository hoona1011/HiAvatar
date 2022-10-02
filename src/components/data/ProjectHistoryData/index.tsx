import React, { useEffect } from 'react'
import { useGetHistoryQuery } from 'api/historyApi'
import { changeHistory, useHistory } from 'store/slices/historySlice'

export const ProjectHistoryData = () => {
  const { data, isLoading, isError } = useGetHistoryQuery()
  const { dispatch } = useHistory()

  const changeHistoryHandler = () => {
    data && dispatch(changeHistory({ diff: data }))
  }

  useEffect(() => {
    data && changeHistoryHandler()
  }, [data])

  if (isLoading || !data) {
    return <>{/* 로딩 관련 추가 예정 */}</>
  }

  if (isError) {
    return <></>
  }

  return <></>
}
