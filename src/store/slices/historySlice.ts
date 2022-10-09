import { createSlice } from '@reduxjs/toolkit'
import { useAppSelector, useAppDispatch } from 'store'
import type { HistoryData } from 'history'

const initialState: HistoryData = {
  projects: [],
  videos: [],
  isCreateing: false
}

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    changeHistory(state, action) {
      state.projects = action.payload.projects
      state.videos = action.payload.videos
    },
    changeIsCreating(state, action) {
      state.isCreateing = action.payload
    }
  }
})

export const { changeHistory, changeIsCreating } = historySlice.actions

export const useHistory = () => {
  const projects = useAppSelector((state) => state.history.projects)
  const videos = useAppSelector((state) => state.history.videos)
  const isCreateing = useAppSelector((state) => state.history.isCreateing)
  const dispatch = useAppDispatch()

  return {
    projects,
    videos,
    isCreateing,
    dispatch
  }
}

export default historySlice.reducer
