import React from "react";
import styles from "./ShowInfo.module.scss";

import { useDispatch } from "react-redux";
import { textPost } from "../../Redux/reducers/postsreducer";

const ShowInfo = ({ data }: any) => {
  const { helloText, text, name } = data;

  const dispatch = useDispatch();
  dispatch(textPost(name));

  return (
    <div className={styles.showInfo}>
      <div className={styles.showInfo_header}>{helloText}</div>
      <div className={styles.showInfo_text}>{text}</div>
    </div>
  );
};
export default ShowInfo;
