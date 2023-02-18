import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApS8fjXbRVddqbOA7ccbv1qDdGTkt8zZA",
  authDomain: "todo-list-42292.firebaseapp.com",
  databaseURL:
    "https://todo-list-42292-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todo-list-42292",
  storageBucket: "todo-list-42292.appspot.com",
  messagingSenderId: "415826039101",
  appId: "1:415826039101:web:4f476dd9c19f7c80773554",
  measurementId: "G-VB8WWQQ6E2",
};

initializeApp(firebaseConfig);
const auth = getAuth();

const db = getFirestore();

const colRef = collection(db, "TODOs");

export { auth, colRef, db };
