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
    <div>
      <Header></Header>
      {location.pathname === PathNames.Home ? (
        <StartPage></StartPage>
      ) : (
        <Outlet></Outlet>
      )}
      <Footer></Footer>
    </div>
  );
};

export default PagesWrapper;
