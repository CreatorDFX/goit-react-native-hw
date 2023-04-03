import db from "../../firebase/config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const register = ({ email, password, nickname }) => async (
  dispatch,
  getState
) => {
  console.log("email, password, nickname", email, password, nickname);
  try {
    const user = await db
      .auth()
      .createUserWithEmailAndPassword(email, password);
    console.log("user", user);
  } catch (error) {
    console.log("error", error);
    console.log("error.message", error.message);
  }
};
// export const login = ({ email, password }) => async (
//     dispatch,
//     getState
//   ) => {
//     try {
//       const user = await db.auth().signInWithEmailAndPassword(email, password);
//       console.log("user", user);
//     } catch (error) {
//       console.log("error", error);
//       console.log("error.code", error.code);
//       console.log("error.message", error.message);
//     }
//   };


