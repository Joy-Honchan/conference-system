import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NoteType {
  [x: string]: string;
  // "20230830":"some note here"
}

const initialState: NoteType =
  JSON.parse(localStorage.getItem("notes") || "null") || {};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<{ time: string; note: string }>) => {
      const { time, note } = action.payload;
      state[time] = note;
      localStorage.setItem("notes", JSON.stringify(state));
    },
  },
});

export const { addNote } = noteSlice.actions;

export default noteSlice.reducer;
