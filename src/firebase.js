// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFF0AZNMuIGA58tzIPxW2vtauuHGTzhp4",
  authDomain: "reactjs-instagram-4f101.firebaseapp.com",
  projectId: "reactjs-instagram-4f101",
  storageBucket: "reactjs-instagram-4f101.appspot.com",
  messagingSenderId: "127150819878",
  appId: "1:127150819878:web:792db56ff1366126f5b4e7",
  measurementId: "G-TGGZ3CM7CG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);