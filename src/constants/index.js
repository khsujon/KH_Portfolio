import {
  postman,
  firebase,
  github,
  css,
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
  fourthTestimonial,
  flutter_logo,
  full_stack_logo,
  node_js_logo,
  ai_logo,
} from '../assets'

import goWholesomeBanner from '../assets/projects/goWholesome/goWholesome_banner.png';
import goWholesome2 from '../assets/projects/goWholesome/gw_2.png';
import echoGptDashboard from '../assets/projects/echogpt/EchoGpt_dashboard.png';
import echoGpt2 from '../assets/projects/echogpt/EchoGpt_2.png';
import talkie1 from '../assets/projects/Talkie/1.png';
import talkie2 from '../assets/projects/Talkie/2.png';


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
      "Kamrul has been an exceptional addition to our team at goWholesome. His dedication and sense of ownership toward our product are truly remarkable. What impresses me most is his ability to learn quickly and adapt to new challenges. He doesn't just complete tasks—he takes full responsibility for the product's success. His work ethic and commitment have exceeded all expectations.",
    name: "Ahsan Sadaf",
    designation: "CEO",
    company: "goWholesome",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've had the privilege of working with Kamrul at both goWholesome and Bismo as his CTO. His fast-paced delivery and exceptional bug-fixing skills consistently exceeded expectations. What truly sets him apart is his ability to quickly adapt to new technologies and frameworks. Whether it's implementing complex features or troubleshooting critical issues, Kamrul delivers with speed and precision. A valuable technical asset to any team.",
    name: "Aukik Aurnab",
    designation: "Co-Founder & CTO",
    company: "AI Buddy Catalyst Labs Inc.",
    image: secondTestimonial,
  },
  {
    testimonial:
      "Kamrul joined AppifyDevs as a fresher, and his dedication from day one was extraordinary. Despite being new to the industry, he demonstrated remarkable work ethic and willingness to learn. His commitment to delivering quality work and going the extra mile impressed the entire team. Watching him grow and contribute meaningfully to our projects has been incredibly rewarding. A hardworking professional with immense potential.",
    name: "Abdus Sami",
    designation: "CEO",
    company: "AppifyDevs",
    image: thirdTestimonial,
  },
  {
    testimonial:
      "Working with Kamrul on our fintech applications at Bismo was a game-changer. He approached every project with exceptional dedication and took complete ownership of his responsibilities. His understanding of complex financial systems and ability to deliver secure, robust solutions impressed me greatly. Kamrul's commitment to excellence and his proactive approach to problem-solving made him an invaluable member of our development team.",
    name: "Safat Jamil",
    designation: "Founder & CEO",
    company: "Bismo",
    image: fourthTestimonial,
  },
];

const projects = [
  {
    name: "goWholesome Social",
    description:
      "**Project Overview:** A full-stack social media platform enabling users to connect, share multimedia content, and collaborate through innovative chain posts. Currently live on **Google Play Store** and **Apple App Store**. \n\n**Key Features:** \n• Multi-format content sharing (images, videos) with real-time engagement \n• Collaborative chain posts for community-driven content creation \n• Granular privacy controls (public, private, custom audience) \n• Real-time & push notifications for instant user engagement \n\n**Technical Implementation:** \n• Built cross-platform mobile app using **Flutter** with **Clean Architecture** principles \n• Developed **RESTful backend** with **Node.js** and **Express.js** for scalable API services \n• Implemented **Socket.IO** for real-time bidirectional communication \n• **MongoDB** database design with optimized schema for social graph relationships \n• Integrated **Firebase Cloud Messaging** for cross-platform push notifications \n\n**Performance & Quality:** \n• Optimized real-time data synchronization to minimize latency \n• Implemented efficient state management for smooth UI performance \n• Clean code architecture ensuring maintainability and scalability \n\n**Tech Stack:** **Flutter** | **Node.js** | **Express.js** | **MongoDB** | **Socket.IO** | **Firebase** | **REST APIs** | **Clean Architecture**",
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
    storeLinks: [
      { type: 'playstore', url: 'https://play.google.com/store/apps/details?id=com.gowholesomesocial.gowholesome' },
      { type: 'appstore', url: 'https://apps.apple.com/us/app/gowholesome/id6752258613' },
    ],
  },
  {
    name: "Echo GPT",
    description:
      "**Project Overview:** An enterprise-grade AI chatbot application aggregating multiple leading AI models into a unified conversational interface. Successfully deployed on **Google Play Store** with premium subscription monetization. \n\n**Key Features:** \n• Multi-model AI integration (ChatGPT, Gemini, Claude, Qwen, Llama) \n• Secure user authentication with email/password and social login \n• Persistent chat history with cloud synchronization \n• Freemium business model with premium tier for advanced AI models \n• Intelligent API routing based on user subscription level \n\n**Technical Implementation:** \n• Architected cross-platform app using **Flutter** with **Provider** state management \n• Integrated **multiple AI APIs** with unified abstraction layer for seamless model switching \n• Implemented **Firebase Authentication** for secure user management \n• **Cloud Firestore** for real-time chat history synchronization \n• Built subscription system with **Firebase In-App Purchases** integration \n• **RESTful API** architecture for efficient AI model communication \n\n**Performance & Quality:** \n• Optimized API call efficiency with response caching strategies \n• Implemented error handling and retry logic for robust AI interactions \n• Clean separation of concerns with repository pattern \n• 25% improvement in user retention through UX optimizations \n\n**Tech Stack:** **Flutter** | **Firebase** | **ChatGPT API** | **Gemini API** | **Claude API** | **Provider** | **Cloud Firestore** | **REST APIs**",
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
    storeLinks: [
      { type: 'playstore', url: 'https://play.google.com/store/apps/details?id=com.echogpt.chatapp' },
    ],
  },
  {
    name: "Talkie",
    description:
      "**Project Overview:** A production-ready real-time messaging application delivering instant communication with comprehensive chat features. Built entirely on Firebase ecosystem for scalability and reliability. \n\n**Key Features:** \n• Multi-method authentication (Email/Password, Google Sign-In) \n• Real-time messaging with rich media support (images, emojis) \n• Live presence indicators (online/offline status, last seen) \n• Advanced message controls (edit, unsend, delivery reports) \n• Instant push notifications for offline message delivery \n\n**Technical Implementation:** \n• Developed using **Flutter** with **Provider** for reactive state management \n• **Firebase Realtime Database** for instant message synchronization \n• **Firebase Authentication** with OAuth 2.0 for secure user access \n• **Cloud Firestore** for user profiles and metadata storage \n• Implemented **Firebase Cloud Messaging** for cross-platform push notifications \n• Real-time presence system using Firebase connection state listeners \n• Message encryption and secure storage following best practices \n\n**Performance & Quality:** \n• Optimized real-time listeners to reduce unnecessary data reads \n• Efficient image compression before upload to minimize bandwidth \n• Clean architecture with separation of business logic and UI \n• Comprehensive error handling for offline scenarios \n\n**Tech Stack:** **Flutter** | **Firebase Realtime Database** | **Cloud Firestore** | **Firebase Auth** | **FCM** | **Provider** | **OAuth 2.0**",
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
    images: [talkie1, talkie2],
    image: talkie1,
    source_code_link: "https://github.com/khsujon/Talkie-chatting-app",
    storeLinks: [
      { type: 'github', url: 'https://github.com/khsujon/Talkie-chatting-app' },
    ],
  },
];

export { services, technologies, experiences, testimonials, projects };
