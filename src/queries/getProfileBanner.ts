
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { ProfileBanner } from "../types";

export async function getProfileBanner() {
  const docRef = doc(db, "UserData", "ProfileBanner"); // collection: 'user', document: 'profilebanner'
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    console.log("Profile Banner Data:", data);
    return data;
  } else {
    console.log("No such document!");
    return null;
  }
}
