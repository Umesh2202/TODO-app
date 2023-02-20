import { j as json } from "../../../../chunks/index.js";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyApS8fjXbRVddqbOA7ccbv1qDdGTkt8zZA",
  authDomain: "todo-list-42292.firebaseapp.com",
  databaseURL: "https://todo-list-42292-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todo-list-42292",
  storageBucket: "todo-list-42292.appspot.com",
  messagingSenderId: "415826039101",
  appId: "1:415826039101:web:4f476dd9c19f7c80773554",
  measurementId: "G-VB8WWQQ6E2"
};
initializeApp(firebaseConfig);
getAuth();
const db = getFirestore();
const colRef = collection(db, "TODOs");
const GET = async () => {
  const ss = await getDocs(colRef);
  const infos = [];
  ss.docs.forEach((doc2) => {
    infos.push({ ...doc2.data(), id: doc2.id });
  });
  return json(infos);
};
const POST = async ({ request }) => {
  const body = await request.json();
  console.log(body.data);
  await addDoc(colRef, {
    task: body.data,
    completed: false
  });
  return new Response(JSON.stringify({ message: "Added successfully" }), {
    status: 200
  });
};
const DELETE = async ({ url }) => {
  const id = url.searchParams.get("id");
  console.log(id);
  const docRef = doc(db, "TODOs", id);
  await deleteDoc(docRef);
  return json("deleted");
};
export {
  DELETE,
  GET,
  POST
};
