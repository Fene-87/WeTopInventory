// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS9gMEvXCHn8AVHZ2nIweszrYsk_u1NI0",
  authDomain: "wetopinventory.firebaseapp.com",
  projectId: "wetopinventory",
  storageBucket: "wetopinventory.appspot.com",
  messagingSenderId: "575925784964",
  appId: "1:575925784964:web:295731368a7127e3004dd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);