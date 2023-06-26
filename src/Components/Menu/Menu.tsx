import React, { FC } from "react";
import { Link } from "react-router-dom";
import { PathNames } from "../../Pages/Router";
import styles from "./Menu.module.scss";
import { MenuProps } from "./types";

const Menu: FC<MenuProps> = ({ onClick, openMenu }) => {
  return (
    <div className={styles.listMenu}>
      <div className={styles.listMenu_items}>
        <Link
          className={styles.listMenu_items_link}
          onClick={onClick}
          to={".open"}
        >
          _hello
        </Link>
      </div>
      <div className={styles.listMenu_items}>
        <Link
          className={styles.listMenu_items_link}
          onClick={onClick}
          to={PathNames.AboutMe}
        >
          _about-me
        </Link>
      </div>
      <div className={styles.listMenu_items}>
        <Link
          className={styles.listMenu_items_link}
          onClick={onClick}
          to={PathNames.Projects}
        >
          _projects
        </Link>
      </div>
      <div className={styles.listMenu_items}>
        <Link
          className={styles.listMenu_items_link}
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
