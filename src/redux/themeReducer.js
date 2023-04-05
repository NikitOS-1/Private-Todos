import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: true,
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
