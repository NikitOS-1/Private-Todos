import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: action.payload.id,
        title: action.payload.title,
        completed: action.payload.completed,
      });
    },
    changeStatus: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) {
        task.completed = action.payload.completed;
      }
    },
    deleteTask: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      if (index !== -1) {
        state.tasks.splice(index, 1);
      }
    },
  },
});

export const { addTask, changeStatus, deleteTask } = todos.actions;
export default todos;
