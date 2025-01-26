// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyiKkC9csVKVIlJ_RPR5pOyagiK-iy8tI",
  authDomain: "mappit-5c2a6.firebaseapp.com",
  projectId: "mappit-5c2a6",
  storageBucket: "mappit-5c2a6.firebasestorage.app",
  messagingSenderId: "1072007291277",
  appId: "1:1072007291277:web:358558472fcff61644ddc4",
  measurementId: "G-WPYMJBZCQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);