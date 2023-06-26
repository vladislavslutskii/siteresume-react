import React, { FC } from "react";
import styles from "./Bio.module.scss";
import classNames from "classnames";
import { useLocation } from "react-router";
import { PathNames } from "../../Pages/Router";
import { useDispatch } from "react-redux";
import { textPost } from "../../Redux/reducers/postsreducer";

const Bio = ({ list }: any) => {
  const { helloText, text, name } = list;

  const dispatch = useDispatch();
  dispatch(textPost(name));

  return (
    <div className={styles.aboutMe_info_textWrap}>
      <div className={styles.aboutMe_info_texta}>{helloText}</div>
      <div className={styles.aboutMe_info_text}>
        {/* I have 5 years of еxperience in web * development lorem ipsum dolorsit
        amet, consectetur adipiscing elit, sed do eiusmod * tempor incididunt ut
        labore et dolore * magna aliqua. Ut enim ad minim veniam, * quis nostrud
        exercitation ullamco laboris * nisi ut aliquip ex ea commodo consequat.
        * Duis aute irure dolor in reprehenderit in * * Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat * nulla
        pariatur.Excepteur sint occaecat officia deserunt mollit anim id
        estlaborum */}
        {text}
      </div>
    </div>
  );
};
export default Bio;
