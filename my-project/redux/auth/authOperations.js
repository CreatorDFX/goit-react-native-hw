import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase/config";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";


export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ name, email, password, image }) => {
    console.log("image", image);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName, photoURL });
      const { uid } = auth.currentUser;
      return { userId: uid, displayName: name, photoURL };
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log("user", user)
     
    } catch (error) {
      console.log("error", error);
    console.log("error.code", error.code);
    console.log("error.message", error.message);
    }
  }
);

export const logoutUser = createAsyncThunk("auth/logout", async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error.message);
  }
});

export const authStateChangeUser = createAsyncThunk(
  "auth/authStateChangeUser",
  async (_, { rejectWithValue }) => {
    try {
      return await new Promise((resolve, reject) =>
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const { uid, name, photoURL } = user;
            resolve({ userId: uid, displayName: name, photoURL });
          } else {
            return rejectWithValue("Unable to fetch user");
          }
        })
      );
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

