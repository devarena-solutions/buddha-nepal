import { menuArsta } from "./menu_arsta";
import type { MenuArstaData } from "./menu_arsta";

import { menuHaga } from "./menu_haga";
import type { MenuHagaData } from "./menu_haga";

const hagaMenu: MenuHagaData = {
  ...menuHaga,
};

export const menuByLocation: Record<
  "arsta" | "haga",
  MenuArstaData | MenuHagaData
> = {
  arsta: menuArsta,
  haga: hagaMenu,
};
