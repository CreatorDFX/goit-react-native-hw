import { createAsyncThunk } from "@reduxjs/toolkit";
import firebase from '../../firebase/config';
import { setIsRefreshing, updateUserProfile } from "./authSlice";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ name, email, password, image }) => {
    console.log("image", image);
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);

      const user = await firebase.auth().currentUser;
      await user.updateProfile({
        displayName: name,
        photoURL: image,    
      });

      const { displayName, uid } = await firebase.auth().currentUser;

      return { displayName, uid };
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }) => {
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk('auth/logout', async () => {
  try {
    await firebase.auth().signOut();
  } catch (error) {
    console.log(error.message);
  }
});


export const authStateChangeUser = () => async (dispatch, getState) => {
  await dispatch(setIsRefreshing(true));
  await firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const userUpdateProfile = {
        name: user.displayName,
        userId: user.uid,
        profileImg: user.photoURL,
      };
      dispatch(updateUserProfile(userUpdateProfile));
    }
    dispatch(setIsRefreshing(false));
  });
};