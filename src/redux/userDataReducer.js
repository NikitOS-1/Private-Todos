import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const initialState = {
  status: null,
  error: null,
  email: null,
  id: null,
  tokken: null,
  data: null,
};
export const onStatusChange = createAsyncThunk(
  "userData/onStatusChange",
  async () => {
    return new Promise((resolve, reject) => {
      const auth = getAuth();
      onAuthStateChanged(
        auth,
        (user) => {
          if (user) {
            resolve(user);
          } else {
            reject("No user found.");
          }
        },
        (error) => {
          reject(error.message);
        }
      );
    });
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(onStatusChange.pending, (state) => {
        state.error = null;
        state.status = "loading";
      })
      .addCase(onStatusChange.fulfilled, (state, action) => {
        state.error = null;
        state.status = "resolved";
        state.data = action.payload.email;
      })
      .addCase(onStatusChange.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "error";
      });
  },
});

export const { addDataUser } = data.actions;
export default data;
