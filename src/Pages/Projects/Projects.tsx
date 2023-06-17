import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Card from "../../Components/Card";
import CardList from "../../Components/CardList";
import { PathNames } from "../Router";
import styles from "./Projects.module.scss";

const cards = [
  {
    id: 1,
    numberProject: 1,
    nameCard: "// _ui-animations",
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, culpa?",
    textCard: "Tech stack: HTML, JavaScript, SASS, React, Redux",
    liveDemo: true,
    demoLink: "https://mnttnm.github.io/mohit_portfolio/#/",
  },
  {
    id: 2,
    numberProject: 2,
    nameCard: "// _ui-animations",
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, culpa?",
    textCard: "Tech stack: HTML, JavaScript, SASS, React, Redux",
    liveDemo: true,
    demoLink: "https://mnttnm.github.io/mohit_portfolio/#/",
  },
  {
    id: 3,
    numberProject: 3,
    nameCard: "// _ui-animations",
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, culpa?",
    textCard: "Tech stack: HTML, JavaScript, SASS, React, Redux",
    liveDemo: true,
    demoLink: "https://mnttnm.github.io/mohit_portfolio/#/",
  },
  {
    id: 4,
    numberProject: 4,
    nameCard: "// _ui-animations",
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, culpa?",
    textCard: "Tech stack: HTML, JavaScript, SASS, React, Redux",
    liveDemo: true,
    demoLink: "https://mnttnm.github.io/mohit_portfolio/#/",
  },
  {
    id: 5,
    numberProject: 5,
    nameCard: "// _ui-animations",
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, culpa?",
    textCard: "Tech stack: HTML, JavaScript, SASS, React, Redux",
    liveDemo: true,
    demoLink: "https://mnttnm.github.io/mohit_portfolio/#/",
  },
  {
    id: 6,
    numberProject: 6,
    nameCard: "// _ui-animations",
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, culpa?",
    textCard: "Tech stack: HTML, JavaScript, SASS, React, Redux",
    liveDemo: true,
    demoLink: "https://mnttnm.github.io/mohit_portfolio/#/",
  },
];

const Projects = ({}) => {
  const getHeight1 = document.documentElement.clientHeight - 112;
  const [Height, setHeight] = useState(getHeight1);

  window.addEventListener(
    `resize`,
    (event) => {
      const getHeight = document.documentElement.clientHeight - 112;
      setHeight(getHeight);
    },
    false
  );
  const divStyle = { height: Height };
  return (
    <div className={styles.proj} style={divStyle}>
      <div className={styles.proj_wrap}>
        <CardList cardList={cards}></CardList>
      </div>
    </div>
  );
};

export default Projects;
