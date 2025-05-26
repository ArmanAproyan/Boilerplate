import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const testSlice = createSlice({
  initialState,
  name: 'test',
  reducers: {
    test: (state, { payload }) => {
      if (state && payload) {
        console.log('test')
      }
    }
  }
})
export const { test } = testSlice.actions
export default testSlice.reducer
