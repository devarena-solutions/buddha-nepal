import { memo } from "react";

import { MENU_ICONS_ARSTA, menuArsta } from "@/utils/translations";
import type {
  MenuArstaData,
  MenuArstaSectionKey,
} from "@/utils/translations";
import type { Language } from "@/utils/site";

import { MenuContent, type SectionConfig } from "./MenuContent";

const SECTION_ORDER: MenuArstaSectionKey[] = [
  "appetizer",
  "favourites",
  "thali",
  "veg",
  "clay_oven",
  "biryani_dishes",
  "momos",
  "bread",
  "accessories",
];

const SECTION_CONFIG: Partial<Record<MenuArstaSectionKey, SectionConfig>> = {
  favourites: {
    gridClass: "w-full grid lg:grid-cols-2 gap-7",
    itemWrapperClass: "mt-5",
  },
  biryani_dishes: {
    gridClass: "w-full grid lg:grid-cols-1",
    itemWrapperClass: "w-full mt-5",
  },
  momos: {
    gridClass: "w-full grid lg:grid-cols-1",
    itemWrapperClass: "w-full mt-5",
  },
};

interface MenuArstaProps {
  locale: Language;
}

const data: MenuArstaData = menuArsta;

function MenuArstaComponent({ locale }: MenuArstaProps) {
  return (
    <MenuContent
      locale={locale}
      data={data}
      sectionOrder={SECTION_ORDER}
      sectionConfig={SECTION_CONFIG}
      icons={MENU_ICONS_ARSTA}
    />
  );
}

export const MenuArsta = memo(MenuArstaComponent);
