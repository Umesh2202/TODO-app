import express from "express";
import cors from "cors";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
  orderBy,
  serverTimestamp,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApS8fjXbRVddqbOA7ccbv1qDdGTkt8zZA",
  authDomain: "todo-list-42292.firebaseapp.com",
  projectId: "todo-list-42292",
  storageBucket: "todo-list-42292.appspot.com",
  messagingSenderId: "415826039101",
  appId: "1:415826039101:web:8f44946b78943a36773554",
  measurementId: "G-89XQ42PXCG",
};

const server = express();
const router = express.Router();
const port = 5000;

server.use(cors());

server.use(express.json());

//* init firebase
initializeApp(firebaseConfig);

//* init services
const db = getFirestore();

//* collection ref
const colRef = collection(db, "TODOs"); //* get a reference to the db

router.get("/read", async (req, res) => {
  // let id = req.params.id;
  // id = id.toString();
  // //* queries
  // const q = query(colRef);
  // //* get collection data
  // onSnapshot(q, (snapshot) => {
  //   let todos = [];
  //   console.log(snapshot.docs);
  //   snapshot.docs.forEach((doc) => {
  //     todos.push({ ...doc.data(), id: doc.id });
  //   });
  //   console.log(todos);
  //   //   // return res.json(snapshot.docs);
  // });
  // const snapshot = await getDocs(colRef);
  // console.log(snapshot.docs);
  // let s = {};
  // getDocs(colRef).then((ss) => {
  //   // ss.docs.forEach((doc) => {
  //   //   todos.push({ ...doc.data(), id: doc.id });
  //   // });
  //   console.log(ss);
  //   s = ss;
  //   // res.json({
  //   //   task: ss,
  //   // });
  // });

  let todos = [];
  const ss = await getDocs(colRef);
  ss.docs.forEach((doc) => {
    todos.push({ ...doc.data(), id: doc.id });
  });

  res.json(todos);
});

router.post("/write", async (req, res) => {
  await addDoc(colRef, {
    task: req.body.data,
    completed: false,
  });
  res.send("Added to database");
});

router.delete("/delete/:todoid", async (req, res) => {
  const docRef = doc(db, "TODOs", req.params.todoid);
  await deleteDoc(docRef);

  res.send("Deleted");
});

server.use(router);

server.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
