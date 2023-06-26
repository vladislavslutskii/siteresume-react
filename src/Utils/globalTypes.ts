import { ReactNode } from "react";
import { PathNames } from "../Pages/Router";

export type CardPostType = {
  id: number;
  numberProject: number;
  nameCard: string;
  image: string;
  title: string;
  textCard: string;
  liveDemo: boolean;
  demoLink: string;
  vievCode: string;
};
export type CardListType = Array<CardPostType>;

export type ItemType = {
  id: number;
  text: string | ReactNode;
  icon: ReactNode;
  navigateTo?: PathNames | any;
};

export type SideBarListType = Array<ItemType>;

export type MenuItemType = {
  text: string | ReactNode;
  header: string;
  link?: PathNames | any;
};

export type MenuListType = Array<MenuItemType>;
