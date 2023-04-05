import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  theme: false,
};

const changeTheme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    isDay: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { isDay } = changeTheme.actions;
export default changeTheme;
