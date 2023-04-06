import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCF5zYQn9jgy-4-sUxTqCeREMn05h6QAKc",
  authDomain: "my-project-4803f.firebaseapp.com",
  projectId: "my-project-4803f",
  storageBucket: "my-project-4803f.appspot.com",
  messagingSenderId: "107088165776",
  appId: "1:107088165776:web:33f9c474884540baf31115",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
