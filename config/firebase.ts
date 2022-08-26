import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxqeG_Snc5lOk5bY0z73URKaJ7cwJDi4A",
  authDomain: "candidate-projectbygco.firebaseapp.com",
  projectId: "candidate-projectbygco",
  storageBucket: "candidate-projectbygco.appspot.com",
  messagingSenderId: "854206103335",
  appId: "1:854206103335:web:0ce599f1b6c02e996ff302",
  measurementId: "G-N2SXKH333T",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
