import { DEFAULT_LOCATION, useLocation } from "@/context/LocationContext";
import { Language } from "@/utils/site";
import {
  MENU_ICONS,
  MenuData,
  MenuSectionKey,
  menu,
  menuByLocation,
} from "@/utils/translations";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

export default function Menu() {
  const router = useRouter();
  const t = router.locale as Language;
  const { location } = useLocation();

  const activeLocationKey = (location ?? DEFAULT_LOCATION) as keyof typeof menuByLocation;
  const menuData: MenuData = menuByLocation[activeLocationKey] ?? menu;

  const menuEntries = useMemo(
    () =>
      (Object.entries(menuData) as [MenuSectionKey, MenuData[MenuSectionKey]][]).sort(
        (a, b) => a[1].index - b[1].index
      ),
    [menuData]
  );

  const headerItems = useMemo(
    () =>
      menuEntries.map(([key, section]) => ({
        id: section.index.toString(),
        icon: MENU_ICONS[key],
        name: section.name,
      })),
    [menuEntries]
  );

  const [currentSection, setCurrentSection] = useState<string>(headerItems[0]?.id ?? "");

  useEffect(() => {
    setCurrentSection(headerItems[0]?.id ?? "");
  }, [activeLocationKey, headerItems]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const sections = document.querySelectorAll<HTMLElement>(".customTest");

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.some((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
            return true;
          }
          return false;
        });
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

  const {
    appetizer,
    favourites,
    thali,
    veg,
    clay_oven,
    biryani_dishes,
    momos,
    bread,
    accessories,
  } = menuData;

  return (
    <div>
      <Head>
        <title>BUDDHA - Menu</title>
      </Head>
      <div className="flex mt-1 w-full overflow-x-auto menu-scroll sticky bg-white top-0">
        {headerItems.map((item) => (
          <div
            key={item.id}
            onClick={() =>
              document
                .getElementById(item.id)
                ?.scrollIntoView({ behavior: "smooth", block: "center" })
            }
            className="w-[125px] md:w-[200px]  text-slate-800 font-semibold scroll text-center flex flex-shrink-0 justify-center border border-y-slate-200"
          >
            <div
              className={`py-[10px] md:py-[20px] flex flex-col items-center gap-3 w-full border-b-[10px] hover:border-primary ${
                item.id === currentSection ? "border-primary" : "border-white"
              }`}
            >
              <Image
                className="stroke-gray-100"
                src={item.icon}
                alt="menu"
                width={32}
                height={32}
              />
              <h1 className="font-bold text-xs md:text-sm text-primary">
                {item.name[t]}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center my-[100px]">
        <div className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
          <div
            className="w-full h-[200px] bg-cover bg-center rounded-lg mb-5 bg-black"
            style={{ backgroundImage: `url(${appetizer.source})` }}
          />
          <div
            className="customTest flex items-center"
            id={appetizer.index.toString()}
          >
            <h1 className="text-[27px] md:text-[40px] font-bold text-primary">
              {appetizer.name[t]}
            </h1>
            <hr className="flex-1 border-[1px] border-primary" />
          </div>
          <div className="w-full grid lg:grid-cols-3">
            {appetizer.items.map((item) => (
              <div className="w-[300px] mt-5" key={item.name[t]}>
                <div className="flex font-bold text-primary justify-between gap-5 text-[23px]">
                  <h2>{item.name[t]}</h2> <p>{item.price}kr</p>
                </div>
                <p className="text-sm mt-3">{item.description[t]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center my-[100px]">
        <div className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
          <div
            className="w-full h-[200px] bg-cover bg-center rounded-lg mb-5 bg-black"
            style={{ backgroundImage: `url(${favourites.source})` }}
          />
          <div
            className="customTest flex items-center gap-5"
            id={favourites.index.toString()}
          >
            <h1 className="text-[27px] md:text-[40px] font-bold text-primary">
              {favourites.name[t]}
            </h1>
            <hr className="flex-1 border-[1px] border-primary" />
          </div>
          <div className="w-full grid lg:grid-cols-2 gap-7">
            {favourites.items.map((item) => (
              <div className="mt-5" key={item.name[t]}>
                <h2 className="text-[25px] md:text-[32px] text-primary font-bold">
                  {item.name[t]} {item.price && item.price + " kr"}
                </h2>
                <p className="text-[18px] text-primary mt-3 font-semibold">
                  {item.description?.[t]}
                </p>
                <div>
                  {item.sub?.map((sub) => (
                    <div key={sub.name[t]} className="grid gap-3 ml-3 mt-5">
                      <div className="flex gap-5">
                        <div className="flex items-center gap-1">
                          <>•</>
                          <h1>{sub.name[t]}</h1>
                        </div>
                        <p>{sub.price} kr</p>
                      </div>

                      <h2>{sub.description && sub.description[t]}</h2>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center my-[100px]">
        <div className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
          <div
            className="w-full h-[200px] bg-cover bg-center rounded-lg mb-5 bg-black"
            style={{ backgroundImage: `url(${thali.source})` }}
          />
          <div
            className="customTest flex items-center gap-5"
            id={thali.index.toString()}
          >
            <h1 className="text-[27px] md:text-[40px] font-bold text-primary">
              {thali.name[t]}
            </h1>
            <hr className="flex-1 border-[1px] border-primary" />
          </div>
          <div className="w-full grid lg:grid-cols-3">
            {thali.items.map((item) => (
              <div className="w-[300px] mt-5" key={item.name[t]}>
                <div className="flex font-bold text-primary justify-between text-[23px]">
                  <h2>{item.name[t]}</h2> <p>{item.price}kr</p>
                </div>
                <p className="text-sm mt-3">{item.description[t]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[100px]">
        <div className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
          <div
            className="w-full h-[200px] bg-cover bg-center rounded-lg mb-5 bg-black"
            style={{ backgroundImage: `url(${veg.source})` }}
          />
          <div
            className="customTest flex items-center gap-5"
            id={veg.index.toString()}
          >
            <h1 className="text-[27px] md:text-[40px] font-bold text-primary">
              {veg.name[t]}
            </h1>
            <hr className="flex-1 border-[1px] border-primary" />
          </div>
          <div className="w-full grid lg:grid-cols-3">
            {veg.items.map((item) => (
              <div className="w-[300px] mt-5" key={item.name[t]}>
                <div className="flex font-bold text-primary justify-between text-[23px]">
                  <h2>{item.name[t]}</h2> <p>{item.price}kr</p>
                </div>
                <p className="text-sm mt-3">{item.description[t]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[100px]">
        <div className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
          <div
            className="w-full h-[200px] bg-cover bg-center rounded-lg mb-5 bg-black"
            style={{ backgroundImage: `url(${clay_oven.source})` }}
          />
          <div
            className="customTest flex items-center gap-5"
            id={clay_oven.index.toString()}
          >
            <h1 className="text-[27px] md:text-[40px] font-bold text-primary">
              {clay_oven.name[t]}
            </h1>
            <hr className="flex-1 border-[1px] border-primary" />
          </div>
          <div className="w-full grid lg:grid-cols-3">
            {clay_oven.items.map((item) => (
              <div className="w-[300px] mt-5" key={item.name[t]}>
                <div className="flex font-bold text-primary justify-between text-[23px]">
                  <h2>{item.name[t]}</h2> <p>{item.price}kr</p>
                </div>
                <p className="text-sm mt-3">{item.description[t]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[100px]">
        <div className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
          <div
            className="w-full h-[200px] bg-cover bg-center rounded-lg mb-5 bg-black"
            style={{ backgroundImage: `url(${biryani_dishes.source})` }}
          />
          <div
            className="customTest flex items-center gap-5"
            id={biryani_dishes.index.toString()}
          >
            <h1 className="text-[27px] md:text-[40px] font-bold text-primary">
              {biryani_dishes.name[t]}
            </h1>
            <hr className="flex-1 border-[1px] border-primary" />
          </div>
          <div className="w-full grid lg:grid-cols-1">
            {biryani_dishes.items.map((item) => (
              <div className="w-full mt-5" key={item.name[t]}>
                <div className="flex font-bold text-primary justify-between text-[23px]">
                  <h2>{item.name[t]}</h2>
                </div>
                <p className="text-sm mt-3">{item.description[t]}</p>
                <div>
                  {item.sub?.map((sub) => (
                    <div key={sub.name[t]} className="grid gap-3 ml-3 mt-5">
                      <div className="flex gap-5">
                        <div className="flex items-center gap-1">
                          <>•</>
                          <h1>{sub.name[t]}</h1>
                        </div>
                        <p>{sub.price} kr</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[100px]">
        <div className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
          <div
            className="w-full h-[200px] bg-cover bg-center rounded-lg mb-5 bg-black"
            style={{ backgroundImage: `url(${momos.source})` }}
          />
          <div
            className="customTest flex items-center gap-5"
            id={momos.index.toString()}
          >
            <h1 className="text-[27px] md:text-[40px] font-bold text-primary">
              {momos.name[t]}
            </h1>
            <hr className="flex-1 border-[1px] border-primary" />
          </div>
          <div className="w-full grid lg:grid-cols-1">
            {momos.items.map((item) => (
              <div className="w-full mt-5" key={item.name[t]}>
                <div className="flex font-bold text-primary justify-between text-[23px]">
                  <h2>{item.name[t]}</h2>
                </div>
                <p className="text-sm mt-3">{item.description[t]}</p>
                <div>
                  {item.sub?.map((sub) => (
                    <div key={sub.name[t]} className="grid gap-3 ml-3 mt-5">
                      <div className="flex gap-5">
                        <div className="flex items-center gap-1">
                          <>•</>
                          <h1>{sub.name[t]}</h1>
                        </div>
                        <p>{sub.price} kr</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[100px]">
        <div className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
          <div
            className="w-full h-[200px] bg-cover bg-center rounded-lg mb-5 bg-black"
            style={{ backgroundImage: `url(${bread.source})` }}
          />
          <div
            className="customTest flex items-center gap-5"
            id={bread.index.toString()}
          >
            <h1 className="text-[27px] md:text-[40px] font-bold text-primary">
              {bread.name[t]}
            </h1>
            <hr className="flex-1 border-[1px] border-primary" />
          </div>
          <div className="w-full grid lg:grid-cols-3">
            {bread.items.map((item) => (
              <div className="w-[300px] mt-5" key={item.name[t]}>
                <div className="flex font-bold text-primary justify-between text-[23px]">
                  <h2>{item.name[t]}</h2> <p>{item.price}kr</p>
                </div>
                <p className="text-sm mt-3">{item.description[t]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[100px] mb-[100px]">
        <div className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
          <div
            className="w-full h-[200px] bg-cover bg-center rounded-lg mb-5 bg-black"
            style={{ backgroundImage: `url(${accessories.source})` }}
          />
          <div
            className="customTest flex items-center gap-5"
            id={accessories.index.toString()}
          >
            <h1 className="text-[27px] md:text-[40px] font-bold text-primary">
              {accessories.name[t]}
            </h1>
            <hr className="flex-1 border-[1px] border-primary" />
          </div>
          <div className="w-full grid lg:grid-cols-3">
            {accessories.items.map((item) => (
              <div className="w-[300px] mt-5" key={item.name[t]}>
                <div className="flex font-bold text-primary justify-between text-[23px]">
                  <h2>{item.name[t]}</h2> <p>{item.price}kr</p>
                </div>
                {item.description && (
                  <p className="text-sm mt-3">{item.description[t]}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center my-[100px]">
        <div className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
          <div
            className="w-full h-[200px] bg-cover bg-center rounded-lg mb-5 bg-black"
            style={{ backgroundImage: `url(${menu.fish_and_seafood.source})` }}
          />
          <div
            className="customTest flex items-center gap-5"
            id={menu.fish_and_seafood.index.toString()}
          >
            <h1 className="text-[27px] md:text-[40px] font-bold text-primary">
              {menu.fish_and_seafood.name[t]}
            </h1>
            <hr className="flex-1 border-[1px] border-primary" />
          </div>
          <div className="w-full grid lg:grid-cols-1">
            {menu.fish_and_seafood.items.map((item) => (
              <div className="w-full mt-5" key={item.name[t]}>
                <div className="flex font-bold text-primary justify-between text-[23px]">
                  <h2>{item.name[t]}</h2> <p>{item.price}kr</p>
                </div>
                <p className="text-sm mt-3">{item.description[t]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[100px]">
        <div className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
          <div
            className="w-full h-[200px] bg-cover bg-center rounded-lg mb-5 bg-black"
            style={{ backgroundImage: `url(${menu.desserts.source})` }}
          />
          <div
            className="customTest flex items-center gap-5"
            id={menu.desserts.index.toString()}
          >
            <h1 className="text-[27px] md:text-[40px] font-bold text-primary">
              {menu.desserts.name[t]}
            </h1>
            <hr className="flex-1 border-[1px] border-primary" />
          </div>
          <div className="w-full grid lg:grid-cols-3">
            {menu.desserts.items.map((item) => (
              <div className="w-[300px] mt-5" key={item.name[t]}>
                <div className="flex font-bold text-primary justify-between text-[23px]">
                  <h2>{item.name[t]}</h2> <p>{item.price}kr</p>
                </div>
                <p className="text-sm mt-3">{item.description[t]}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
}
