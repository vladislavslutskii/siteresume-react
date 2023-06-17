import React from "react";
import { Link } from "react-router-dom";
import { Github, Instagram, LinkedIn } from "../../Assets/Icons";
import { PathNames } from "../../Pages/Router";
import styles from "./Footer.module.scss";

const Footer = ({}) => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_Links}>
        <div className={styles.footer_Links_Text}>Find me in:</div>
        <Link
          className={styles.footer_Links_LinkedIn}
          to={PathNames.LinkedIn}
          target="_blank"
        >
          <LinkedIn width={24} height={24}></LinkedIn>
        </Link>
        <Link
          to={PathNames.Instagram}
          target="_blank"
          className={styles.footer_Links_Instagram}
        >
          <Instagram width={24} height={24}></Instagram>
        </Link>

        <Link
          className={styles.footer_Links_GitHub}
          to={PathNames.Github}
          target="_blank"
        >
          vladislavslutskii
          <div className={styles.footer_Links_GitHub_Icon}>
            <Github width={24} height={24}></Github>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
