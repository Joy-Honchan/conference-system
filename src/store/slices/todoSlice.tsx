import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = [
  {
    id: 1,
    title: 'Learn Redux',
    completed: true
  }
]

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<Pick<(typeof initialState)[0], 'title'>>
    ) => {
      const lastId = Math.max(...state.map((item) => item.id))
      state.push({
        id: lastId + 1,
        title: action.payload.title,
        completed: false
      })
    }
  }
})

export const { addTodo } = todoSlice.actions

export default todoSlice.reducer
