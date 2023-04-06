import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser, logoutUser, authStateChangeUser } from "./authOperations";

const initialState = {
  userId: null,
  name: "",
  isRefreshing: false,
  profileImg: "",
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
    .addCase(registerUser.fulfilled, (state, { payload }) => (state = payload))
    .addCase(loginUser.fulfilled, (state, { payload }) => (state = payload))
    .addCase(logoutUser.fulfilled, (state) => (state = initialState))
    .addCase(authStateChangeUser.fulfilled, (state, { payload }) => (state = payload))
    .addCase(authStateChangeUser.rejected, (state) => (state = initialState))
});
