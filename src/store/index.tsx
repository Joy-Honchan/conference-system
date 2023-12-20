import { configureStore } from "@reduxjs/toolkit";
import noteSliceReducer from "store/slices/noteSlice";

const store = configureStore({
  reducer: {
    note: noteSliceReducer,
  },
  middleware: [],
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
