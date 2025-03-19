import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './reducers/cart'

export const store = configureStore({
  reducer: {
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type RootReducer = ReturnType<typeof store.getState>
