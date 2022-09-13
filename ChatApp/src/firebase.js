// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5LFcV0QHo81AmJAnr-F0PnG5M-UrQlMM",
  authDomain: "react-chat-app-5002e.firebaseapp.com",
  projectId: "react-chat-app-5002e",
  storageBucket: "react-chat-app-5002e.appspot.com",
  messagingSenderId: "488094924481",
  appId: "1:488094924481:web:3335dd6708dad48cbf9e40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app);
export const db = getFirestore(app);