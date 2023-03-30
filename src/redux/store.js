import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeReducer";
import authReducer from "./authReducer";

export const store = configureStore({
  reducer: {
    theme: themeReducer.reducer,
    auth: authReducer.reducer,
  },
});
