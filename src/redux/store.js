import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeReducer";
import userDataReducer from "./userDataReducer";

export const store = configureStore({
  reducer: {
    theme: themeReducer.reducer,
    userData: userDataReducer.reducer,
  },
});
