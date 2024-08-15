import { Language, siteSetting } from "@/utils/site";
import { menu } from "@/utils/translations";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function Menu() {
  const t = useRouter().locale as Language;

  const [currentSection, setCurrentSection] = useState("");

  function visibilityHandler() {
    const sections = document.querySelectorAll(".customTest");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.some((entry) => {
          if (entry.isIntersecting) setCurrentSection(entry.target.id);
        });
      },
      {
        threshold: 0.6,
        rootMargin: "50px",
      }
    );

    sections.forEach((section) => observer.observe(section));
  }

  useEffect(() => {
    visibilityHandler();
  });

  return (
    <div>
      <Head>
        <title>The Table Himalaya - Menu</title>
      </Head>
      <div className="flex mt-1 w-full overflow-x-auto menu-scroll sticky bg-white top-0">
        {siteSetting.getMenuHeader().map((item, index) => (
          <div
            onClick={() =>
              document
                .getElementById(index.toString())
                ?.scrollIntoView({ behavior: "smooth", block: "center" })
            }
            className="w-[125px] md:w-[200px]  text-slate-800 font-semibold scroll text-center flex flex-shrink-0 justify-center border border-y-slate-200"
            key={item.en}
          >
            <div
              className={`py-[10px] md:py-[20px] flex flex-col items-center gap-3 w-full border-b-[10px] hover:border-primary ${
                index.toString() === currentSection
                  ? "border-primary"
                  : "border-white"
              }`}
            >
              <Image
                className="stroke-gray-100"
                src={item.src}
                alt="menu"
                width={32}
                height={32}
              />
              <h1 className="font-bold text-xs md:text-sm text-primary">
                {item[t]}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center my-[100px]">
        <div className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
          <div
            className="w-full h-[200px] bg-cover bg-center rounded-lg mb-5 bg-black"
            style={{ backgroundImage: `url(${menu.appetizer.source})` }}
          />
          <div
            className="customTest flex items-center"
            id={menu.appetizer.index.toString()}
          >
            <h1 className="text-[27px] md:text-[40px] font-bold text-primary">
              {menu.appetizer.name[t]}
            </h1>
            <hr className="flex-1 border-[1px] border-primary" />
          </div>
          <div className="w-full grid lg:grid-cols-3">
            {menu.appetizer.items.map((item) => (
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
            style={{ backgroundImage: `url(${menu.favourites.source})` }}
          />
          <div
            className="customTest flex items-center gap-5"
            id={menu.favourites.index.toString()}
          >
            <h1 className="text-[27px] md:text-[40px] font-bold text-primary">
              {menu.favourites.name[t]}
            </h1>
            <hr className="flex-1 border-[1px] border-primary" />
          </div>
          <div className="w-full grid lg:grid-cols-2 gap-7">
            {menu.favourites.items.map((item) => (
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
            style={{ backgroundImage: `url(${menu.thali.source})` }}
          />
          <div
            className="customTest flex items-center gap-5"
            id={menu.thali.index.toString()}
          >
            <h1 className="text-[27px] md:text-[40px] font-bold text-primary">
              {menu.thali.name[t]}
            </h1>
            <hr className="flex-1 border-[1px] border-primary" />
          </div>
          <div className="w-full grid lg:grid-cols-3">
            {menu.thali.items.map((item) => (
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
            style={{ backgroundImage: `url(${menu.veg.source})` }}
          />
          <div
            className="customTest flex items-center gap-5"
            id={menu.veg.index.toString()}
          >
            <h1 className="text-[27px] md:text-[40px] font-bold text-primary">
              {menu.veg.name[t]}
            </h1>
            <hr className="flex-1 border-[1px] border-primary" />
          </div>
          <div className="w-full grid lg:grid-cols-3">
            {menu.veg.items.map((item) => (
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
            style={{ backgroundImage: `url(${menu.clay_oven.source})` }}
          />
          <div
            className="customTest flex items-center gap-5"
            id={menu.clay_oven.index.toString()}
          >
            <h1 className="text-[27px] md:text-[40px] font-bold text-primary">
              {menu.clay_oven.name[t]}
            </h1>
            <hr className="flex-1 border-[1px] border-primary" />
          </div>
          <div className="w-full grid lg:grid-cols-3">
            {menu.clay_oven.items.map((item) => (
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
            style={{ backgroundImage: `url(${menu.biryani_dishes.source})` }}
          />
          <div
            className="customTest flex items-center gap-5"
            id={menu.biryani_dishes.index.toString()}
          >
            <h1 className="text-[27px] md:text-[40px] font-bold text-primary">
              {menu.biryani_dishes.name[t]}
            </h1>
            <hr className="flex-1 border-[1px] border-primary" />
          </div>
          <div className="w-full grid lg:grid-cols-1">
            {menu.biryani_dishes.items.map((item) => (
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

      <div className="flex justify-center my-[100px]">
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
            style={{ backgroundImage: `url(${menu.bread.source})` }}
          />
          <div
            className="customTest flex items-center gap-5"
            id={menu.bread.index.toString()}
          >
            <h1 className="text-[27px] md:text-[40px] font-bold text-primary">
              {menu.bread.name[t]}
            </h1>
            <hr className="flex-1 border-[1px] border-primary" />
          </div>
          <div className="w-full grid lg:grid-cols-3">
            {menu.bread.items.map((item) => (
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
            style={{ backgroundImage: `url(${menu.accessories.source})` }}
          />
          <div
            className="customTest flex items-center gap-5"
            id={menu.accessories.index.toString()}
          >
            <h1 className="text-[27px] md:text-[40px] font-bold text-primary">
              {menu.accessories.name[t]}
            </h1>
            <hr className="flex-1 border-[1px] border-primary" />
          </div>
          <div className="w-full grid lg:grid-cols-3">
            {menu.accessories.items.map((item) => (
              <div className="w-[300px] mt-5" key={item.name[t]}>
                <div className="flex font-bold text-primary justify-between text-[23px]">
                  <h2>{item.name[t]}</h2> <p>{item.price}kr</p>
                </div>
                {item.description && <p className="text-sm mt-3">{item.description[t]}</p>}
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
      </div>
    </div>
  );
}
