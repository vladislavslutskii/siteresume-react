import React from "react";
import styles from "./PagesWrapper.module.scss";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import StartPage from "../StartPage";
import { Outlet, useLocation } from "react-router-dom";
import { PathNames } from "../Router";

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
