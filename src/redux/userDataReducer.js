import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: null,
  error: null,
  email: null,
  id: null,
  tokken: null,
};

const data = createSlice({
  name: "userData",
  initialState,
  reducers: {
    addDataUser: (state, action) => {
      state.email = action.payload.email;
    },
  },
});

export const { addDataUser } = data.actions;
export default data;
