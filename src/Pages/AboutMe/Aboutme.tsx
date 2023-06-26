import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Cross, Mail, Phone, Resume } from "../../Assets/Icons";
import Sidebar from "../../Components/Sidebar";

import postsSelectors from "../../Redux/selectors/postsSelectors";
import { PathNames } from "../Router";
import styles from "./Aboutme.module.scss";

const Aboutme = ({ children }: any) => {
  const [openMenuInfo, setOpenMenuInfo] = useState(true);
  const [openContact, setOpenContact] = useState(true);
  const selector = useSelector(postsSelectors.getText);
  const cards = [
    {
      id: 1,
      text: "bio",
      icon: <Resume width={22} height={22}></Resume>,
      mailto: "false",
      navigateTo: PathNames.AboutMe,
    },
    {
      id: 2,
      text: "interests",
      icon: <Resume width={22} height={22}></Resume>,
      mailto: "false",
      navigateTo: PathNames.interests,
    },
    {
      id: 3,
      text: "education",
      icon: <Resume width={22} height={22}></Resume>,
      navigateTo: PathNames.education,
    },
  ];
  const contacts = [
    {
      id: 1,
      text: "vladislavcoc2@gmail.com",
      icon: <Mail width={22} height={22}></Mail>,
      navigateTo: "mailto:vladislavcoc2@gmail.com?subject=Hello&body=Hello",
    },
    {
      id: 2,
      text: "+375292688528",
      icon: <Phone width={22} height={22}></Phone>,
      navigateTo: "tel:+375",
    },
  ];

  return (
    <div className={styles.aboutMe}>
      <div className={styles.mobile_page_title}>_about-me</div>
      <div className={styles.aboutMe_menu}>
        <Sidebar
          onClick={() => setOpenMenuInfo(!openMenuInfo)}
          openMenu={openMenuInfo}
          label={"personal-info"}
          menuList={cards}
        ></Sidebar>
        <Sidebar
          onClick={() => setOpenContact(!openContact)}
          openMenu={openContact}
          label={"contacts"}
          menuList={contacts}
        ></Sidebar>
      </div>
      <div className={styles.aboutMe_info}>
        {selector && (
          <div className={styles.aboutMe_info_tabs}>
            <div className={styles.aboutMe_info_tab}>
              {selector}
              <Cross width={12} height={12}></Cross>
            </div>
          </div>
        )}

        {children}
      </div>
    </div>
  );
};
export default Aboutme;
