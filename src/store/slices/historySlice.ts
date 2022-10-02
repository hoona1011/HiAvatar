import { createSlice } from '@reduxjs/toolkit'
import { useAppSelector, useAppDispatch } from 'store'
import type { HistoryData } from 'index'

const initialState: HistoryData = {
  projects: [],
  videos: []
}

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    changeHistory(state, action) {
      state.projects = action.payload.diff.projects
      state.videos = action.payload.diff.videos
    }
  }
})

export const { changeHistory } = historySlice.actions

export const useHistory = () => {
  const projects = useAppSelector((state) => state.history.projects)
  const videos = useAppSelector((state) => state.history.videos)
  const dispatch = useAppDispatch()

  return {
    projects,
    videos,
    dispatch
  }
}

export default historySlice.reducer
