import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentFilter: false };

const filterTodo = createSlice({
  name: "filterTodo",
  initialState,
  reducers: {
    filter: (state, action) => {
      state.currentFilter = action.payload;
    },
  },
});

export const { filter } = filterTodo.actions;
export default filterTodo;
