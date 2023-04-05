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
      if (moment().format("a") === "pm") {
        state.theme = false;
      } else {
        state.theme = true;
      }
    },
  },
});

export const { isDay } = changeTheme.actions;
export default changeTheme;
