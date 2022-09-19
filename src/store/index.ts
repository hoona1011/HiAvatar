import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { optionApi } from '../api/optionApi'
import { optionSlice } from './slices/optionSlice'

const store = configureStore({
  reducer: {
    option: optionSlice.reducer,
    [optionApi.reducerPath]: optionApi.reducer
    // searchProducts: searchProducts.reducer,
    // [customApi.reducerPath]: customApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      optionApi.middleware
      // productsApi.middleware,
    ])
})

setupListeners(store.dispatch)
export default store
