import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { ProfileBanner } from "../types";

export function getProfileBanner() {
  const profilebannerData = {
    profileSummary:
      "Full-stack developer skilled in MERN stack and Java Spring Boot, with a strong foundation in building scalable microservices and event-driven architectures using Kafka and gRPC. Passionate problem solver with hands-on experience in both backend and frontend systems. Proven ability to design and deliver robust, high-performance applications in production environments",
    resumeLink:
      "https://drive.google.com/file/d/1cmc6EjsFdJli3iTpLeyJVIXcyYh2b2Z_/view?usp=sharing",
    linkedinLink: "https://www.linkedin.com/in/ronit-roushan-460a9b194/",
    headline: "Ronit - Full Stack Developer",
  };

  return profilebannerData;
  // const docRef = doc(db, "UserData", "ProfileBanner"); // collection: 'user', document: 'profilebanner'
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
