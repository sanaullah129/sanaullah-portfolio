import { IoLogoGithub, IoLogoInstagram, IoMailSharp } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";

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
  avatarUrl: "/logo512.png",
  skills: [
    "ReactJs",
    ".Net Core",
    "Sql Server",
    "NodeJs",
    "NextJs",
    "Javascript",
    "Typescript",
    "Node.js",
    "C#",
  ],
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
      logoUrl: "/atomic.png",
      start: "August 2023",
      end: null,
      description:
        "Developed and optimized stored procedures and SQL functions for efficient data management in a large-scale product database, making data retrieval 20% faster.  Revamped and implemented interactive web pages aligning with modern design principles; increased user engagement by 40% through seamless data integration using APIs such as Twingly, Twitter, Gmail, etc.   Migrated internal CMS from ASPX to ReactJs and .NET Web API, improving routing and code separation.   Recommended 60% of the React libraries (hot-toasts, router-dom, antd) used and implemented JWT authentication and various web pages.   Integrated Python into a .NET MVC application for phrase identification and sentiment analysis, expanding the system's capabilities by 50% to use python libraries.  Enhanced data visualization using Highcharts to create informative charts for Reports & Dashboards, improving data presentation for stakeholders",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Wilfrid Laurier University",
      href: "https://wlu.ca",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: "",
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: "",
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: "",
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
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
