import React from "react";
import { NavLink } from "react-router-dom";
import { useThemeContext } from "../../Context/ThemeContext/Context";
import { useLocation } from "react-router-dom";

import styles from "./Header.module.scss";
import { PathNames } from "../../Pages/Router";

const Header = ({}) => {
  const { theme } = useThemeContext();
  return (
    <div className={styles.header}>
      <div className={styles.header_Logo}>
        <p className={styles.header_Logo_Text}>Portfolio</p>
      </div>
      <div className={styles.headerLink_Hello}>
        <NavLink className={styles.headerLink_NavLink} to={".open"}>
          Hello
        </NavLink>
      </div>
      <div className={styles.headerLink_About}>
        <NavLink className={styles.headerLink_NavLink} to={PathNames.AboutMe}>
          About Me
        </NavLink>
      </div>
      <div className={styles.headerLink_Projects}>
        <NavLink className={styles.headerLink_NavLink} to={PathNames.Projects}>
          Projects
        </NavLink>
      </div>
      <div className={styles.headerLink_Contact}>
        <NavLink className={styles.headerLink_NavLink} to={PathNames.ContactMe}>
          Contact Me
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
