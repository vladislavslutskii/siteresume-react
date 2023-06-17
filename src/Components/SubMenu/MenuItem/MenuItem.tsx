import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./MenuItem.module.scss";
import { MenuItemProps } from "./types";

const MenuItem: FC<MenuItemProps> = ({ items }) => {
  const { text, icon } = items;
  return (
    <div className={styles.menuItem}>
      <div className={styles.menuItem_icon}>{icon}</div>
      <a>{text}</a>
    </div>
  );
};

export default MenuItem;
