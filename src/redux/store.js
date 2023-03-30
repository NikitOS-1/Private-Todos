import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeReducer";
import userCredReducer from "./userCredReducer";

export const store = configureStore({
  reducer: {
    theme: themeReducer.reducer,
    auth: userCredReducer.reducer,
  },
});
