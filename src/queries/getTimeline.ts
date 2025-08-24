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

  const timeLineData = [
    {
      dateRange: "July 2024 - Present",
      name: "Kreeda Labs",
      summaryPoints: [
        "Built real-time chat and video consultation features to improve patient engagement.",
        "Implemented a microservices architecture using Docker and Kubernetes.",
        "Boosted Lighthouse performance score by optimizing frontend and backend efficiency.",
      ],
      techStack: "React,Nodejs,Redis,Docker,Postgres,AWS",
      timeLineType: "Work",
      title: "Software Engineer",
    },
    {
      dateRange: "Jun 2023 - FEB 2024",
      name: "SpringWorks",
      summaryPoints: [
        "🚀 Led the development of the NHSPS Open Space platform, enhancing user experience and performance.",
        "🪄 Streamlined QA processes, cutting down bug rate by 20% through better test coverage.",
        "💡 Optimized backend systems to handle 10,000+ users and 50M+ booking records efficiently.",
      ],
      techStack: "React, Fabric.js, Redux, PostgreSQL, MongoDB",
      timelineType: "work",
      title: "Internship 🎉",
    },
    {
      dateRange: "Jan 2021 - May 2021",
      name: "Coding Ninjas",
      summaryPoints: [
        "📑 Developed a full-stack form management system using Java Spring Boot and ReactJS.",
        "🚀 Deployed the application on Heroku (backend) and Netlify (frontend) with CI/CD pipelines.",
      ],
      techStack: "Java, Spring Boot, ReactJS",
      timelineType: "work",
      title: "Internship",
    },
    {
      dateRange: "Jul 2019 - Jul 2023",
      name: "KIET ABDUL KALAM TECHNICAL UNIVERSITY",
      summaryPoints: [
        "📚 Actively contributed to ISTE and CSI student chapters through events and tech fests.",
        "📖 Organized Gravitas Fest and presented research published in IJMET.",
      ],
      techStack: "OOPs, DBMS, SQL",
      timelineType: "education",
      title: "Bachelor's 🏅",
    },
  ];
  return { timelineData: timeLineData };
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
