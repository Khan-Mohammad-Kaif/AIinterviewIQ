
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "aiinterviewiq-c5796.firebaseapp.com",
  projectId: "aiinterviewiq-c5796",
  storageBucket: "aiinterviewiq-c5796.firebasestorage.app",
  messagingSenderId: "378081084970",
  appId: "1:378081084970:web:5c9718d7b792a180bfe553"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}