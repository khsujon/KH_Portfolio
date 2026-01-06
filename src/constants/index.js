import {
  backend,
  creator,
  mobile,
  web,

  postman,
  firebase,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  figma,
  git,
  html,
  javascript,
  mongodb,
  tailwind,
  
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import company logos separately
import bismo from "../assets/bismo_logo.jpg";
import appifydevs from "../assets/appifydevs_logo.jpg";

import dart from "../assets/tech/dart.png";
import flutter from "../assets/tech/flutter.png";
import nodejs from "../assets/tech/nodejs.png";
import python from "../assets/tech/python.png";
import pandas from "../assets/tech/pandas.png";
import numpy from "../assets/tech/numpy.png";




export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Cross-Platform App Developer",
    icon: web,
  },
  {
    title: "Full-Stack Developer(Mobile)",
    icon: mobile,
  },
  {
    title: "Backend Engineer(Node.js)",
    icon: backend,
  },
  {
    title: "AI/ML Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "Numpy",
    icon: numpy,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name:"github",
    icon:github,
  },
  {
    name:"firebase",
    icon:firebase,
  },
  {
    name:"postman",
    icon:postman,
  },
  {
    name: "figma",
    icon: figma,
  },

  
];

const experiences = [

  {
    title: "Flutter Developer",
    company_name: "Bismo",
    icon: bismo,
    iconBg: "#383E56",
    date: "JAN 2024 – Present",
    points: [
      'Spearheading the development of "Zep Core," a Flutter-based MVP mobile application aimed at streamlining event ticket booking and vendor engagement.',
      'Implementing features such as digital offers, gift cards, and loyalty cards for seamless customer interactions across multiple vendors.',
      'Collaborating with cross-functional teams to ensure scalable architecture and an intuitive user interface aligned with business goals.'
    ],
  },
  {
    title: "Jr. Software Engineer (Flutter)",
    company_name: "AppifyDevs",
    icon: appifydevs,
    iconBg: "#E6DEDD",
    date: "Oct 2024 – Dec 2024",
    points: [
      'Developed an AI-powered chatbot (EchoGPT), integrating multiple AI APIs, improving user retention by 25%.',
      'Optimized REST API calls for an HRMS application, reducing API response time by 15%.',
      'Enhanced app performance for the Chondo App by refactoring the GetX-based codebase, achieving 20% faster response times.',
      'Designed an admin dashboard with secure authentication and intuitive UI/UX for managing interactions.'
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Tekisky Mart",
    description:
      "Tekisky Mart is a web-based platform that allows users to search, explore, and purchase a wide range of products from various providers, offering a seamless and efficient shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://github.com/",
  },
  {
    name: "GearXpert",
    description:
      "GearXpert is your ultimate destination for premium auto parts and accessories, Whether you're an automobile enthusiast or a professional, find everything you need to upgrade, repair.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "emailJs",
        color: "green-text-gradient",
      },
      {
        name: "Gsap",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/",
  },
  {
    name: "GoGroove-Ecommerce",
    description:
      "Go-Groove is your ultimate destination for premium products across various categories. Whether you're a savvy shopper or a professional, enhance, and simplify your lifestyle—all in one place!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
