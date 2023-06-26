import React, { FC } from "react";
import { TriangleDown, TriangleRight } from "../../Assets/Icons";

import MenuItem from "./MenuItem/MenuItem";
import styles from "./Sidebar.module.scss";

import { CSSTransition } from "react-transition-group";
import { SideBarProps } from "./types";

const Sidebar: FC<SideBarProps> = ({ onClick, openMenu, label, menuList }) => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBar_name} onClick={onClick}>
        <div className={styles.sideBar_name_icon}>
          {openMenu ? (
            <TriangleDown width={22} height={22}></TriangleDown>
          ) : (
            <TriangleRight width={22} height={22}></TriangleRight>
          )}
        </div>
        {label}
      </div>
      <CSSTransition
        in={openMenu}
        timeout={200}
        classNames="fade"
        unmountOnExit
      >
        <div className={styles.sideBar_info}>
          {menuList[0] && <MenuItem items={menuList[0]} />}
          {menuList.map((items, id) => {
            if (id > 0 && id < 10) {
              return <MenuItem items={items} key={items.id} />;
            }
          })}
        </div>
      </CSSTransition>
    </div>
  );
};

export default Sidebar;
