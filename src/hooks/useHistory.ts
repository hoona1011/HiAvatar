import { useAppDispatch, useAppSelector } from 'store'

export const useHistory = () => {
  const projects = useAppSelector((state) => state.history.projects)
  const videos = useAppSelector((state) => state.history.videos)
  const isCreateing = useAppSelector((state) => state.history.isCreateing)
  const isShowHistoryModal = useAppSelector(
    (state) => state.history.isShowHistoryModal
  )
  const dispatch = useAppDispatch()

  return {
    projects,
    videos,
    isCreateing,
    isShowHistoryModal,
    dispatch
  }
}
