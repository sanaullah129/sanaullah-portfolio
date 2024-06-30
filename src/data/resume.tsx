import { IoLogoGithub, IoLogoInstagram, IoMailSharp, IoLogoLinkedin } from "react-icons/io5";
import { FaGlobe, FaCodeBranch } from "react-icons/fa";


export const DATA = {
  name: "Sanaullah Ansari",
  initials: "SA",
  url: "",
  location: "Mumabi, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "As a Software Developer, I specialize in ReactJS, .Net Core, and NodeJS frameworks. I am also available for freelance projects, particularly in the MERN stack",
  summary:
    "I am a [2023 B-Tech graduate from Mechanical](/#education) who transitioned to the IT industry through self-study. With 1 year of experience in software development, I have honed my skills in ReactJS, .Net Core MVC & WebApi, SQL Server, MongoDB, JavaScript, TypeScript, and many more technologies. I am dedicated to continuously improving my skills, practicing coding, and building various web applications. Some of my notable projects include [Kazi Studios](https://kazi-studios.vercel.app/), [Techno Trove](https://techno-trove.vercel.app/), & [Palette Plus](https://palette-plus-app.vercel.app/). I am also open to freelance work.",
  avatarUrl: "/me.jpg",
  skills: {
    frameworks: ["React JS", "Node JS", ".NET Core MVC", ".NET Core Web Api", "Next JS"],
    languages: ["JavaScript", "TypeScript", "C#", "Java"],
    databases: ["SQL Server", "MongoDB"],
    toolsLibraries: ["Prisma ORM", "Jquery", "Antd", 'TailwindCSS', "Bootstrap", "GIT", "TFS"]
  },
  contact: {
    email: "sanaullah129@gamil.com",
    modbile: "+919320516558",
    social: {
      LinkedIn: {
        url: "https://www.linkedin.com/in/sanaullah129/",
        icon: <IoLogoLinkedin className="text-xl" />,
      },
      GitHub: {
        url: "https://github.com/sanaullah129",
        icon: <IoLogoGithub className="text-xl" />,
      },
      Instagram: {
        url: "https://www.instagram.com/sanaullah_129_?igsh=MW00Z3Bjdm45b2NxdQ==",
        icon: <IoLogoInstagram className="text-xl" />,
      },
      EMail: {
        url: "mailto:asanaullah129@gmail.com",
        icon: <IoMailSharp className="text-xl" />,
      },
    },
  },
  work: [
    {
      company: "Prudence Analytics & Software Solutions Pvt. Ltd.",
      href: "https://prudencesoftware.com/",
      badges: [],
      location: "Mumbai",
      title: "Junior Software Developer",
      logoUrl: "/prudence.png",
      start: "August 2023",
      end: null,
      description:
        "Developed and optimized stored procedures and SQL functions for efficient data management in a large-scale product database, making data retrieval 20% faster. Revamped and implemented interactive web pages aligning with modern design principles; increased user engagement by 40% through seamless data integration using APIs such as Twingly, Twitter, Gmail, etc. Migrated internal CMS from ASPX to ReactJs and .NET Web API, improving routing and code separation. Recommended 60% of the React libraries (hot-toasts, router-dom, antd) used and implemented JWT authentication and various web pages. Integrated Python into a .NET MVC application for phrase identification and sentiment analysis, expanding the system's capabilities by 50% to use python libraries.  Enhanced data visualization using Highcharts to create informative charts for Reports & Dashboards, improving data presentation for stakeholders",
    },
    {
      company: "Femino Footwear",
      href: "https://feminofootwear.in/",
      badges: [],
      location: "Mumbai",
      title: "Software Engineer Intern",
      logoUrl: "/femino.png",
      start: "June 2023",
      end: "July 2023",
      description:
        "Independently developed a WordPress powered E-commerce platform, delivering a seamless shopping experience. Utilized Puppeteer to automate data extraction for simplified insights using web scraping. The result was an excel file with 98% accurate scraped data",
    },
  ],
  education: [
    {
      school: "Rajiv Gandhi Institute of Technology",
      href: "https://www.mctrgit.ac.in/",
      degree: "Bachelors in Mechanical Engineering",
      location: "Mumbai",
      logoUrl: "/rajiv-gandhi.webp",
      grade: "9.48 CGPA",
      start: "2020",
      end: "2023",
    },
    {
      school: "MH Saboo Siddik Polytechnic",
      href: "https://mhssp.ac.in/",
      degree: "Diploma in Mechanical Engineering",
      location: "Mumbai",
      logoUrl: "/saboo-siddik.png",
      grade: "93.59%",
      start: "2017",
      end: "2020",
    },
    {
      school: "Fidai Diamond Jubilee High School",
      href: "http://www.fidaiacademy.com/",
      degree: "Secondary School Certificate (SSC)",
      location: "Mumbai",
      logoUrl: "/fidai.png",
      grade: "89.20%",
      start: "2007",
      end: "2017",
    },
  ],
  projects: [
    {
      title: "Kazi Studios",
      href: "https://kazi-studios.vercel.app/",
      active: true,
      description:
        "Developed a comprehensive web application as a paid freelance project for a graphic designer. The application was designed to showcase the designer's services and portfolios while also featuring a contact page for potential clients to get in touch. In addition to the front-end user experience, I built an intuitive admin dashboard for the designer. This dashboard allows the designer to easily upload and manage posters and portfolios, as well as efficiently handle and respond to contact form submissions.",
      technologies: [
        "ReactJS",
        "NodeJs",
        "MongoDB",
        "ExpressJS",
        "Antd CSS",
        "Tailwind CSS",
        "Typescript",
        "HTML5/CSS3",
      ],
      links: [
        {
          type: "Website",
          href: "https://kazi-studios.vercel.app/",
          icon: <FaGlobe />
        },
      ],
      image: "/kazi-studio.png",
      video: "",
    },
    {
      title: "Techno Trove",
      href: "https://magicui.design",
      active: true,
      description:
        "Developed a secure e-commerce website featuring robust user authentication and encryption techniques, ensuring data integrity and user privacy. Integrated Stripe API for seamless payments and Google login for enhanced user convenience and security. Designed an intuitive admin dashboard with graphical analytics for order management, delivery tracking, and product inventory. Leveraged data visualization to provide actionable insights for optimizing business operations.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDb",
        "Prisma ORM",
        "TailwindCSS",
        "Stripe",
        "HTML5/CSS3",
      ],
      links: [
        {
          type: "Website",
          href: "https://techno-trove.vercel.app/",
          icon: <FaGlobe />
        },
        {
          type: "Source",
          href: "https://github.com/sanaullah129/techno-trove",
          icon: <FaCodeBranch />
        },
      ],
      image: "/techno-trove.png",
    },
    {
      title: "Palette Plus",
      href: "https://palette-plus-app.vercel.app/",
      active: true,
      description:
        "Developed a full-fledged frontend application designed to explore and extract information like HEX, RGB, and RGBA color codes from various palettes. Users can also craft custom color palettes by selecting their favorite colors and save these palettes locally for future use. The application serves as a practical exercise to advance my skills in React development, providing a hands-on experience in state management, local storage usage, and overall frontend architecture",
      technologies: [
        "ReactJs", 
        "JavaScript", 
        "MaterialUi", 
        "HTML5/CSS3"
      ],
      links: [
        {
          type: "Website",
          href: "https://palette-plus-app.vercel.app/",
          icon: <FaGlobe />
        },
        {
          type: "Source",
          href: "https://github.com/sanaullah129/palette-plus",
          icon: <FaCodeBranch />
        },
      ],
      image: "/palette-plus.png",
      video: "",
    },
    {
      title: "Contact Manager",
      href: "#",
      active: true,
      description:
        "Developed a comprehensive backend project using NodeJS that handles user login and registration, and performs CRUD operations for managing contact details. The project ensures secure authentication and efficient data management, demonstrating my backend development skills.",
      technologies: [
        "Node Js",
        "Express Js",
        "JavaScript",
        "Bcrypt",
        "JWT Authentication",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sanaullah129/contact-manager",
          icon: <FaCodeBranch />
        },
      ],
      image: "/node-js.png",
      video: "",
    },
    {
      title: "News Alert App",
      href: "#",
      active: true,
      description:
        "Developed a web application with a user-friendly interface to display the latest news, categorized into sections such as sports, entertainment, and celebrities. The application features real-time updates and a responsive design, ensuring an optimal user experience on both desktop and mobile devices.",
      technologies: [
        "React Js",
        "Bootstrap",
        "News Api",
        "HTML5/CSS3",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sanaullah129/News-Alert",
          icon: <FaCodeBranch />
        },
      ],
      image: "/news-app.png",
      video:"",
    },
    {
      title: "Text Utility",
      href: "https://sanaullah129.github.io/Text-Manipulator/",
      active: true,
      description:
        "My very first React App which I made while learning ReactJs, this application is very simple ans sweet which allows you to manipulate the text. You can do lower, upper, etc. and also toggle dark and light mode with this application",
      technologies: [
        "Node Js",
        "Express Js",
        "JavaScript",
        "Bcrypt",
        "JWT Authentication",
      ],
      links: [
        {
          type: "Website",
          href: "https://sanaullah129.github.io/Text-Manipulator/",
          icon: <FaGlobe />
        },
        {
          type: "Source",
          href: "https://github.com/sanaullah129/Text-Manipulator",
          icon: <FaCodeBranch />
        },
      ],
      image: "/text-utility.png",
      video: "",
    },
  ],
} as const;
