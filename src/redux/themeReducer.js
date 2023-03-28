import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: true,
};

const changeThemes = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = changeThemes.actions;
export default changeThemes;
