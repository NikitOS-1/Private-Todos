import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeReducer";

export const store = configureStore({
  reducer: {
    theme: themeReducer.reducer,
  },
});
