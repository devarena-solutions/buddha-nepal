import { useEffect } from "react";
import { icons } from "@/utils/icons";
import { type Language, siteSetting } from "@/utils/site";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navbar({ id }: { id : string}) {

  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const t = router.locale as Language;

  return (
    <nav id={id} className={`z-50 w-full bg-[#ffffff] bg-cover flex justify-center ${menuOpen ? "sticky lg:relative" : ""} top-0 shadow-md shadow-primary`}>
      <div className="z-50 md:px-0 w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] py-5 flex items-center justify-between">
        <div className="flex flex-row items-center gap-5 text-primary cursor-pointer" onClick={() => router.push("/")}>
          <Image src={icons.logo} alt="logo" className="w-[75px] lg:w-[100px]"/>
          <h1 className="hidden lg:flex font-semibold md:text-[23px] lg:text-[32px]">Buddha Nepal</h1>
        </div>
        <div className="hidden items-center md:flex text-md lg:text-lg gap-7 font-semibold text-primary">
          {siteSetting.getHeaderLinks().map(item => <Link locale={router.locale} key={item.en} href={item.href} className={`${router.asPath === item.href ? "border-b-2 border-primary" : ""}`}>{item[t]}</Link>)}
          <div className="flex gap-2 [&>*]:p-1 ">
            <Image src={icons.english} alt="english" onClick={() => router.push("", "", { locale: "en"})}  width={40} height={40} className={`rounded ${t === "en" ? "bg-primary" : ""}`} />
            <Image src={icons.swedish} alt="swedish" onClick={() => router.push("", "", { locale: "se"})}  width={40} height={40} className={`rounded ${t === "se" ? "bg-primary" : ""}`} />
          </div>
        </div>
        <Image src={menuOpen ? icons.close : icons.menu} onClick={() => setMenuOpen(prev => !prev)} alt="menu" width={30} className="md:hidden cursor-pointer" />
      </div>
      {menuOpen && <div className="z-30 md:hidden fixed h-screen w-screen bg-white top-0 left-0 grid place-content-center">
          <div className="flex flex-col items-center gap-7 font-semibold text-primary text-[25px]">
            {siteSetting.getHeaderLinks().map(item => <Link key={item.en} href={item.href} onClick={() => setMenuOpen(false)} className={`${router.asPath === item.href ? "border-b-2 border-primary" : ""}`}>{item[t]}</Link>)}
            <div className="flex gap-2 [&>*]:p-1 ">
            <Image src={icons.english} alt="english" onClick={() => router.push("", "", { locale: "en"})}  width={40} height={40} className={`rounded ${t === "en" ? "bg-primary" : ""}`} />
            <Image src={icons.swedish} alt="swedish" onClick={() => router.push("", "", { locale: "se"})}  width={40} height={40} className={`rounded ${t === "se" ? "bg-primary" : ""}`} />
          </div>
          </div>
        </div>}
    </nav>
  )
}