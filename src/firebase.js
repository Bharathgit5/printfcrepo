
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
const app = initializeApp ({
  apiKey: "AIzaSyAUgZ9VXfn0K_WYYGLIFndGUG_ifZ_4kp4",
  authDomain: "printf-in-5e5db.firebaseapp.com",
  projectId: "printf-in-5e5db",
  storageBucket: "printf-in-5e5db.appspot.com",
  messagingSenderId: "1089926924047",
  appId: "1:1089926924047:web:ad9fff2d215f7e0839e07a",
  measurementId: "G-G662PNJD5Y"
});

export const auth = getAuth();
export const storage = getStorage(app);
export const database = getDatabase(app);
const firebaseModule = { app};
export default firebaseModule;