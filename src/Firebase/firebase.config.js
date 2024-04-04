// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy7uypaebmDCvpL4yn9QHJ4atAxku_D1Q",
  authDomain: "react-dragon-news-ba253.firebaseapp.com",
  projectId: "react-dragon-news-ba253",
  storageBucket: "react-dragon-news-ba253.appspot.com",
  messagingSenderId: "610579439072",
  appId: "1:610579439072:web:e87d353c5a7ff224e1df85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;