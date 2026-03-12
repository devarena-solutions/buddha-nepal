import { memo } from "react";

import { MENU_ICONS_HAGA, menuHaga } from "@/utils/translations";
import type {
  MenuHagaData,
  MenuHagaSectionKey,
} from "@/utils/translations";
import type { Language } from "@/utils/site";

import { MenuContent, type SectionConfig } from "./MenuContent";

const SECTION_ORDER: MenuHagaSectionKey[] = [
  "appetizer",    // Förrätter (Items 01-04)
  "main_dishes",  // Main Dishes (Items 05-13)
  "momos",        // MO:MO - Dumplings (Item 14)
  "grill",        // Grill Rätter (Items 15-19)
  "special",      // Special Rätt (Items 20-21)
  "veg",          // Vegetarisk Rätt (Items 22-24)
  "bread",        // Paratha / Naan (Item 25)
  "accessories",  // Tillbehör (Fried rice / Pommes)
  "desserts",     // Efterrätt / Desert
];

const SECTION_CONFIG: Partial<Record<MenuHagaSectionKey, SectionConfig>> = {
  main_dishes: {
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
