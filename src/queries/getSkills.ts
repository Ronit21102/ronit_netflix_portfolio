import { doc, getDoc } from "firebase/firestore";
import { Skill } from "../types";
import { db } from "./firebaseConfig";

export async function getSkills() {
  const docRef = doc(db, "UserData", "skillsList"); // collection: 'user', document: 'profilebanner'
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    console.log("Skills  Data:", data);
    return data;
  } else {
    console.log("No such document!");
    return null;
  }
}
