import React, { FC } from "react";
import styles from "./Menu.module.scss";

import { Link } from "react-router-dom";
import { PathNames } from "../../Pages/Router";
import { MenuProps } from "./types";

const Menu: FC<MenuProps> = ({ onClick }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu_items}>
        <Link className={styles.menu_items_link} onClick={onClick} to={".open"}>
          _hello
        </Link>
      </div>
      <div className={styles.menu_items}>
        <Link
          className={styles.menu_items_link}
          onClick={onClick}
          to={PathNames.AboutMe}
        >
          _about-me
        </Link>
      </div>
      <div className={styles.menu_items}>
        <Link
          className={styles.menu_items_link}
          onClick={onClick}
          to={PathNames.Projects}
        >
          _projects
        </Link>
      </div>
      <div className={styles.menu_items}>
        <Link
          className={styles.menu_items_link}
          onClick={onClick}
          to={PathNames.ContactMe}
        >
          _contact-me
        </Link>
      </div>
    </div>
  );
};

export default Menu;
