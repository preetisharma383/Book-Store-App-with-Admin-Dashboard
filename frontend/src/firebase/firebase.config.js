// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaapazFfyJXwuLaUJwswDlvmWtJ4LBjPw",
  authDomain: "book-store-app-673ff.firebaseapp.com",
  projectId: "book-store-app-673ff",
  storageBucket: "book-store-app-673ff.firebasestorage.app",
  messagingSenderId: "86339347",
  appId: "1:86339347:web:240210354c97bfd8df74e6",
  measurementId: "G-VPX1NLF8HJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
