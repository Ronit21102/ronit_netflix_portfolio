import { getFirestore, doc, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { db } from "./firebaseConfig";


const timelineData = [
  {
    name: "Kreeda Labs",
    timelineType: "work",
    title: "Software Developer - LI 🎉",
    techStack: "React, Nodejs, Redis, Stripe, Postgres, AWS",
    summaryPoints: [
      "👨‍⚕️ Built real-time chat and video consultation features to improve patient engagement.",
      "📊 Designed an analytics dashboard to enhance data visibility for healthcare professionals.",
      "⚡ Boosted Lighthouse performance score by optimizing frontend and backend efficiency.",
    ],
    dateRange: "Jul 2024 - Present",
  },
  {
    name: "SpringWorks",
    timelineType: "work",
    title: "Internship 🎉",
    techStack: "React, Fabric.js, Redux, PostgreSQL, MongoDB",
    summaryPoints: [
      "🚀 Led the development of the NHSPS Open Space platform, enhancing user experience and performance.",
      "🧪 Streamlined QA processes, cutting down bug rate by 20% through better test coverage.",
      "💡 Optimized backend systems to handle 10,000+ users and 50M+ booking records efficiently.",
    ],
    dateRange: "Jun 2023 - FEB 2024",
  },
  {
    name: "Coding Ninjas",
    timelineType: "work",
    title: "Internship",
    techStack: "Java, Spring Boot, ReactJS",
    summaryPoints: [
      "📜 Developed a full-stack form management system using Java Spring Boot and ReactJS.",
      "🚀 Deployed the application on Heroku (backend) and Netlify (frontend) with CI/CD pipelines.",
    ],
    dateRange: "Jan 2021 - May 2021",
  },
  {
    name: "KIET ABDUL KALAM TECHNICAL UNIVERSITY",
    timelineType: "education",
    title: "Bachelor's 🏅",
    techStack: "OOPs, DBMS, SQL",
    summaryPoints: [
      "🎓 Actively contributed to ISTE and CSI student chapters through events and tech fests.",
      "📚 Organized Gravitas Fest and presented research published in IJMET.",
    ],
    dateRange: "Jul 2019 - Jul 2023",
  },
];


export async function uploadSkills() {
  try {
    await setDoc(doc(db, "UserData", "timeLineData"), {
      timelineData,
    });
    console.log("Skills uploaded successfully!");
  } catch (error) {
    console.error("Error uploading skills:", error);
  }
}
