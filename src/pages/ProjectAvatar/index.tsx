import React, { useEffect } from 'react'
import {
  AvatarSelector,
  AvatarSort,
  ProjectRightNav,
  AvatarBg,
  ProjectNav,
  ProjectAvatarModal,
  Loading,
  TheHeader
} from 'components'
import { useGetAvatarQuery } from 'api/avatarApi'
import { useParams } from 'react-router-dom'
import {
  changeAvatarDetailList,
  changeAvatarPreview,
  changeSelectedValue,
  changeTotalAvatarData
} from 'store/slices/avatarSlice'
import * as S from './style'
import { useAvatar } from 'hooks'

export const ProjectAvatar = () => {
  const { projectId } = useParams()
  const { data, isLoading, isError } = useGetAvatarQuery(projectId)
  const { totalAvatarData, dispatch } = useAvatar()
  const { avatarName, avatarType, bgName } = totalAvatarData

  const avatarListHandler = () => {
    console.log(data)
    data && dispatch(changeTotalAvatarData(data))
  }
  const selectedValueHandler = () => {
    dispatch(changeSelectedValue({ avatarName }))
    avatarDetailListHandler(avatarName)
    dispatch(changeAvatarPreview(''))
    if (avatarType === '미정') {
      dispatch(changeSelectedValue({ avatarType: '' }))
    } else {
      dispatch(changeSelectedValue({ avatarType }))
    }
    if (bgName === '미정') {
      dispatch(changeSelectedValue({ bgName: '' }))
    } else {
      dispatch(changeSelectedValue({ bgName }))
    }
  }
  const avatarDetailListHandler = (selectedAvatar: string) => {
    dispatch(changeAvatarDetailList(selectedAvatar))
  }

  useEffect(() => {
    data && avatarListHandler()
  }, [data])

  useEffect(() => {
    avatarName && selectedValueHandler()
  }, [totalAvatarData])

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
