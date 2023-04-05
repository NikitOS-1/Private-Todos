import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      title: "Start project",
      completed: false,
    },
    {
      id: 2,
      title:
        "Start project 2-0 skdsjjdjskjdjks djjskdjjskjdskjs djkdjkskdskjsdjkdsjksdj kjsdkjksdjksjkdsjks jkdsjks djksdjksdjksdkjdjksjdjskjd kjsjksjkd",
      completed: false,
    },
  ],
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
      state.tasks.find((task) => {
        if (task.id === action.payload.id) {
          task.completed = action.payload.completed;
        }
      });
    },
  },
});

export const { addTask, changeStatus } = todos.actions;
export default todos;
