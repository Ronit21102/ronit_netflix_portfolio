// queries/getProjects.ts
import { Project } from "../types";

const projectData = [
  {
    title: "Instagram DM Automation Saas",
    description:
      "This is a SaaS product that automates Instagram DMs, allowing users to send personalized messages to their followers. It includes features like scheduling, analytics, and user management.",
    techUsed: "NextJS,ORM, AWS,Tailwind CSS",
    image: {
      url: "https://github.com/user-attachments/assets/a374aa33-b110-41e4-ad77-7c957d8a08d7",
    },
    url: "https://instagramdmautomation-jzpz.vercel.app/",
  },
  {
    title: "Pokedex",
    description:
      "Created a Pokedex application using ReactJS, allowing users to search and view details about various Pokémon. The app fetches data from the PokéAPI and displays it in a user-friendly interface.",
    techUsed: "ReactJS, SCSS, Redux, PokéAPI",
    image: {
      url: "https://github.com/Ronit21102/Pokedex/blob/main/app_screenshots/4.png?raw=true",
    },
    url: "https://pokedex-dusky-five-86.vercel.app/pokemon/1",
  },
  {
    title: "Haru",
    description:
      "Fashion store with sleek design and smooth animations, built with Next.js and Tailwind CSS. Features include product listings, a shopping cart, and user authentication created for a client.",
    techUsed: "NextJS,React,Typescript,Tailwind",
    image: {
      url: "https://github.com/user-attachments/assets/283302bf-8bd0-40d2-8273-169d181f6f60",
    },
    url: "https://haru-fashion.vercel.app/",
  },
  {
    title: "Edgy Media",
    description:
      "Instagram growth agency website with a modern design and smooth animations, built with Next.js and Tailwind CSS. Features include service listings, testimonials, and a contact form.",
    techUsed: "ReactJS,NodeJS, MongoDB, Tailwind CSS",
    image: {
      url: "https://github.com/user-attachments/assets/42091f61-6709-4003-9975-916c418fef98",
    },
    url: "https://edgy-media.vercel.app/",
  },

  {
    title: "Chat Application",
    description:
      "Developed a real-time chat application using WebSockets, allowing users to communicate instantly. The app supports multiple rooms and private messaging.",
    techUsed: "ReactJS, Websocket, NodeJS, MongoDB, AWS, Docker,JWT",
    image: {
      url: "https://github.com/user-attachments/assets/c3088b7c-cbc2-43b4-9f3f-d57e3b52196e",
    },
    url: "https://chat-app-greatstack.vercel.app/",
  },
  {
    title: "AI-Powered Background Remover",
    description:
      "Developed an AI-powered background remover that allows users to upload images and automatically removes the background, providing a clean image for further use.",
    techUsed: "ReactJS, Redux, Tailwind CSS,MongoDB,ExpressJS",
    image: {
      url: "https://github.com/user-attachments/assets/f5e5b3a9-472d-49a2-8019-37620ed91856",
    },
    url: "https://bg-remover-gs.vercel.app/",
  },
  {
    title: "Next Bookstore",
    description:
      "A modern bookstore application built with Next.js, featuring a responsive design and SEO optimization. It includes functionalities like product listings, a shopping cart, and user authentication.",
    techUsed: "ReactJS,Responsive Design,SEO,Strapi",
    image: {
      url: "https://github.com/user-attachments/assets/a1dc0156-d447-4cd2-8da1-396fbe353a95",
    },
    url: "https://nextbookstore.vercel.app/",
  },
  {
    title: "Patient Management Microsevices for Healthcare Startup",
    description:
      "Developed a patient management system for a healthcare startup, handling both frontend and backend. The system includes features like appointment scheduling, patient records management, and billing.",
    techUsed: "Java, Spring Boot,PostgreSQL,AWS,KAFKA,Kubernetes,Docker,Grpc",
    image: {
      url: "https://www.datocms-assets.com/145862/1730712618-startups.png",
    },
    url: "https://github.com/Ronit21102/patient-management-MicroservicesApp",
  },
];

export function getProjects() {
  return projectData;
}
