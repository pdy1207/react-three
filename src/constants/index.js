import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  infocar,
  carrent,
  jobit,
  tripguide,
  spring,
  threejs,
  github2,
  bizring,
  admin,
  jejubeer,
  resume,
  vuebangapp,
  spring2,
  news,
  android,
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Server Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github2,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "spring",
    icon: spring,
  },
];

const experiences = [
  {
    title: "Vue.js Developer",
    company_name: "Infocar",
    icon: infocar,
    iconBg: "#383E56",
    date: "April 2023 ~ ing",
    points: [
      "Infocar company page creation, scanner registration and map page creation",
      "Develop and manage web applications using Vue.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "PHP & LINUX Developer",
    company_name: "infocar",
    icon: infocar,
    iconBg: "#E6DEDD",
    date: "December 2022 - May 2023-05",
    points: [
      "Although it was a short time, I participated in the SI project and conducted development and communication with companies.",

      "Production of application site and admin page",
      "Create and maintain application sites and administration pages.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Permissions & access to server",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "VuebangApp",
    description:
      "This is a review room app made with Vue. This project was created to complete the study of Vue. We also added a payment function using the Toss API.",

    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "SASS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: vuebangapp,
    source_code_link: "https://github.com/pdy1207/Vuebangapp",
  },
  {
    name: "Simple web resume",
    description:
      "This is a resume that I made so that I can simply introduce myself.",

    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "SASS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: resume,
    source_code_link: "https://github.com/pdy1207/Dy.dev",
  },
  {
    name: "BizringKia, BizringSamsung, BizringRich",
    description:
      "Creating a application page that users can apply for and setting restrictions,Production of application sites for Samsung Fire & Marine, Rich & Co., Kia Motors, etc. in relation to Biz Ring",

    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },

      {
        name: "MYSQL",
        color: "pink-text-gradient",
      },
    ],
    image: bizring,
    source_code_link: "https://its4u.co.kr/bizring_kia/",
  },
  {
    name: "Bizring Admin",
    description:
      "Bizring is a manager page manufacturer for Samsung Fire & Marine Insurance, Rich & Co., Kia Motors, etc. You can search by date name, date of birth, download Excel, modify, and delete.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
      {
        name: "MYSQL",
        color: "green-text-gradient",
      },
    ],
    image: admin,
    source_code_link: "",
  },
  {
    name: "DoyoungJeju",
    description:
      "The Jeju Beer site looks so pretty, so clean code and production in my own way!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jejubeer,
    source_code_link: "https://github.com/pdy1207/Jejubeer",
  },
  {
    name: "Lego Site",
    description:
      "I wanted to make a toy site, so I tried to make my favorite Lego site.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/pdy1207/Lego_Website",
  },
  {
    name: "Node Pharmacy",
    description:
      "A map showing pharmacies in range of your location if the corona gets worse",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/pdy1207/nodeProject",
  },
  {
    name: "Spring board",
    description:
      "Bulletin board project using DB linkage and mybatis/spring boot",
    tags: [
      {
        name: "JAVA",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: spring2,
    source_code_link: "https://github.com/pdy1207/Spring_board",
  },
  {
    name: "Refrigerator App",
    description:
      "It is an app that solves such overconsumption by storing ingredients and allows you to view and manage refrigerator ingredients anytime, anywhere. You can find out the market price by listing what you have been shopping for, and you can adjust the schedule while checking the schedule. Cute illustrations and motion (Lottie) were applied.",
    tags: [
      {
        name: "JAVA",
        color: "pink-text-gradient",
      },
    ],
    image: android,
    source_code_link: "https://github.com/pdy1207/-Refrigerator_App",
  },
  {
    name: "Daily News Dy APP",
    description:
      "There are daily news and popular news like daily photos such as Instagram and Facebook, and you can search and translate. It is an app made for convenient viewing in a busy modern society.",
    tags: [
      {
        name: "JAVA",
        color: "pink-text-gradient",
      },
    ],
    image: news,
    source_code_link: "https://github.com/pdy1207/DYN",
  },
];

export { services, technologies, experiences, testimonials, projects };
