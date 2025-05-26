import { configureStore } from '@reduxjs/toolkit'
import testSlice from '@/features/slices/testSlice'

const store = configureStore({
  reducer: {
    testSlice
  }
})

export default store
