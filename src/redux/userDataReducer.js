import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
      state.id = action.payload.id;
      state.tokken = action.payload.tokken;
    },
  },
});

export const { addDataUser } = data.actions;
export default data;
