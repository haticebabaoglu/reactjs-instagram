import {initializeApp} from "firebase/app";
import {getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import toast from "react-hot-toast";
import {userHandle} from "utils";

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
const auth = getAuth()

onAuthStateChanged(auth, user => {
	userHandle(user || false)
})

export const login = async (email, password) => {
	try {
		const response = await signInWithEmailAndPassword(auth, email, password)
	} catch (err) {
		toast.error(err.code)
	}
}

export const logout = async () => {
	try {
		await signOut(auth)
	} catch (err) {
		toast.error(err.code)
	}
}
