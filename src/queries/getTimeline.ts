// queries/getTimeline.ts
import datoCMSClient from "./datoCMSClient";
import { TimelineItem } from "../types";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const GET_TIMELINE = `
{
  allTimelines {
   	name
    timelineType
    title
    techStack
    summaryPoints
    dateRange
  }
}
`;

export async function getTimeline() {
  const docRef = doc(db, "UserData", "timeLineData"); // collection: 'user', document: 'profilebanner'
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
