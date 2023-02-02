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
} from "firebase/firestore";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MESUREMENTID,
};

const server = express();
const router = express.Router();
const port = process.env.PORT || 5000;

server.use(cors());

server.use(express.json());

//* init firebase
initializeApp(firebaseConfig);

//* init services
const db = getFirestore();

//* collection ref
const colRef = collection(db, "TODOs"); //* get a reference to the db

router.get("/read", async (req, res) => {
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
