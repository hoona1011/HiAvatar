import { useAppSelector, useAppDispatch } from 'store'

export const useAvatar = () => {
  const totalAvatarData = useAppSelector(
    (state) => state.avatar.totalAvatarData
  )
  const avatarList = useAppSelector((state) => state.avatar.avatarList)
  const avatarDetailList = useAppSelector(
    (state) => state.avatar.avatarDetailList
  )
  const backgroundList = useAppSelector((state) => state.avatar.backgroundList)
  const selectedValue = useAppSelector((state) => state.avatar.selectedValue)
  const isAllSelected = useAppSelector((state) => state.avatar.isAllSelected)
  const isShowModal = useAppSelector((state) => state.avatar.isShowModal)
  const avatarPreview = useAppSelector((state) => state.avatar.avatarPreview)
  const isAvatarPreviewLoading = useAppSelector(
    (state) => state.avatar.isAvatarPreviewLoading
  )
  const dispatch = useAppDispatch()

  return {
    totalAvatarData,
    avatarList,
    avatarDetailList,
    backgroundList,
    selectedValue,
    isAllSelected,
    isShowModal,
    avatarPreview,
    isAvatarPreviewLoading,
    dispatch
  }
}
