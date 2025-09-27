import type { MenuArstaSectionKey } from "./menu_arsta";
import type { MenuHagaSectionKey } from "./menu_haga";

export const MENU_ICONS_ARSTA: Partial<Record<MenuArstaSectionKey, string>> = {
  appetizer: "/appetizer.svg",
  favourites: "/favourites.svg",
  thali: "/thali.svg",
  veg: "/veg.svg",
  clay_oven: "/clay_oven.svg",
  biryani_dishes: "/mughal.svg",
  momos: "/momos.png",
  bread: "/naan.svg",
  accessories: "/accessories.svg",
};

export const MENU_ICONS_HAGA: Partial<Record<MenuHagaSectionKey, string>> = {
  appetizer: "/appetizer.svg",
  favourites: "/favourites.svg",
  veg: "/veg.svg",
  momos: "/momos.png",
  bread: "/naan.svg",
  accessories: "/accessories.svg",
  desserts: "/dessert.svg",
};
