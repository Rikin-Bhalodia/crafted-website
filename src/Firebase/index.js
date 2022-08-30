import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

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
db.settings = {experimentalForceLongPolling: true};
export const database = getDatabase(app);
export default app;
