// // queries/getProfileBanner.ts
// import datoCMSClient from './datoCMSClient';
// import { ProfileBanner } from '../types';

// const GET_PROFILE_BANNER = `
//  {
//   profilebanner {
//     backgroundImage {
//       url
//     }
//     headline
//     resumeLink {
//       url
//     }
//     linkedinLink
//     profileSummary
//   }
// }
// `;

// export async function getProfileBanner(): Promise<ProfileBanner> {
//   const data = await datoCMSClient.request<{ profilebanner: ProfileBanner }>(GET_PROFILE_BANNER);
//   console.log("🚀 ~ getProfileBanner ~ data:", data)
//   return data.profilebanner;
// }

// fetchProfileBanner.js
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
