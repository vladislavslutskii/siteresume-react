import React, { useState } from "react";
import { Cross, Github, Mail, Phone, Resume } from "../../Assets/Icons";
import SubMenu from "../../Components/SubMenu";
import styles from "./Aboutme.module.scss";
// @ts-ignore
const Aboutme = ({}) => {
  const [openMenuInfo, setOpenMenuInfo] = useState(true);
  const [openContact, setOpenContact] = useState(true);

  const cards = [
    {
      id: 1,
      text: "bio",
      icon: <Resume width={22} height={22}></Resume>,
    },
    {
      id: 2,
      text: "interests",
      icon: <Resume width={22} height={22}></Resume>,
    },
    {
      id: 3,
      text: "education",
      icon: <Resume width={22} height={22}></Resume>,
    },
  ];
  const contacts = [
    {
      id: 1,
      text: "user@gmail.com",
      icon: <Mail width={22} height={22}></Mail>,
    },
    {
      id: 2,
      text: "+375292688528",
      icon: <Phone width={22} height={22}></Phone>,
    },
  ];
  return (
    <div className={styles.aboutMe}>
      <div className={styles.aboutMe_menu}>
        <SubMenu
          onClick={() => setOpenMenuInfo(!openMenuInfo)}
          openMenu={openMenuInfo}
          label={"personal-info"}
          menuList={cards}
        ></SubMenu>
        <SubMenu
          onClick={() => setOpenContact(!openContact)}
          openMenu={openContact}
          label={"contacts"}
          menuList={contacts}
        ></SubMenu>
      </div>
      <div className={styles.aboutMe_info}>
        <div className={styles.aboutMe_info_tabs}>
          <div className={styles.aboutMe_info_tab}>
            contacts
            <Cross width={12} height={12}></Cross>
          </div>
        </div>
        <div className={styles.aboutMe_info_textWrap}>
          <div className={styles.aboutMe_info_texta}>Hello</div>
          <div className={styles.aboutMe_info_text}>
            I have 5 years of еxperience in web * development lorem ipsum dolor
            sit amet, * consectetur adipiscing elit, sed do eiusmod * tempor
            incididunt ut labore et dolore * magna aliqua. Ut enim ad minim
            veniam, * quis nostrud exercitation ullamco laboris * nisi ut
            aliquip ex ea commodo consequat. * Duis aute irure dolor in
            reprehenderit in * * Duis aute irure dolor in reprehenderit in *
            voluptate velit esse cillum dolore eu fugiat * nulla pariatur.
            Excepteur sint occaecat * officia deserunt mollit anim id est
            laborum. */
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aboutme;
