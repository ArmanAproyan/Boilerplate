import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const { reducer: babkenChobanyanReducer, actions } = createSlice({
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
export const { test } = actions
