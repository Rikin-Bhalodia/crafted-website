// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJfhF6YGcRkzILaIPbni97VzRUuxwXIJw",
  authDomain: "carfted-web.firebaseapp.com",
  projectId: "carfted-web",
  storageBucket: "carfted-web.appspot.com",
  messagingSenderId: "467485323920",
  appId: "1:467485323920:web:999c98bd42a7b472a1de15",
  measurementId: "G-HYLG0N1B9Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
// const analytics = getAnalytics(app);
