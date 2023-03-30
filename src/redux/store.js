import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeReducer";
import userCredReducer from "./userCredReducer";
import userDataReducer from "./userDataReducer";

export const store = configureStore({
  reducer: {
    theme: themeReducer.reducer,
    auth: userCredReducer.reducer,
    userData: userDataReducer.reducer,
  },
});
