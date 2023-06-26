import { SideBarListType } from "../../Utils/globalTypes";

export type SideBarProps = {
  menuList: SideBarListType;
  onClick: any;
  openMenu: boolean;
  label: string;
};
