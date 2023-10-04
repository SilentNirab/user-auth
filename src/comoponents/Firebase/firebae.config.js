// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP-wfYpRfmpmwEpw8CEAXfDmwMBbFpS84",
  authDomain: "user-auth-796b1.firebaseapp.com",
  projectId: "user-auth-796b1",
  storageBucket: "user-auth-796b1.appspot.com",
  messagingSenderId: "55941035727",
  appId: "1:55941035727:web:d686103c288ac56edce9ba",
  measurementId: "G-6DMZEWXKZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;