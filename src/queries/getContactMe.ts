// queries/getContactMe.ts
import datoCMSClient from "./datoCMSClient";
import { ContactMe } from "../types";
import { db } from "./firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const GET_CONTACT_ME = `
  query {
    contactMe {
      profilePicture {
        url
      }
      name
      title
      summary
      companyUniversity
      linkedinLink
      email
      phoneNumber
    }
  }
`;

export async function getContactMe() {
  const docRef = doc(db, "UserData", "contactDetails"); // collection: 'user', document: 'profilebanner'
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
