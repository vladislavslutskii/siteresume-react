import React, { FC, useState } from "react";
import { Mail, Phone, TriangleDown, TriangleRight } from "../../Assets/Icons";

import MenuItem from "./MenuItem/MenuItem";
import styles from "./SubMenu.module.scss";
import { MenuListProps } from "./types";

const SubMenu: FC<MenuListProps> = ({ onClick, openMenu, label, menuList }) => {
  return (
    <div className={styles.subMenu}>
      <div className={styles.subMenu_name} onClick={onClick}>
        <div className={styles.subMenu_name_icon}>
          {openMenu ? (
            <TriangleDown width={22} height={22}></TriangleDown>
          ) : (
            <TriangleRight width={22} height={22}></TriangleRight>
          )}
        </div>
        {label}
      </div>
      {openMenu && (
        <div className={styles.subMenu_info}>
          {menuList[0] && <MenuItem items={menuList[0]} />}
          {menuList.map((items, id) => {
            if (id > 0 && id < 10) {
              return <MenuItem items={items} key={items.id} />;
            }
          })}
        </div>
      )}
    </div>
  );
};

export default SubMenu;
