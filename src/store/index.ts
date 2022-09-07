import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

const store = configureStore({
  reducer: {
    // searchProducts: searchProducts.reducer,
    // [customApi.reducerPath]: customApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      // productsApi.middleware,
    ]),
})

setupListeners(store.dispatch)
export default store
