// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtZ3lbinCMnHZRj_X1b7R2jfXhq3DXj4E",
  authDomain: "dragon-news-f1512.firebaseapp.com",
  projectId: "dragon-news-f1512",
  storageBucket: "dragon-news-f1512.firebasestorage.app",
  messagingSenderId: "262114196648",
  appId: "1:262114196648:web:d7a4ba07c1436ccf9e569d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)