import React, { useEffect, useState } from "react";
import styles from "./Projects.module.scss";

import CardList from "../../Components/CardList";
import blog from "../../Utils/Photos/blogologo.png";
import PostModalImg from "./Components/PostModalImg";

const cards = [
  {
    id: 1,
    numberProject: 1,
    nameCard: "// _blogo-logo",
    image: `${blog}`,
    title:
      "This is my thesis, which was well received, I did during my Front-end course.",
    textCard: "Tech stack: HTML, JavaScript, SASS, React, Redux",
    liveDemo: true,
    demoLink: "https://vladislavslutskii.github.io/diplomaproject/",
    vievCode: "https://github.com/vladislavslutskii/diplomaproject",
  },
  {
    id: 2,
    numberProject: 2,
    nameCard: "// _blogo-logo",
    image: `${blog}`,
    title:
      "This is my thesis, which was well received, I did during my Front-end course.",
    textCard: "Tech stack: HTML, JavaScript, SASS, React, Redux",
    liveDemo: true,
    demoLink: "https://vladislavslutskii.github.io/diplomaproject/",
    vievCode: "https://github.com/vladislavslutskii/diplomaproject",
  },
  {
    id: 3,
    numberProject: 3,
    nameCard: "// _blogo-logo",
    image: `${blog}`,
    title:
      "This is my thesis, which was well received, I did during my Front-end course.",
    textCard: "Tech stack: HTML, JavaScript, SASS, React, Redux",
    liveDemo: true,
    demoLink: "https://vladislavslutskii.github.io/diplomaproject/",
    vievCode: "https://github.com/vladislavslutskii/diplomaproject",
  },
];

const Projects = ({}) => {
  return (
    <div className={styles.proj}>
      <PostModalImg></PostModalImg>
      <div className={styles.proj_wrap}>
        <CardList cardList={cards}></CardList>
      </div>
    </div>
  );
};

export default Projects;
