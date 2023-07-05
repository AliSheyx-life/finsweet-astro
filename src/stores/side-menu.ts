import { defineStore } from "pinia";
import { LucideIconType } from "@/types/GlobalTypes";

export interface Menu {
  icon: LucideIconType;
  title: string;
  pageName?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface SideMenuState {
  menu: Array<Menu | "divider">;
}

export const useSideMenuStore = defineStore("sideMenu", {
  state: (): SideMenuState => ({
    menu: [
      {
        icon: "Home",
        pageName: "dashboard",
        title: "Главная",
      },
    ],
  }),
});
