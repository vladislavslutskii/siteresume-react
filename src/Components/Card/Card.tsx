import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Chain, Github } from "../../Assets/Icons";
import styles from "./Card.module.scss";
import { CardPostProps } from "./types";

const Cardstyles = { color: "rgba(96, 123, 150, 1)", marginLeft: "10px" };

const Card: FC<CardPostProps> = ({ post }) => {
  const {
    id,
    numberProject,
    nameCard,
    image,
    title,
    textCard,
    liveDemo,
    demoLink,
  } = post;

  return (
    <div className={styles.card}>
      <div className={styles.card_name}>
        <p>Project {numberProject}</p>
        <p style={Cardstyles}>{nameCard}</p>
      </div>
      <div className={styles.card_wrap}>
        <div className={styles.card_preview}>
          <img className={styles.card_preview_img} src={image} alt="#" />
        </div>
        <div className={styles.card_info}>
          <div className={styles.card_info_textWrap}>
            <p className={styles.card_info_textWrap_textCard}>{title}</p>
            <p className={styles.card_info_textWrap_teachStack}>{textCard}</p>
          </div>
          <div className={styles.card_info_buttonsWrap}>
            {liveDemo === true && (
              <div className={styles.card_info_buttonsWrap_link}>
                <Link
                  className={styles.card_info_buttonsWrap_previewLink}
                  target={"_blank"}
                  to={demoLink}
                >
                  Live Preview
                </Link>
              </div>
            )}
            <div className={styles.card_info_buttonsWrap_link}>
              <Link
                className={styles.card_info_buttonsWrap_viewLink}
                target={"_blank"}
                to={""}
              >
                View Code
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
