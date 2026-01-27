import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaLanguage, FaSchool, FaGraduationCap, FaUserGraduate } from 'react-icons/fa';

import profileImgJoaoVictorProfile from '../assets/joao_victor_profile.jpeg';
import profileImgJoaoVictor from '../assets/joao_victor.webp';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';

//Company logos
import itAllLogo from '../assets/it_all_logo.jpg';
import etsysLogo from '../assets/etsys_logo.png';
import ieavLogo from '../assets/ieav_logo.png';


export const assets = {
    profileImgJoaoVictor, profileImgJoaoVictorProfile
}


export const aboutInfo = [
    {
      icon: FaUserGraduate,
      title: 'Postgraduate Degree',
      description: 'Software Engineering – Faculdade Metropolitana (Jun 2025 – Jun 2026)',
      color: 'text-purple'
    },
    {
      icon: FaGraduationCap,
      title: 'Associate Degree',
      description: 'Systems Analysis and Development – Universidade Anhembi Morumbi (Jun 2021 – Feb 2024)',
      color: 'text-pink'
    },
    {
      icon: FaSchool,
      title: 'Technical Degree',
      description: 'Information Technology – Colégio Joseense (Feb 2017 – Dec 2019)',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['JavaScript', 'React', 'Tailwind CSS', 'Jquery', 'Ajax']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Pyhton', 'Java', 'PHP', 'Laravel', 'CodeIgniter']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MySQL', 'Oracle SQL']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS S3']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git', 'GitHub', 'GitLab', 'Jira']
  },  {
    title: 'Languages',
    icon: FaLanguage,
    description: 'Communication skills for professional and technical environments.',
    tags: ['English: Intermediate', 'Portuguese: Native' ]
  },
];



export const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
    image: projectImg1,
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "Task Management App",
    description: "A productivity application with drag-and-drop functionality and real-time updates.",
    image: projectImg2,
    tech: ["Vue.js", "Firebase", "Tailwind CSS", "WebSockets"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Fitness Tracker",
    description: "A mobile app for tracking workouts, nutrition, and health metrics.",
    image: projectImg3,
    tech: ["React Native", "GraphQL", "MySQL", "Chart.js"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "Chat App",
    description: "A real-time chat application with group messaging, emojis, and file sharing.",
    image: projectImg5,
    tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "#",
    code: "#",
  },
  {
    title: "AI Image Generator",
    description: "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
    image: projectImg6,
    tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "#",
  }
];


export const workData = [
  {
    role: "Mid-Level Developer",
    company: "IT.ALL",
    duration: "Mar/2022 – Present",
    description:
      "I work as a Full Stack Developer on web projects using PHP, Laravel, CodeIgniter, Java, JavaScript, React, and related front-end technologies. I have experience with cloud services, such as Amazon S3 for file storage and data management, as well as working with relational databases, including MySQL and Oracle SQL. I also have knowledge of Git, performing code version control with branches.",
    second_description: 
      "I collaborate in Agile Scrum teams, contributing to development, participating in code reviews, and working closely with other developers to deliver reliable and well-structured solutions.", 
    color: "purple",
    companyLogo: itAllLogo
  },
  {
    role: "Developer",
    company: "Indústria e Tecnologia em Sistemas ETSYS",
    duration: "Jul/2021 – Feb/2022",
    description:
    "I work as a Full Stack Developer on web projects, building internal company systems using PHP, Laravel, JavaScript, and MySQL. I collaborate in Agile Scrum environments, working in sprints and leveraging modern frameworks to deliver efficient and scalable solutions.",
    color: "pink",
    companyLogo: etsysLogo
  },
  {
    role: "Contributor",
    company: "Instituto de Estudos Avançados (IEAv)",
    duration: "Jun/2021 – Jul/2021",
    description:
      "I gained my first professional experience with front-end and back-end development, working on bug fixes and providing technical support for Linux systems, which helped build a solid technical foundation.",
    color: "blue",
    companyLogo: ieavLogo
  }
];
