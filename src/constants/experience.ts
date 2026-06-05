import nodeflairAdrianTestimonial from "../img/nodeflair-adrian-testimonial.png";
import nodeflairSeanTestimonial from "../img/nodeflair-sean-testimonial.png";
import { ExperienceDetail } from "../typings/common";

export const EXPERIENCE_DETAILS: ExperienceDetail[] = [
  {
    title: "Senior Software Engineer",
    company: "TikTok",
    location: "🇸🇬 Singapore",
    description:
      "I worked on TikTok Live’s Data Platform and led the Widgets SDK and Data UI library direction",
    date: "Jul 2024 – Present",
    pointers: [
      "Built Widgets SDK and marketplace reducing development cost by 300% for 5 teams with React/ECharts",
      "Built data model pipeline builder interface used for >1k widget models so far with React/ReactFlow",
      "Built a LLM powered conversational analytics tool reducing development cost by 20% using React and SSE",
      "Built SDKs snapshot regression test suite and monitoring to improve stability with Jest, RTL, Rstest and Slardar",
      "Minimized hand-coding for 7 engineers by promoting Claude Code agentic workflows, skills, and SDD workflow",
      "Developed a Golang service automating widgets metadata population into ElasticSearch store enabling LLM RAG",
      "Extracted and transformed data from underlying ClickHouse stores for use in widget service with SQL",
      "Upskilled 25+ engineers through quarterly sharings on platform architecture, AI coding tools and internal tools",
    ],
    techStack: ["TypeScript", "React", "Node/Express", "Jest", "Golang", "SQL"],
  },
  {
    title: "Software Engineer",
    company: "TikTok",
    location: "🇸🇬 Singapore",
    description:
      "I worked on TikTok Live's AML Platform and frontend libraries",
    date: "Aug 2022 – Jun 2024",
    pointers: [
      "Built core frontend components and promoted its usage to >100 engineers across multiple teams and products",
      "Built API services that allow FE components to easily manage Lark credentials and documents using Node/Express",
      "Built AML platform functions that helped alert financial investigators on suspicious behaviours (>100 monthly)",
      "Achieved good stability and response rate on AML Platform by improving code culture and application monitoring",
      "Promoted engineers’ growth by sharing and publishing wikis and articles on various projects and technologies",
    ],
    techStack: ["TypeScript", "React", "Node/Express"],
  },
  {
    title: "Software Engineer",
    company: "Govtech DSAID",
    location: "🇸🇬 Singapore",
    description: "I worked on the Trusted Centre for Sensor Data platform",
    date: "Jun 2021 – Jul 2022",
    pointers: [
      "Built a map visualisation platform that improved agencies ability to study trends and plan policies using MapboxGL",
      "Improved data requests workflow by implementing Team and Recurrent Requests using React/Redux and Flask",
      "Reduced regression bugs by achieving healthy frontend integration and end-to-end test coverage using Cypress",
      "Introduced parallelisation to frontend test suite using Cypress director service reducing CI run time by 100%",
      "Migrated UI library and CSS-in-JS solution which improved developer experience and rendering performance",
      "Shared on various software engineering related topics during division level engineering sharing",
    ],
    techStack: ["TypeScript", "React", "Flask", "Docker", "Azure"],
  },
  {
    title: "Software Engineer",
    company: "Edison",
    location: "🇺🇸 San Francisco Bay Area",
    description:
      "I worked on Edison Mail macOS(Electron) app used by 1.5 million users worldwide",
    date: "Jan 2020 – Dec 2020",
    pointers: [
      "Improved users (30%) scheduling workflow by building calendar app with offline support using React and SQLite",
      "Improved responsiveness (>1sec) by implementing asynchronous calendar operations using Redux Observables",
      "Built support for sync with users’ personal calendar provider using Caldav and Google Calendar API",
    ],
    techStack: ["TypeScript", "React", "SQLite", "Electron"],
  },
  {
    title: "Founding Software Engineer",
    company: "NodeFlair",
    location: "🇸🇬 Singapore",
    description:
      "I scaled the engineering team from 0 to a reliable team of 7 in a single quarter serving all of the company's engineering needs",
    date: "May 2019 – Jan 2020",
    pointers: [
      "Increased match-to-hire conversion rate (20%) by overhauling talent dashboard service using Rails and PostgreSQL",
      "Improved recruiter-talent interaction experience by implementing real-time chat using Rails Action Cable",
      "Reduced AWS spendings by 50% by migrating from managed service (Beanstalk) to serverless service (Lambda)",
      "Built and led a team of 7 engineers to revamp the users’ onboarding flow and page designs increased user sign ups by 100%",
      "Defined engineering principles, hiring process and its purpose in the company that serves as the foundation for the company's engineering culture",
    ],
    techStack: [
      "Javascript",
      "React",
      "Ruby on Rails",
      "PostgreSQL",
      "AWS ElasticBeanstalk",
      "AWS RDS",
    ],
    bottomImages: [
      {
        src: nodeflairAdrianTestimonial,
        alt: "Recommendation from Adrian Goh Jun Wei about Deming's leadership and engineering judgment at NodeFlair",
      },
      {
        src: nodeflairSeanTestimonial,
        alt: "Recommendation from Sean Cheng about Deming's contributions and patience while working together at NodeFlair",
      },
    ],
    link: "https://nodeflair.com/",
    linkText: "code() at where you love",
  },
];
