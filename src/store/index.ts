import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { optionApi } from '../api/optionApi'
import { optionSlice } from './slices/optionSlice'

import avatarReducer from './slices/avatarSlice'

const store = configureStore({
  reducer: {
    option: optionSlice.reducer,
    [optionApi.reducerPath]: optionApi.reducer,
    // searchProducts: searchProducts.reducer,
    // [customApi.reducerPath]: customApi.reducer,

    // 희영
    avatar: avatarReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      optionApi.middleware
      // productsApi.middleware,
    ])
})

setupListeners(store.dispatch)
export default store
