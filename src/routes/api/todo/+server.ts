import { json } from "@sveltejs/kit";
import { colRef, db } from "./firebase";
import { getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

export const GET = async () => {
  const ss = await getDocs(colRef);
  const infos: any[] = [];

  ss.docs.forEach((doc: { data: () => object; id: string }) => {
    infos.push({ ...doc.data(), id: doc.id });
  });
  return json(infos);
};

export const POST = async ({ request }) => {
  const body = await request.json();
  console.log(body.data);

  await addDoc(colRef, {
    task: body.data,
    completed: false,
  });
  return new Response(JSON.stringify({ message: "Added successfully" }), {
    status: 200,
  });
};

export const DELETE = async ({ url }) => {
  const id = url.searchParams.get("id");
  console.log(id);
  const docRef = doc(db, "TODOs", id);
  await deleteDoc(docRef);
  return json("deleted");
};
