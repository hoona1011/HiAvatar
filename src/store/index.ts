import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { optionApi } from '../api/optionApi'
import { optionSlice } from './slices/optionSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import avatarReducer from './slices/avatarSlice'
import { avatarApi } from 'api/avatarApi'

const store = configureStore({
  reducer: {
    option: optionSlice.reducer,
    [optionApi.reducerPath]: optionApi.reducer,

    // 희영
    avatar: avatarReducer,
    [avatarApi.reducerPath]: avatarApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([optionApi.middleware, avatarApi.middleware])
})

setupListeners(store.dispatch)

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
