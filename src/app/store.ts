import { babkenChobanyanReducer } from '@/features/slices'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    babkenChobanyanReducer
  }
})

export default store
