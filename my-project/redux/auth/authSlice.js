import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser, logoutUser } from "./authOperations";

const initialState = {
  userId: null,
  name: "",
  isRefreshing: false,
  profileImg: "",
};

const authSuccessReducer = (state, action) => {
  state.userId = action.payload.uid;
  state.name = action.payload.displayName;
};

const logOutSuccessReducer = (state, action) => {
  state.userId = null;
  state.name = "";
  state.isRefreshing = false;
};


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      name: payload.name,
      profileImg: payload.profileImg,
      
    }),
    setIsRefreshing: (state, { payload }) => ({
      ...state,
      isRefreshing: payload,
    }),
  },
  extraReducers: builder =>
    builder
      .addCase(registerUser.fulfilled, authSuccessReducer)
      .addCase(loginUser.fulfilled, authSuccessReducer)
      .addCase(logoutUser.fulfilled, logOutSuccessReducer),
});

export const { updateUserProfile, setIsRefreshing } = authSlice.actions;