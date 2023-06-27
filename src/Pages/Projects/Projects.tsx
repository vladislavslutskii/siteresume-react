import React from "react";
import styles from "./Projects.module.scss";

import CardList from "../../Components/CardList";
import PostModalImg from "./Components/PostModalImg";
import blog from "../../Assets/Photos/blogologo.png";
import resume from "../../Assets/Photos/resume.png";
import blogofolio from "../../Assets/Photos/blogofolio.png";
import todo from "../../Assets/Photos/todo.png";
import axit from "../../Assets/Photos/axit.png";

const cards = [
  {
    id: 1,
    numberProject: 1,
    nameCard: "// _blogo-logo",
    image: `${blog}`,
    title:
      "This is my thesis, which was well received, I did during my Front-end course.",
    textCard: "Tech stack: HTML, JavaScript, SASS, React, Redux, Firebase",
    liveDemo: true,
    demoLink: "https://vladislavslutskii.github.io/diplomaproject/",
    vievCode: "https://github.com/vladislavslutskii/diplomaproject",
  },
  {
    id: 2,
    numberProject: 2,
    nameCard: "// _resume-website",
    image: `${resume}`,
    title: "This is my website - a resume that I did after graduation",
    textCard: "Tech stack: HTML, JavaScript, SASS, React, Redux",
    liveDemo: false,
    demoLink: "",
    vievCode: "https://github.com/vladislavslutskii/siteresume-react",
  },
  {
    id: 3,
    numberProject: 3,
    nameCard: "// _blogofolio",
    image: `${blogofolio}`,
    title: "This is my study project that I did while studying",
    textCard: "Tech stack: HTML, JavaScript, SASS, React, Redux",
    liveDemo: true,
    demoLink: "https://vladislavslutskii.github.io/fe-28-reactapp/",
    vievCode: "https://github.com/vladislavslutskii/fe-28-reactapp",
  },
  {
    id: 4,
    numberProject: 4,
    nameCard: "// _todo",
    image: `${todo}`,
    title:
      "This is my little Todo-List project, I made it for myself when I was learning JavaScript",
    textCard: "Tech stack: HTML, JavaScript, CSS",
    liveDemo: true,
    demoLink: "https://vladislavslutskii.github.io/todo/",
    vievCode: "https://github.com/vladislavslutskii/todo",
  },
  {
    id: 5,
    numberProject: 5,
    nameCard: "// _axitproject",
    image: `${axit}`,
    title:
      "This is my little project when I was learning HTML. You could say it's  <First Steps> in learning Front End",
    textCard: "Tech stack: HTML, CSS",
    liveDemo: true,
    demoLink:
      "https://vladislavslutskii.github.io/FE28-ProjectFiles-Vladislav-SLutski/",
    vievCode:
      "https://github.com/vladislavslutskii/FE28-ProjectFiles-Vladislav-SLutski",
  },
];

const Projects = ({}) => {
  return (
    <div className={styles.projects}>
      <PostModalImg></PostModalImg>
      <div className={styles.projects_wrap}>
        <CardList cardList={cards}></CardList>
      </div>
    </div>
  );
};

export default Projects;
