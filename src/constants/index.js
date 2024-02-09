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
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ecommerce,
  hotel,
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
    title: "MERN Stack Developer",
    icon: web,
  },
  {
    title: "React js",
    icon: backend,
  },
  {
    title: "Next js",
    icon: backend,
  },
  {
    title: "Tailwind Css",
    icon: backend,
  },
  {
    title: "React Native ",
    icon: mobile,
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
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "ArchieSoft Technology Pvt Ltd",
    company_name: "Front-End Developer ",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2022 -  Present",
    points: [
      "Developing and maintaining web applications using Html Css Tailwind Css React.js and other related technologies.",
      "Code Quality and Performance: Writing clean, efficient, and maintainable code following best practices and coding standards. Optimizing code and assets for performance to ensure fast loading times and smooth interactions",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Next Nepal Pvt .Ltd",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "April 2022 - July 2022",
    points: [
      "Developing User Interfaces: Designing and implementing user interfaces using HTML, CSS, and JavaScript.",
      "Responsive Design: Ensuring that websites or web applications are responsive and compatible with various devices and screen sizes",
    ],
  },
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
    name: "MERN E-Commerce - Admin Panel, Redux Toolkit",
    description: [
      {
        name: "- Basic E-commerce Features- Product lists, Product Details, Cart, Checkout ",
      },
      {
        name: "- Admin Panel - Add/Edit Orders. Add/Edit Products",
      },
      {
        name: "- Product searching",
      },
      {
        name: "- Product Add to wishlist",
      },
      {
        name: "- Sorting, Filtering, and Pagination queries using Mongoose",
      },
     
      {
        name: "- Authentication with Passport JS strategies",
      },
      {
        name: "- Order Emails, Reset Password Emails",
      },
      {
        name: "-  User Profile and user orders",
      },
    ],

    tags: [
      {
        name: "React 18 with Tailwind CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Redux Toolkit with Async Thunk",
        color: "pink-text-gradient",
      },
      {
        name: " MongoDB for Database",
        color: "green-text-gradient",
      },

      {
        name: "REST API using Express",
        color: "lightblue-gradient",
      },
      {
        name: "Authentication using Passport JS",
        color: "red-text-gradient",
      },
      {
        name: "API Authentication using Passport JWT",
        color: "blue-text-gradient",
      },
      {
        name: "Email using Nodemailer - using GMail SMTP system",
        color: "lightblue-gradient1",
      },
      {
        name: "React Router v6",
        color: "lightblue-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/sachinkumar9849/mearn_ecommerce",
  },
  {
    name: "Hotel Royal Image",
    description: [
      {
        name: "- Room search features have been added. ",
      }
    ],

    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap 4 for responsive design",
        color: "pink-text-gradient",
      },
      {
        name: "Css",
        color: "lightblue-gradient1",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Jquery",
        color: "green-text-gradient",
      },

      
    ],
    image: hotel,
    source_code_link: "https://github.com/",
    project_link:"https://hotelroyalimage.com.np/"
  }
];

export { services, technologies, experiences, testimonials, projects };
