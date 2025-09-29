import { useEffect, useState } from "react";
import { icons } from "@/utils/icons";
import { type Language, siteSetting } from "@/utils/site";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useLocation } from "@/context/LocationContext";
import LocationSelect from "./LocationSelect";
import LocationModal from "./LocationModal";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ id }: { id: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [locationModal, setLocationModal] = useState(false);
  const router = useRouter();
  const { location, locations } = useLocation();

  const t = router.locale as Language;

  const phone = location ? locations[location].phones[0] ?? null : null;

  useEffect(() => {
    setLocationModal(!location);
  }, [location]);

  return (
    <nav
      id={id}
      className={`z-50 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur supports-[backdrop-filter]:bg-white/80 supports-[backdrop-filter]:dark:bg-slate-900/80 bg-cover flex justify-center text-primary transition-colors dark:text-emerald-100 ${
        menuOpen ? "sticky lg:relative" : ""
      } top-0 shadow-md shadow-primary`}
    >
      <div className="z-50 md:px-0 w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] py-5 flex items-center justify-between">
        <div
          className="flex flex-row items-center gap-5 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src={icons.logo}
            alt="logo"
            className="w-[75px] lg:w-[100px]"
          />
          <h1 className="hidden lg:flex font-semibold md:text-[23px] lg:text-[32px]">
            BUDDHA
          </h1>
        </div>
        <div className="hidden items-center md:flex text-md lg:text-lg gap-7 font-semibold">
          {siteSetting.getHeaderLinks().map((item) => (
            <Link
              locale={router.locale}
              key={item.en}
              href={item.href}
              className={`${
                router.asPath === item.href
                  ? "border-b-2 border-primary dark:border-emerald-200"
                  : ""
              }`}
            >
              {item[t]}
            </Link>
          ))}
          <div className="flex items-center gap-2 pl-4 ml-2 text-sm font-normal border-l border-primary/30">
            <LocationSelect className="cursor-pointer rounded-full border border-primary/20 bg-white/70 px-3 py-1 text-sm text-primary transition hover:border-primary/40 dark:border-emerald-200/40 dark:bg-slate-800/60 dark:text-emerald-100" />
            {phone && (
              <a href={`tel:${phone.replace(/\s+/g, "")}`}>
                <Image
                  src={icons.phone}
                  alt="phone"
                  className="w-5 h-5 invert-0 dark:invert"
                />
              </a>
            )}
          </div>
          <div className="flex items-center gap-4 pl-4 ml-2 border-l border-primary/30 dark:border-emerald-200/30">
            <ThemeToggle />
            <div className="flex gap-2 [&>*]:p-1">
            <Image
              src={icons.english}
              alt="english"
              onClick={() => router.push("", "", { locale: "en" })}
              width={40}
              height={40}
              className={`rounded transition ${
                t === "en"
                  ? "bg-primary/80 dark:bg-emerald-200/30"
                  : "bg-transparent"
              }`}
            />
            <Image
              src={icons.swedish}
              alt="swedish"
              onClick={() => router.push("", "", { locale: "se" })}
              width={40}
              height={40}
              className={`rounded transition ${
                t === "se"
                  ? "bg-primary/80 dark:bg-emerald-200/30"
                  : "bg-transparent"
              }`}
            />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <LocationSelect
            className="cursor-pointer rounded-full border border-primary/30 bg-white/70 px-3 py-1 text-sm text-primary transition hover:border-primary/40 dark:border-emerald-200/40 dark:bg-slate-800/60 dark:text-emerald-100"
          />
          {phone && (
            <a href={`tel:${phone.replace(/\s+/g, "")}`}>
              <Image
                src={icons.phone}
                alt="phone"
                className="w-5 h-5 invert-0 dark:invert"
              />
            </a>
          )}
          <ThemeToggle />
        </div>
        <Image
          src={menuOpen ? icons.close : icons.menu}
          onClick={() => setMenuOpen((prev) => !prev)}
          alt="menu"
          width={30}
          className="md:hidden cursor-pointer"
        />
      </div>
      {menuOpen && (
        <div className="z-30 md:hidden fixed h-screen w-screen bg-white dark:bg-slate-900 top-0 left-0 grid place-content-center">
          <div className="flex flex-col items-center gap-7 font-semibold text-[25px]">
            {siteSetting.getHeaderLinks().map((item) => (
              <Link
                key={item.en}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`${
                  router.asPath === item.href
                    ? "border-b-2 border-primary dark:border-emerald-200"
                    : ""
                }`}
              >
                {item[t]}
              </Link>
            ))}
            <div className="flex flex-col items-center text-base">
              <LocationSelect
                className="cursor-pointer rounded-full border border-primary/30 bg-white/70 px-3 py-1 text-primary transition hover:border-primary/40 dark:border-emerald-200/40 dark:bg-slate-800/60 dark:text-emerald-100"
                onChange={() => setMenuOpen(false)}
              />
              {phone && (
                <a href={`tel:${phone.replace(/\s+/g, "")}`}>
                  <Image
                    src={icons.phone}
                    alt="phone"
                    className="w-6 h-6 mt-2 invert-0 dark:invert"
                  />
                </a>
              )}
            </div>
            <div className="flex gap-3 items-center">
              <ThemeToggle />
              <div className="flex gap-2 [&>*]:p-1 ">
              <Image
                src={icons.english}
                alt="english"
                onClick={() => router.push("", "", { locale: "en" })}
                width={40}
                height={40}
                className={`rounded transition ${
                  t === "en"
                    ? "bg-primary/80 dark:bg-emerald-200/30"
                    : "bg-transparent"
                }`}
              />
              <Image
                src={icons.swedish}
                alt="swedish"
                onClick={() => router.push("", "", { locale: "se" })}
                width={40}
                height={40}
                className={`rounded transition ${
                  t === "se"
                    ? "bg-primary/80 dark:bg-emerald-200/30"
                    : "bg-transparent"
                }`}
              />
              </div>
            </div>
          </div>
        </div>
      )}
      {locationModal && (
        <LocationModal onClose={() => setLocationModal(false)} />
      )}
    </nav>
  );
}
