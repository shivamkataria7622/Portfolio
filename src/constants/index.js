import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a driven B.Tech Computer Science student at the Indian Institute Of Information Technology, Kurnool, with a passion for building full-stack web applications. My project experience includes developing a full-featured e-commerce platform and a secure file-sharing web app. I am proficient in front-end technologies like React and Next.js , as well as back-end technologies including Node.js, Express, and MongoDB. My goal is to leverage my strong foundation in Data Structures and Algorithm , backed by 400+ solved problems, to create efficient and innovative solutions.`;
export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 years of  experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "May 2025 - June 2025",
    role: "Trainee",
    company: "Bharat Electronics Limited",
    location: "Ghaziabad",
    points: [
      "Worked on SCADA systems, monitoring over 500+ real-time data points using WebSockets to ensure system stability. [cite: 13]",
      "Collaborated in a team of 4 to build and maintain scalable distributed systems using REST APIs with Node.js and Express. [cite: 14]",
       "Utilized a Linux environment for system-level debugging, contributing to system improvements. [cite: 15]"
    ]
  }
];

export const PROJECTS = [
  {
    title: "E-commerce webapp",
    image: project4,
    description:
      "An e-commerce platform for selling and buying products online.Full responsvie webapp with cart and wishlist functionality and payment gateway integration with razorpay made using MERN stack.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],

  },
  {
    title:  "File-Sharing webapp",
    image: project1,
    description:
      "A secure file-sharing webapp with user authentication and file upload functionality using MERN stack with MongoDB .",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Password-Manager webapp",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
 
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
