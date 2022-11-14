// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt-g1sLt3EebPmxQlVvh0uSrNpLHS6L0Q",
  authDomain: "xtreme-763f7.firebaseapp.com",
  projectId: "xtreme-763f7",
  storageBucket: "xtreme-763f7.appspot.com",
  messagingSenderId: "395469919194",
  appId: "1:395469919194:web:dc67b738890b86fd38a6e3",
  measurementId: "G-NXZSKKWE09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;