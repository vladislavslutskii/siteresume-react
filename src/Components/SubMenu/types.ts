import { MenuListType } from "../../Utils/globalTypes";

export type MenuListProps = {
  menuList: MenuListType;
  onClick: () => void;
  openMenu: boolean;
  label: string;
};
