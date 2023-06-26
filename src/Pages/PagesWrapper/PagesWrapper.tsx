import React, { useState } from "react";
import styles from "./PagesWrapper.module.scss";

import classNames from "classnames";
import Header from "../../Components/Header";
import { Outlet, useLocation } from "react-router-dom";
import { PathNames } from "../Router";
import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";
import Footer from "../../Components/Footer";
import StartPage from "../StartPage";

const PagesWrapper = () => {
  const location = useLocation();
  return (
    <div className={styles.app}>
      <div className={styles.app_header}>
        <Header></Header>
      </div>
      <div className={styles.app_main}>
        {location.pathname === PathNames.Home ? (
          <StartPage></StartPage>
        ) : (
          <Outlet></Outlet>
        )}
      </div>
      <div className={styles.app_footer}>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default PagesWrapper;
