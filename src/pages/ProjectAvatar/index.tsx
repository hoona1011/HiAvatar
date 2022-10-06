import React, { useEffect } from 'react'
import {
  TheHeader,
  AvatarSelector,
  AvatarSort,
  ProjectRightNav,
  AvatarBg,
  ProjectNav,
  ProjectAvatarModal,
  Loading
} from 'components'
import { useGetAvatarQuery } from 'api/avatarApi'
import { useParams } from 'react-router-dom'
import {
  changeAvatarDetailList,
  changeTotalAvatarData,
  useAvatar
} from 'store/slices/avatarSlice'
import * as S from './style'

export const ProjectAvatar = () => {
  const { projectId } = useParams()
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
    return <Loading />
  }

  if (isError) {
    return <></>
  }

  return (
    <>
      <TheHeader />
      <S.Container>
        <S.LeftContainer>
          <ProjectNav renderType='ProjectAvatar' />
          <AvatarSelector />
          <AvatarSort />
          <AvatarBg />
        </S.LeftContainer>
        <ProjectRightNav renderType='ProjectAvatar' />
      </S.Container>
      <ProjectAvatarModal />
    </>
  )
}
