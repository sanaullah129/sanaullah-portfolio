import { IoLogoGithub, IoLogoInstagram, IoMailSharp, IoLogoLinkedin } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";

export const DATA = {
  name: "Sanaullah Ansari",
  initials: "SA",
  url: "",
  location: "Mumabi, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "As a Software Developer, I specialize in ReactJS, .Net Core, and NodeJS frameworks. I am also available for freelance projects, particularly in the MERN stack",
  summary:
    "I am a [2023 B-Tech graduate from Mechanical](/#education) who transitioned to the IT industry through self-study. With 1 year of experience in software development, I have honed my skills in ReactJS, .Net Core MVC & WebApi, SQL Server, MongoDB, JavaScript, TypeScript, and many more technologies. I am dedicated to continuously improving my skills, practicing coding, and building various web applications. Some of my notable projects include [Kazi Studios](#), [Palette Plus](https://palette-plus-app.vercel.app/), & [Techno Trove](https://techno-trove.vercel.app/). I am also open to freelance work.",
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
      GitHub: {
        url: "https://github.com/sanaullah129",
        icon: <IoLogoGithub className="text-xl" />,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/sanaullah129/",
        icon: <IoLogoLinkedin className="text-xl" />,
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
      href: "https://chatcollect.com",
      active: true,
      description:
        "Developed a web application as a paid freelance project for a graphic designer to showcase services, portfolios, and include a contact page. Built an admin dashboard for the designer to upload and manage posters, portfolios, and contact form responses efficiently.",
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
          href: "#",
          icon: <FaGlobe />
        },
      ],
      image: "",
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
          icon: <FaGlobe />
        },
      ],
      image: "/techno-trove.png",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: "",
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: "",
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: "",
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;
