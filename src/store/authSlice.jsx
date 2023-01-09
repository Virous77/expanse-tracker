import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser(state, action) {
      console.log(action);
    },
  },
});

export const { registerUser } = authSlice.actions;

export const useSelectAuth = (state) => state.auth.auth;
export default authSlice.reducer;
