import React from "react";
import styles from "./Footer.module.scss";

import { Link } from "react-router-dom";
import { Github, Instagram, LinkedIn } from "../../Assets/Icons";
import { PathNames } from "../../Pages/Router";

const Footer = ({}) => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_links}>
        <div className={styles.footer_links_text}>Find me in:</div>
        <Link
          className={styles.footer_links_linkedIn}
          to={PathNames.LinkedIn}
          target="_blank"
        >
          <LinkedIn width={24} height={24}></LinkedIn>
        </Link>
        <Link
          to={PathNames.Instagram}
          target="_blank"
          className={styles.footer_links_instagram}
        >
          <Instagram width={24} height={24}></Instagram>
        </Link>

        <Link
          className={styles.footer_links_gitHub}
          to={PathNames.Github}
          target="_blank"
        >
          vladislavslutskii
          <div className={styles.footer_links_gitHub_icon}>
            <Github width={24} height={24}></Github>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
