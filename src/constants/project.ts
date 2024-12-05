import { ProjectDetail } from "../typings/common";
import portfolioImg from "../img/portfolioproject.png";
import caroushareImg from "../img/caroushareproject.png";
import pongImg from "../img/pongproject.jpg";
import modsUniImg from "../img/modsuniproject.png";
import highwayImg from "../img/highwayproject.jpeg";
import videoJoinerImg from "../img/joinerproject.png";

export const PROJECT_DETAILS: ProjectDetail[] = [
  {
    date: "Jul 2019 - Aug 2019",
    title: "Portfolio",
    thumbnail: portfolioImg,
    description: "A revamp of the original bootstrap portfolio site that I had",
    techStack: ["Sass", "JavaScript"],
    pointers: [
      "Used BEM CSS architecture with SASS 7 in 1 structure",
      "Used modern CSS properties like cubic-bezier to familarise with them",
    ],
  },
  {
    date: "Mar 2019 - Apr 2019",
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
    date: "Hack & Roll 2019",
    title: "Gyroscope Pong",
    thumbnail: pongImg,
    techStack: ["Unity3D", "JavaScript", "WebRTC"],
    pointers: [
      "Made a multiplayer game where players play using a shared screen while using their mobile devices as a controller",
      "Handled the making of the game itself and connecting WebRTC to the WebGL game",
    ],
  },
  {
    date: "Aug 2019 - Nov 2018",
    title: "ModsUni",
    thumbnail: modsUniImg,
    techStack: ["Java", "JUnit", "JavaFX"],
    pointers: [
      "Implemented administration tools to manage the module database",
      "Implemented GUI for the administration tools",
      "Wrote unit and integrated tests for the code base related to the administration tools",
    ],
  },
  {
    date: "May 2018 - Jul 2018",
    title: "Highway",
    thumbnail: highwayImg,
    techStack: ["Unity3D", "HTML"],
    pointers: [
      "Made a 3D endless runner game during summer",
      "Players can choose from different avatars and different levels with unique challenges",
      "Features a leaderboard where top players can compare their scores globally",
    ],
  },
  {
    date: "Dec 2017",
    title: "Video Joiner",
    thumbnail: videoJoinerImg,
    techStack: ["Bash Script", "ffmpeg"],
    pointers: [
      "Made a mini bash script to automatically join and convert files downloaded from bilibili",
      "Initiated the project to practise bash scripting",
    ],
  },
];
