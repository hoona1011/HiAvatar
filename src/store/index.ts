import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { optionApi } from '../api/optionApi'
import { optionSlice } from './slices/optionSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

// avatar
import avatarReducer from './slices/avatarSlice'
import { avatarApi } from 'api/avatarApi'

// history
import historyReducer from './slices/historySlice'
import { historyApi } from 'api/historyApi'

const store = configureStore({
  reducer: {
    option: optionSlice.reducer,
    [optionApi.reducerPath]: optionApi.reducer,

    // 희영
    avatar: avatarReducer,
    history: historyReducer,
    [avatarApi.reducerPath]: avatarApi.reducer,
    [historyApi.reducerPath]: historyApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      optionApi.middleware,
      avatarApi.middleware,
      historyApi.middleware
    ])
})

setupListeners(store.dispatch)

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
