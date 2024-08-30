// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{ getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ2ExO6L2WIThA0peZTSKYydy2ppSwJ1s",
  authDomain: "myquotiverse.firebaseapp.com",
  projectId: "myquotiverse",
  storageBucket: "myquotiverse.appspot.com",
  messagingSenderId: "327779899715",
  appId: "1:327779899715:web:098de6d1d596239e7777f6",
  measurementId: "G-MZW1T1758N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
