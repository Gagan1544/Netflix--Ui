import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB00vfhrU6rC-wRna9YSod1HRLflntz0AM",
  authDomain: "react-netflix-clone-c45f3.firebaseapp.com",
  projectId: "react-netflix-clone-c45f3",
  storageBucket: "react-netflix-clone-c45f3.appspot.com",
  messagingSenderId: "564594750606",
  appId: "1:564594750606:web:b1a8cceef4218895a185df",
  measurementId: "G-7F7Z3ZQ97D",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
