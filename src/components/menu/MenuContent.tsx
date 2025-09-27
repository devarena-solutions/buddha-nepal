import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import type { Language } from "@/utils/site";

export type LanguageRecord = Record<Language, string | null>;

export interface MenuSubItem {
  name: LanguageRecord;
  description?: LanguageRecord | null;
  price?: string | number | null;
}

export interface MenuItem {
  name: LanguageRecord;
  description?: LanguageRecord | null;
  price?: string | number | null;
  sub?: MenuSubItem[];
}

export interface MenuSection {
  index: number;
  name: LanguageRecord;
  source: string;
  items: MenuItem[];
}

export interface SectionConfig {
  gridClass?: string;
  itemWrapperClass?: string;
}

interface MenuContentProps<TSectionKey extends string> {
  locale: Language;
  data: Record<TSectionKey, MenuSection | undefined>;
  sectionOrder: TSectionKey[];
  sectionConfig?: Partial<Record<TSectionKey, SectionConfig>>;
  icons?: Partial<Record<TSectionKey, string>>;
}

const DEFAULT_GRID_CLASS = "w-full grid lg:grid-cols-3";
const DEFAULT_ITEM_WRAPPER_CLASS = "w-[300px] mt-5";

const formatPrice = (value?: string | number | null) => {
  if (value === undefined || value === null || value === "") {
    return null;
  }

  const trimmed = value.toString().trim();
  if (/kr$/i.test(trimmed)) {
    return trimmed;
  }

  return `${trimmed} kr`;
};

export function MenuContent<TSectionKey extends string>(
  props: MenuContentProps<TSectionKey>
) {
  const {
    locale,
    data,
    sectionOrder,
    sectionConfig = {} as Partial<Record<TSectionKey, SectionConfig>>,
    icons = {} as Partial<Record<TSectionKey, string>>,
  } = props;

  const menuEntries = useMemo(() => {
    return sectionOrder
      .map((key) => {
        const section = data[key];
        return section ? ([key, section] as const) : null;
      })
      .filter((entry): entry is [TSectionKey, MenuSection] => Boolean(entry))
      .sort((a, b) => a[1].index - b[1].index);
  }, [data, sectionOrder]);

  const headerItems = useMemo(() => {
    return menuEntries.map(([key, section]) => ({
      id: section.index.toString(),
      icon: icons[key],
      name: section.name,
    }));
  }, [icons, menuEntries]);

  const firstHeaderId = headerItems[0]?.id ?? "";

  const [currentSection, setCurrentSection] = useState<string>(firstHeaderId);

  useEffect(() => {
    setCurrentSection(firstHeaderId);
  }, [firstHeaderId]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const sections = document.querySelectorAll<HTMLElement>(".menu-section");

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
            break;
          }
        }
      },
      {
        threshold: 0.6,
        rootMargin: "50px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, [menuEntries]);

  const containerWidthClass =
    "w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]";

  return (
    <div>
      <div className="flex mt-1 w-full overflow-x-auto menu-scroll sticky bg-white top-0 z-10">
        {headerItems.map((item) => {
          const itemLabel = item.name[locale] ?? item.name.en ?? "";
          const altText = itemLabel || "menu";

          return (
            <div
              key={item.id}
              onClick={() =>
                document
                  .getElementById(item.id)
                  ?.scrollIntoView({ behavior: "smooth", block: "center" })
              }
              className="w-[125px] md:w-[200px] text-slate-800 font-semibold text-center flex flex-shrink-0 justify-center border border-y-slate-200 cursor-pointer"
            >
              <div
                className={`py-[10px] md:py-[20px] flex flex-col items-center gap-3 w-full border-b-[10px] hover:border-primary ${
                  item.id === currentSection ? "border-primary" : "border-white"
                }`}
              >
                {item.icon ? (
                  <Image
                    className="stroke-gray-100"
                    src={item.icon}
                    alt={altText}
                    width={32}
                    height={32}
                  />
                ) : (
                  <span className="h-8 w-8" aria-hidden="true" />
                )}
                <h1 className="font-bold text-xs md:text-sm text-primary">
                  {itemLabel}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      {menuEntries.map(([key, section], index) => {
        const config = sectionConfig[key];
        const gridClass = config?.gridClass ?? DEFAULT_GRID_CLASS;
        const itemWrapperClass =
          config?.itemWrapperClass ?? DEFAULT_ITEM_WRAPPER_CLASS;

        const containerSpacing = (() => {
          if (index === 0) {
            return "flex justify-center my-[100px]";
          }
          if (index === menuEntries.length - 1) {
            return "flex justify-center mt-[100px] mb-[100px]";
          }
          return "flex justify-center mt-[100px]";
        })();

        return (
          <div className={containerSpacing} key={section.index}>
            <div className={containerWidthClass}>
              <div
                className="w-full h-[200px] bg-cover bg-center rounded-lg mb-5 bg-black"
                style={{ backgroundImage: `url(${section.source})` }}
              />
              <div
                className="menu-section flex items-center gap-5"
                id={section.index.toString()}
              >
                <h1 className="text-[27px] md:text-[40px] font-bold text-primary">
                  {section.name[locale]}
                </h1>
                <hr className="flex-1 border-[1px] border-primary" />
              </div>
              <div className={gridClass}>
                {section.items.map((item) => {
                  const itemName = item.name[locale] ?? item.name.en ?? "";
                  const itemDescription = item.description?.[locale];
                  const priceLabel = formatPrice(item.price);

                  return (
                    <div
                      className={itemWrapperClass}
                      key={`${section.index}-${itemName}`}
                    >
                      <div className="flex font-bold text-primary justify-between gap-5 text-[23px]">
                        <h2>{itemName}</h2>
                        {priceLabel && <p>{priceLabel}</p>}
                      </div>
                      {itemDescription && (
                        <p className="text-sm mt-3">{itemDescription}</p>
                      )}
                      {item.sub && item.sub.length > 0 && (
                        <div>
                          {item.sub.map((sub) => {
                            const subName =
                              sub.name[locale] ?? sub.name.en ?? "";
                            const subDescription = sub.description?.[locale];
                            const subPriceLabel = formatPrice(sub.price);
                            return (
                              <div
                                key={`${section.index}-${itemName}-${subName}`}
                                className="grid gap-3 ml-3 mt-5"
                              >
                                <div className="flex gap-5">
                                  <div className="flex items-center gap-1">
                                    <span>•</span>
                                    <h3>{subName}</h3>
                                  </div>
                                  {subPriceLabel && <p>{subPriceLabel}</p>}
                                </div>
                                {subDescription && <p>{subDescription}</p>}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
