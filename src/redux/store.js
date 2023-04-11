import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeReducer";
import userDataReducer from "./userDataReducer";
import todoReducer from "./todoReducer";
import filterTodoReducer from "./filterTodoReducer";

export const store = configureStore({
  reducer: {
    theme: themeReducer.reducer,
    userData: userDataReducer.reducer,
    todo: todoReducer.reducer,
    filterTodo: filterTodoReducer.reducer,
  },
});
