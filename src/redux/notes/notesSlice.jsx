import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [],
    filter: "",
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
    changeNote: (state, action) => {
      const changedNote = state.items.find(
        (note) => note.id === action.payload.id
      );
      changedNote.title = action.payload.title;
    },
    dropNote: (state, action) => {
      const newNotes = state.items.filter(
        (note) => note.id !== action.payload.id
      );
      state.items = newNotes;
    },

    filterNotes: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addNote, changeNote, dropNote, filterNotes } =
  notesSlice.actions;
export const selectNotes = (state) => state.notes.items;
export const selectFilteredNotes = (state) => state.notes.filter;
export default notesSlice.reducer;
