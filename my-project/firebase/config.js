import firebase from "firebase";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCF5zYQn9jgy-4-sUxTqCeREMn05h6QAKc",
  authDomain: "my-project-4803f.firebaseapp.com",
  projectId: "my-project-4803f",
  storageBucket: "my-project-4803f.appspot.com",
  messagingSenderId: "107088165776",
  appId: "1:107088165776:web:c07c5d76248e5e66f31115",
};

export default firebase.initializeApp(firebaseConfig);