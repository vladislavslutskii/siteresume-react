import React, { useEffect, useState } from "react";
import Cub from "../../Components/Cub";

import styles from "./StartPage.module.scss";

const StartPage = ({}) => {
  const getHeight1 = document.documentElement.clientHeight - 112;
  const [Height, setHeight] = useState(getHeight1);

  window.addEventListener(
    `unload`,
    (event) => {
      const getHeight = document.documentElement.clientHeight - 112;
      console.log(getHeight);
      setHeight(getHeight);
    },
    false
  );

  const divStyle = { height: Height };
  return (
    <div className={styles.startPage} style={divStyle}>
      <div className={styles.startPage_container}>
        <div className={styles.leftContainer}>
          <div className={styles.leftContainer_textWrap}>
            <p className={styles.leftContainer_textWrap_hello}>Hi all, I am</p>
            <p className={styles.leftContainer_textWrap_MyName}>
              Vladislav Slutski
            </p>
            <p className={styles.leftContainer_textWrap_progName}>
              &#62; Front-end developer
            </p>

            <p className={styles.leftContainer_textWrap_prim}>
              // This cube can be rotated with a mouse click
            </p>
            <a
              target="_black"
              href="https://drive.google.com/file/d/1OgKoC7XKnoEiPAbdlwcm_5fl1L_zYMzh/view?usp=sharing"
              download
              className={styles.leftContainer_textWrap_downloadCv}
            >
              Download CV
            </a>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.rightContainer_graph}></div>
          <div className={styles.rightContainer_graph2}></div>

          <Cub></Cub>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
