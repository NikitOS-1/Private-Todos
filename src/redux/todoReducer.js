import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.unshift(action.payload);
    },
  },
});

export const { addTask } = todos.actions;
export default todos;
