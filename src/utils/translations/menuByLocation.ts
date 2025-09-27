import { menu } from "./menu";
import type { MenuData } from "./menu";

const hagaMenu: MenuData = {
  ...menu,
};

export const menuByLocation: Record<"arsta" | "haga", MenuData> = {
  arsta: menu,
  haga: hagaMenu,
};
