import classnames from "classnames";
import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./MenuItem.module.scss";
import { ItemProps } from "./types";

const MenuItem: FC<ItemProps> = ({ items }) => {
  const { text, icon, navigateTo } = items;
  const location = useLocation();
  return (
    <div className={styles.menuItem}>
      <div className={styles.menuItem_icon}>{icon}</div>

      <Link
        to={`${navigateTo}`}
        className={classnames(styles.a, {
          [styles.activeLink]: location.pathname === navigateTo,
        })}
      >
        {text}
      </Link>
    </div>
  );
};

export default MenuItem;
