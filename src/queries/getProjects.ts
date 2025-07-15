// queries/getProjects.ts
import { Project } from "../types";

const projectData = [
  {
    title: "Instagram DM Automation Saas",
    description:
      "This is a SaaS product that automates Instagram DMs, allowing users to send personalized messages to their followers. It includes features like scheduling, analytics, and user management.",
    techUsed: "NextJS,ORM, AWS,Tailwind CSS",
    image: {
      url: "https://www.datocms-assets.com/145862/1730712540-allmeno.png",
    },
    url: "https://allmeno.com",
  },
  {
    title: "Patient Management Microsevices for Healthcare Startup",
    description:
      "Developed a patient management system for a healthcare startup, handling both frontend and backend. The system includes features like appointment scheduling, patient records management, and billing.",
    techUsed: "Java, Spring Boot,PostgreSQL,AWS,KAFKA,Kubernetes,Docker,Grpc",
    image: {
      url: "https://www.datocms-assets.com/145862/1730712618-startups.png",
    },
    url: "https://www.startups.com",
  },
  {
    title: "Inventory Management System",
    description:
      "Created an inventory management system for a retail client, managing stock levels, orders, and suppliers. The system includes real-time tracking and reporting features.",
    techUsed: "ReactJS, NodeJS, MongoDB, AWS",
    image: {
      url: "https://www.datocms-assets.com/145862/1730712991-avataar.png",
    },
    url: "https://github.com/Ronit21102/Inventory-Management-App",
  },
  {
    title: "Corporate Dashboard for Ekincare",
    description:
      "Revamped the UI of Ekincare's corporate dashboard, enhancing user experience for end customers. Managed both frontend and backend, creating RESTful APIs.",
    techUsed: "Ruby On Rails, ReactJS, PostgreSQL, AWS",
    image: {
      url: "https://www.datocms-assets.com/145862/1730713166-utilisation.png",
    },
  },
  {
    title: "Customer Relationship Management Tool",
    description:
      "Developed a CRM tool for managing investor details, handling both frontend and backend, building it from scratch.",
    techUsed: "NodeJS, ReactJS, MongoDB, AWS, Material UI",
    image: {
      url: "https://www.datocms-assets.com/145862/1730712907-crm.png",
    },
  },
  {
    title: "E-Commerce Website for Natural Products",
    description:
      "Built an e-commerce website for self-manufactured natural products, handling the full MERN stack and DevOps as a freelancer.",
    techUsed: "ReactJS, Ruby on Rails",
    image: {
      url: "https://www.datocms-assets.com/145862/1730712579-vaack.png",
    },
  },
  {
    title: "ESOP & Cap Table Management",
    description:
      "As a frontend developer, created structured code for ESOP and cap table management. Worked with a team of 3 developers.",
    techUsed: "NodeJS, ReactJS, MongoDB, AWS, ECS, Lambda",
    image: {
      url: "https://www.datocms-assets.com/145862/1730712673-mystartupequity.png",
    },
  },
  {
    title: "Secondary Investment Platform",
    description:
      "Developed a platform for investment analysts to generate comprehensive startup reports with visualizations like pie charts and bar charts for investors.",
    techUsed: "NodeJS, ReactJS, MongoDB, Cognito, ECS, Lambda",
    image: {
      url: "https://www.datocms-assets.com/145862/1730713112-letsxchange.png",
    },
  },
];

export function getProjects() {
  return projectData;
}
