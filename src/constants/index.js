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
  flutter_logo,
  full_stack_logo,
  node_js_logo,
  ai_logo,
} from '../assets'

import goWholesomeBanner from '../assets/projects/goWholesome/goWholesome_banner.png';
import goWholesome2 from '../assets/projects/goWholesome/gw_2.png';
import echoGptDashboard from '../assets/projects/echogpt/EchoGpt_dashboard.png';
import echoGpt2 from '../assets/projects/echogpt/EchoGpt_2.png';


// Import company logos separately
import bismo from "../assets/bismo_logo.jpg";
import appifydevs from "../assets/appifydevs_logo.jpg";
import gowholesome from "../assets/gowholesome.png";

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
    icon: flutter_logo,
  },
  {
    title: "Full-Stack Developer(Mobile)",
    icon: full_stack_logo,
  },
  {
    title: "Backend Engineer(Node.js)",
    icon: node_js_logo,
  },
  {
    title: "AI/ML Enthusiast",
    icon: ai_logo,
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
    title: "Full-Stack Mobile App Developer",
    company_name: "goWholesome Social",
    location: "Maryland, USA",
    icon: gowholesome,
    iconBg: "#383E56",
    date: "July 2025 – Present",
    points: [
      'Developing goWholesome, a comprehensive social media application enabling users to connect, share, and engage with diverse content.',
      'Building a robust backend using Node.js, Express.js, and MongoDB to handle user authentication, posts, media uploads, and real-time interactions.',
      'Implementing a Flutter-based cross-platform frontend for seamless iOS and Android experiences with modern UI/UX design.',
      'Developing advanced features including image/video posts, chain posts for collaborative contributions, and customizable privacy settings (public, private, and custom).',
      'Integrating real-time notifications using Socket.IO for in-app messaging and push notifications for user engagement.',
      'Designing and implementing privacy controls allowing users to manage who can view and interact with their content.',
    ],
  },

  {
    title: "Flutter Developer",
    company_name: "Bismo",
    location: "Dhaka, Bangladesh",
    icon: bismo,
    iconBg: "#383E56",
    date: "JAN 2024 – June 2025",
    points: [
      'Spearheaded the development of "Zep Core," a Flutter-based MVP mobile application aimed at streamlining event ticket booking and vendor engagement.',
      'Implemented features such as digital offers, gift cards, and loyalty cards for seamless customer interactions across multiple vendors.',
      'Collaborated with cross-functional teams to ensure scalable architecture and an intuitive user interface aligned with business goals.'
    ],
  },
  {
    title: "Jr. Software Engineer (Flutter)",
    company_name: "AppifyDevs",
    location: "Dhaka, Bangladesh",
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
    name: "goWholesome Social",
    description:
      "A comprehensive social media platform enabling users to connect, share, and engage with diverse content. Features include image/video posts, chain posts for collaborative contributions, customizable privacy settings (public, private, custom), and real-time notifications using Socket.IO. Currently live on Google Play Store and Apple App Store.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "socket.io",
        color: "white-text-gradient",
      },
      {
        name: "playstore",
        color: "blue-text-gradient",
      },
      {
        name: "appstore",
        color: "pink-text-gradient",
      },
    ],
    images: [goWholesomeBanner, goWholesome2],
    image: goWholesomeBanner,
    source_code_link: "https://github.com/",
  },
  {
    name: "Echo GPT",
    description:
      "An AI-powered chatbot application integrating multiple AI APIs including ChatGPT, Gemini, Claude, Qwen, and Llama. Features include user authentication (login/signup), chat history management, and premium subscription options for accessing advanced AI models. Currently live on Google Play Store, providing users with a versatile AI assistant experience.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "AI APIs",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "playstore",
        color: "white-text-gradient",
      },
    ],
    images: [echoGptDashboard, echoGpt2],
    image: echoGptDashboard,
    source_code_link: "https://github.com/",
  },
  {
    name: "Talkie",
    description:
      "A feature-rich real-time chatting application enabling seamless communication between users. Features include email/password and Google Sign-In authentication, real-time messaging with image and emoji support, online/offline status indicators, last seen timestamps, message delivery reports, and the ability to unsend and edit messages. Built entirely on Firebase for backend services, with integrated push notifications and real-time updates for an instant messaging experience.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "real-time",
        color: "white-text-gradient",
      },
      {
        name: "chat",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
