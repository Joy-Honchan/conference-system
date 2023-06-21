import { configureStore } from '@reduxjs/toolkit'
import todoSliceReducer from 'store/slices/todoSlice'

const store = configureStore({
  reducer: {
    todo: todoSliceReducer
  },
  middleware: [],
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
