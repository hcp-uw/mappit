// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ7I9P1vehkcrQ4ZwJ5pMl09zoYYM5QW4",
  authDomain: "mappit-97b6a.firebaseapp.com",
  projectId: "mappit-97b6a",
  storageBucket: "mappit-97b6a.firebasestorage.app",
  messagingSenderId: "85790861471",
  appId: "1:85790861471:web:f84579f3bf9912e3b0daaa",
  measurementId: "G-RRGQT7TLGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);