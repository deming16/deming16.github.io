import { ProjectDetail } from "../typings/common";
import caroushareImg from "../img/caroushareproject.png";
import pongImg from "../img/pongproject.jpg";
import modsUniImg from "../img/modsuniproject.png";
import highwayImg from "../img/highwayproject.jpeg";

export const PROJECT_DETAILS: ProjectDetail[] = [
  {
    date: "2019",
    title: "Caroushare",
    thumbnail: caroushareImg,
    techStack: ["HandleBars", "Node/Express", "PostgreSQL"],
    description:
      "A stuff sharing website where people can list items for loan and bid for items to borrow",
    pointers: [
      "Implemented schema and database for the web app",
      "Implemented back end API using Express.js and database queries",
      "Implemented front end UI interaction of the web app",
    ],
  },
  {
    date: "2019",
    title: "Gyroscope Pong",
    thumbnail: pongImg,
    techStack: ["Unity3D", "C#", "JavaScript", "WebRTC"],
    link: "https://devpost.com/software/new-year-pong-arcade?_gl=1*ez94qz*_gcl_au*MTg0MzczOTE2LjE3ODA2NDkyNzI.*_ga*MTExOTc0Njk5OC4xNzgwNjQ5Mjcy*_ga_0YHJK3Y10M*czE3ODA2NDkyNzEkbzEkZzEkdDE3ODA2NDkzMDgkajIzJGwwJGgw",
    pointers: [
      "Made a multiplayer game where players play using a shared screen while using their mobile devices as a controller",
      "Handled the making of the game itself and connecting WebRTC to the WebGL game",
    ],
  },
  {
    date: "2018",
    title: "ModsUni",
    thumbnail: modsUniImg,
    techStack: ["Java", "JUnit", "JavaFX"],
    link: "/modsUni.pdf",
    pointers: [
      "Implemented administration tools to manage the module database",
      "Implemented GUI for the administration tools",
      "Wrote unit and integrated tests for the code base related to the administration tools",
    ],
  },
  {
    date: "2018",
    title: "Highway",
    thumbnail: highwayImg,
    techStack: ["Unity3D", "HTML"],
    link: "/highway.pdf",
    pointers: [
      "Made a 3D endless runner game during summer",
      "Players can choose from different avatars and different levels with unique challenges",
      "Features a leaderboard where top players can compare their scores globally",
    ],
  },
];
