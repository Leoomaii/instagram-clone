// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7Yyy8ChO5C9rWi3pHwtRpMWdXOVehXQA",
  authDomain: "instagram-clone-370e1.firebaseapp.com",
  projectId: "instagram-clone-370e1",
  storageBucket: "instagram-clone-370e1.appspot.com",
  messagingSenderId: "776610696124",
  appId: "1:776610696124:web:9e0130b6582caf8fee79b9",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage}