import { ReactNode } from "react";

export type CardPostType = {
  id: number;
  numberProject: number;
  nameCard: string;
  image: string;
  title: string;
  textCard: string;
  liveDemo: boolean;
  demoLink: string;
};
export type CardListType = Array<CardPostType>;

export type MenuItemType = {
  id: number;
  text: string;
  icon: ReactNode;
};

export type MenuListType = Array<MenuItemType>;
