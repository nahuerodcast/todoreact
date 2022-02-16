import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD18WqylzTUcgr6x5kuC3Jda6UvI9czoVs",
  authDomain: "todos-app-48750.firebaseapp.com",
  projectId: "todos-app-48750",
  storageBucket: "todos-app-48750.appspot.com",
  messagingSenderId: "474255189288",
  appId: "1:474255189288:web:6df2615d66cfec71ed9c1d",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
