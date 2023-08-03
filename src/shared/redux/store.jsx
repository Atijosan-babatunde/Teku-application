import { configureStore } from '@reduxjs/toolkit'
import landingReducer from './slices/landing.slices'

export const store = configureStore({
  reducer: {
    landing:landingReducer
  },
})