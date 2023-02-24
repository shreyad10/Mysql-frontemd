import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCZLbLEAx9afppexY05HR1tLI2YaK-JMFk",
  authDomain: "fir-newsapp-c8d5b.firebaseapp.com",
  projectId: "fir-newsapp-c8d5b",
  storageBucket: "fir-newsapp-c8d5b.appspot.com",
  messagingSenderId: "339500811399",
  appId: "1:339500811399:web:acaa66834ba572caa3a422",
  measurementId: "G-G3J9QGRZQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

export const db = getFirestore(app)
