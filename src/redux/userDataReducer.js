import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const initialState = {
  status: null,
  error: null,
  email: null,
  id: null,
  tokken: null,
};
export const onStatusChange = createAsyncThunk(
  "userData/onStatusChange",
  async () => {
    const fetch = new Promise((resolve, reject) => {
      const auth = getAuth();
      onAuthStateChanged(
        auth,
        (user) => {
          if (user) {
            resolve(user.email);
          } else {
            reject("No user found.");
          }
        },
        (error) => {
          reject(error.message);
        }
      );
    });
    return fetch;
  }
);

const currentUser = createSlice({
  name: "userData",
  initialState,
  reducers: {
    addDataUser: (state, action) => {
      state.email = action.payload.email;
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
        state.email = action.payload;
      })
      .addCase(onStatusChange.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "error";
      });
  },
});

export const { addDataUser } = currentUser.actions;
export default currentUser;
