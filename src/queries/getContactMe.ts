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

export  function getContactMe() {
  const profileData = {
    companyUniversity: "Kreeda Labs | KIET APJ ABDUL KALAM UNIVERSITY",
    email: "ronit21102@gmail.com",
    linkedinLink: "https://www.linkedin.com/in/ronit-roushan-460a9b194/",
    name: "Ronit Roushan",
    phoneNumber: "+91 7061414395",
    profilePicture: {
      url: "https://media.licdn.com/dms/image/v2/D5603AQGTnUj2w3vPsw/profile-displayphoto-scale_400_400/B56ZjBjMf8G0Ag-/0/1755593890829?e=1758758400&v=beta&t=S6WRjcNl__3N75f36DfPHhkRSvjSTP0Eh8aozxVxOII",
    },
    summary:
      "With 1+ years in full-stack development, skilled in React, Node, Java Spring Boot, AWS, Kubernetes, and Docker.",
    title: "Software Engineer",
  };
  return profileData;
  // const docRef = doc(db, "UserData", "contactDetails"); // collection: 'user', document: 'profilebanner'
  // const docSnap = await getDoc(docRef);

  // if (docSnap.exists()) {
  //   const data = docSnap.data();
  //   console.log("Profile Banner Data:", data);
  //   return data;
  // } else {
  //   console.log("No such document!");
  //   return null;
  // }
}
