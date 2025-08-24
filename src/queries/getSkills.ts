import { doc, getDoc } from "firebase/firestore";
import { Skill } from "../types";
import { db } from "./firebaseConfig";

export  function getSkills() {
 const skillsList = [
   {
     category: "Backend",
     description: "Object-Oriented Programming Language",
     icon: "FaJava",
     name: "Java",
   },
   {
     category: "Backend",
     description: "Java Framework",
     icon: "SiSpringboot",
     name: "Spring Boot",
   },
   {
     category: "Backend",
     description: "Backend Runtime",
     icon: "FaNodeJs",
     name: "Node.js",
   },
   {
     category: "Cloud & DevOps",
     description: "Continuous Integration & Delivery",
     icon: "FaGitAlt",
     name: "CI/CD",
   },
   {
     category: "Cloud & DevOps",
     description: "Frontend Deployment Platform",
     icon: "SiNetlify",
     name: "Netlify",
   },
   {
     category: "Cloud & DevOps",
     description: "Cloud Platform for Apps",
     icon: "SiHeroku",
     name: "Heroku",
   },
   {
     category: "Cloud & DevOps",
     description: "Container Orchestration",
     icon: "SiKubernetes",
     name: "Kubernetes",
   },
   {
     category: "Cloud & DevOps",
     description: "Containerization",
     icon: "FaDocker",
     name: "Docker",
   },
   {
     category: "Cloud & DevOps",
     description: "Google Cloud Platform",
     icon: "SiGooglecloud",
     name: "GCP",
   },
   {
     category: "Cloud & DevOps",
     description: "Cloud Platform",
     icon: "FaAws",
     name: "AWS",
   },
   {
     category: "Databases",
     description: "Relational Database",
     icon: "SiMysql",
     name: "MySQL",
   },
   {
     category: "Databases",
     description: "Relational Database",
     icon: "SiPostgresql",
     name: "PostgreSQL",
   },
   {
     category: "Databases",
     description: "No SQL Database",
     icon: "SiMongodb",
     name: "MongoDb",
   },
   {
     category: "Databases",
     description: "No SQL Serverless DB",
     icon: "SiFirebase",
     name: "Firebase",
   },
   {
     category: "Frontend",
     description: "Web Markup and Styling",
     icon: "SiHtml5",
     name: "HTML & CSS",
   },
   {
     category: "Frontend",
     description: "Scripting Language",
     icon: "FaNodeJs",
     name: "JavaScript",
   },
   {
     category: "Frontend",
     description: "Type-safe JavaScript",
     icon: "SiTypescript",
     name: "TypeScript",
   },
   {
     category: "Frontend",
     description: "Frontend Framework",
     icon: "FaReact",
     name: "React",
   },
   {
     category: "Other Tools & Practices",
     description: "Container Management",
     icon: "FaDocker",
     name: "Dockerization",
   },
   {
     category: "Other Tools & Practices",
     description: "Development Methodology",
     icon: "FaGitAlt",
     name: "Agile",
   },
 ];

 return skillsList;

  // const docRef = doc(db, "UserData", "skillsList"); // collection: 'user', document: 'profilebanner'
  // const docSnap = await getDoc(docRef);

  // if (docSnap.exists()) {
  //   const data = docSnap.data();
  //   console.log("Skills  Data:", data);
  //   return data;
  // } else {
  //   console.log("No such document!");
  //   return null;
  // }
}
