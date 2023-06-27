import React, { useState } from "react";
import styles from "./Header.module.scss";

import classnames from "classnames";
import Menu from "../Menu";
import { NavLink, useLocation } from "react-router-dom";
import { PathNames } from "../../Pages/Router";
import { Burger } from "../../Assets/Icons";
import { BurgerOpen } from "../../Assets/Icons/BurgerOpen";

const Header = ({}) => {
  const [menuActive, setMenuActive] = useState(true);
  const location = useLocation();

  return (
    <nav className={styles.header}>
      <div className={styles.header_logo}>
        <NavLink className={classnames(styles.header_logo_text)} to={".open"}>
          Portfolio
        </NavLink>
      </div>

      <ul className={styles.headerLink}>
        <li className={styles.headerLink_hello}>
          <NavLink
            className={classnames(styles.headerLink_navLink, {
              [styles.activeLink]: location.pathname === PathNames.Home,
            })}
            to={".open"}
          >
            _hello
          </NavLink>
        </li>
        <li className={styles.headerLink_about}>
          <NavLink
            className={classnames(styles.headerLink_navLink, {
              [styles.activeLink]: location.pathname === PathNames.AboutMe,
              [styles.activeLink1]: location.pathname === PathNames.Interests,
              [styles.activeLink2]: location.pathname === PathNames.Education,
            })}
            to={PathNames.AboutMe}
          >
            _about-me
          </NavLink>
        </li>
        <li className={styles.headerLink_projects}>
          <NavLink
            className={classnames(styles.headerLink_navLink, {
              [styles.activeLink]: location.pathname === PathNames.Projects,
            })}
            to={PathNames.Projects}
          >
            _projects
          </NavLink>
        </li>
        <li className={styles.headerLink_contact}>
          <NavLink
            className={classnames(styles.headerLink_navLink, {
              [styles.activeLink]: location.pathname === PathNames.ContactMe,
            })}
            to={PathNames.ContactMe}
          >
            _contact-me
          </NavLink>
        </li>
        <li
          className={styles.headerLink_burger}
          onClick={() => setMenuActive(!menuActive)}
        >
          <div className={styles.headerLink_burgerButton}>
            {!menuActive ? (
              <BurgerOpen width={30} height={30}></BurgerOpen>
            ) : (
              <Burger width={30} height={30}></Burger>
            )}
          </div>
        </li>
      </ul>
      {!menuActive ? (
        <Menu
          onClick={() => setMenuActive(!menuActive)}
          openMenu={menuActive}
        ></Menu>
      ) : null}
    </nav>
  );
};

export default Header;
