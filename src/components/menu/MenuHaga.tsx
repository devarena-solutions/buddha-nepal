import { memo } from "react";

import { MENU_ICONS_HAGA, menuHaga } from "@/utils/translations";
import type {
  MenuHagaData,
  MenuHagaSectionKey,
} from "@/utils/translations";
import type { Language } from "@/utils/site";

import { MenuContent, type SectionConfig } from "./MenuContent";

const SECTION_ORDER: MenuHagaSectionKey[] = [
  "appetizer",
  "favourites",
  "veg",
  "accessories",
  "momos",
  "bread",
  "desserts",
];

const SECTION_CONFIG: Partial<Record<MenuHagaSectionKey, SectionConfig>> = {
  favourites: {
    gridClass: "w-full grid lg:grid-cols-2 gap-7",
    itemWrapperClass: "mt-5",
  },
  momos: {
    gridClass: "w-full grid lg:grid-cols-1",
    itemWrapperClass: "w-full mt-5",
  },
};

interface MenuHagaProps {
  locale: Language;
}

const data: MenuHagaData = menuHaga;

function MenuHagaComponent({ locale }: MenuHagaProps) {
  return (
    <MenuContent
      locale={locale}
      data={data}
      sectionOrder={SECTION_ORDER}
      sectionConfig={SECTION_CONFIG}
      icons={MENU_ICONS_HAGA}
    />
  );
}

export const MenuHaga = memo(MenuHagaComponent);
