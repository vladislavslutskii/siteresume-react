import React, { FC, useState } from "react";
import styles from "./CardList.module.scss";

import classnames from "classnames";
import Card from "../Card";
import { CardListProps } from "./types";

const CardsList: FC<CardListProps> = ({ cardList }) => {
  return (
    <div className={classnames(styles.listWrap, {})}>
      {cardList[0] && <Card post={cardList[0]} />}

      {cardList.map((post, id) => {
        if (id > 0 && id < 10) {
          return <Card post={post} key={post.id} />;
        }
      })}
    </div>
  );
};

export default CardsList;
