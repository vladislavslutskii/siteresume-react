import React from "react";
import styles from "./StartPage.module.scss";

// @ts-ignore
import Bounce from "react-reveal/Bounce";
import Cub from "../../Components/Cub";

const StartPage = ({}) => {
  return (
    <div className={styles.startPage}>
      <div className={styles.startPage_container}>
        <div className={styles.leftContainer}>
          <div className={styles.leftContainer_textWrap}>
            <p className={styles.leftContainer_textWrap_hello}>Hi all, I am</p>

            <p className={styles.leftContainer_textWrap_myName}>
              Vladislav Slutski
            </p>

            <p className={styles.leftContainer_textWrap_progName}>
              &#62; Front-end developer
            </p>

            <p className={styles.leftContainer_textWrap_hint}>
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
          <Bounce bottom>
            <div className={styles.cub}>
              <Cub></Cub>
            </div>
          </Bounce>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
