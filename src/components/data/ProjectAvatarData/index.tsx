import React, { useEffect } from 'react'
import { useGetAvatarQuery } from 'api/avatarApi'
import { useLocation } from 'react-router-dom'
import {
  changeAvatarDetailList,
  changeTotalAvatarData,
  useAvatar
} from 'store/slices/avatarSlice'

export const ProjectAvatarData = () => {
  const location = useLocation()
  const projectId = location.pathname.replace(/[^0-9]/g, '')
  const { data, isLoading, isError } = useGetAvatarQuery(projectId)
  const { selectedValue, dispatch } = useAvatar()

  const avatarListHandler = () => {
    data && dispatch(changeTotalAvatarData(data))
    if (!selectedValue.avatarType) {
      // 사용자가 지정한 아바타 타입이 없을 경우
      avatarDetailListHandler('avatar1') // 기본값 지정
    }
  }
  const avatarDetailListHandler = (selectedAvatar: string) => {
    dispatch(changeAvatarDetailList(selectedAvatar))
  }

  useEffect(() => {
    data && avatarListHandler()
  }, [data])

  if (isLoading || !data) {
    return <>{/* 로딩 관련 추가 예정 */}</>
  }

  if (isError) {
    return <></>
  }

  return <></>
}
