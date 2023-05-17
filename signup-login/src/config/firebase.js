// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-p06TSUUUL8I-jhGC21ZgIYYiuSAL_NY",
  authDomain: "project-auth-nairbh.firebaseapp.com",
  projectId: "project-auth-nairbh",
  storageBucket: "project-auth-nairbh.appspot.com",
  messagingSenderId: "1012057352202",
  appId: "1:1012057352202:web:b13e2d8354a350f37697f3",
  measurementId: "G-T6YM62F31G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);

const projectAuth = getAuth(app);
console.log(projectAuth);

export { projectAuth };
