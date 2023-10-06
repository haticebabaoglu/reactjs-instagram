import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import toast from "react-hot-toast";
import { userHandle } from "utils";

const firebaseConfig = {
  apiKey: "AIzaSyDFF0AZNMuIGA58tzIPxW2vtauuHGTzhp4",
  authDomain: "reactjs-instagram-4f101.firebaseapp.com",
  projectId: "reactjs-instagram-4f101",
  storageBucket: "reactjs-instagram-4f101.appspot.com",
  messagingSenderId: "127150819878",
  appId: "1:127150819878:web:792db56ff1366126f5b4e7",
  measurementId: "G-TGGZ3CM7CG",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// const db = getFirestore(app);

// onAuthStateChanged(auth, async (user) => {
//   if (user) {
//     const dbUser = await getDoc(doc(db, "users", user.uid));
//     let data = {
//       uid: user.uid,
//       fullName: user.displayName,
//       email: user.email,
//       emailVerified: user.emailVerified,
//       ...dbUser.data(),
//     };
//     userHandle(data);
//   } else {
//     userHandle(false);
//   }
// });

// export const login = async (email, password) => {
//   try {
//     return await signInWithEmailAndPassword(auth, email, password);
//   } catch (err) {
//     toast.error(err.code);
//   }
// };

// export const getUserInfo = async (uname) => {
//   const username = await getDoc(doc(db, "usernames", uname));
//   if (username.exists()) {
//     return (await getDoc(doc(db, "users", username.data().user_id))).data();
//   } else {
//     toast.error("Kullanıcı bulunamadı!");
//     throw new Error("Kullanıcı bulunamadı!");
//   }
// };

// export const register = async ({ email, password, full_name, username }) => {
//   try {
//     const user = await getDoc(doc(db, "usernames", username));
//     if (user.exists()) {
//       toast.error(`${username} kullanıcı adı başkası tarafından kullanılıyor.`);
//     } else {
//       const response = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       if (response.user) {
//         await setDoc(doc(db, "usernames", username), {
//           user_id: response.user.uid,
//         });

//         await setDoc(doc(db, "users", response.user.uid), {
//           fullName: full_name,
//           username: username,
//           followers: [],
//           following: [],
//           notifications: [],
//           website: "",
//           bio: "",
//           phoneNumber: "",
//           gender: "",
//           posts: 0,
//         });

//         await updateProfile(auth.currentUser, {
//           displayName: full_name,
//         });

//         return response.user;
//       }
//     }
//   } catch (err) {
//     toast.error(err.code);
//   }
// };

// export const logout = async () => {
//   try {
//     await signOut(auth);
//   } catch (err) {
//     toast.error(err.code);
//    }
// };
