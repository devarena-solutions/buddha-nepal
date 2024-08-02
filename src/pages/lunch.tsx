import FridayLunch from "@/components/fridayLunch"
import MondayLunch from "@/components/mondayLunch"
import ThursdayLunch from "@/components/thursdayLunch"
import TuesdayLunch from "@/components/tuesdayLunch"
import WednesdayLunch from "@/components/wednesdayLunch"
import Head from "next/head"
import { useState } from "react"

export default function Lunch() {
  const days = [
    {
      en: "Monday",
      se: "MÅNDAG ",
    },
    {
      en: "Tuesday",
      se: "TISDAG",
    },
    {
      en: "Wednesday",
      se: "ONSDAG",
    },
    {
      en: "Thursday",
      se: "TORSDAG",
    },
    {
      en: "Friday",
      se: "FREDAG",
    },
    {
      en: "Saturday",
      se: null,
    },
    {
      en: "Sunday",
      se: null,
    },
  ]

  const dayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1
  const [lunch, setLunch] = useState(days[dayIndex].en)

  /* const [lunch, setLunch] = useState(days[new Date().getDay() - 1].en); */

  return (
    <main className="flex justify-center bg-white text-black text-center md:text-start flex-1">
      <Head>
        <title>The Table Himalaya - Lunches</title>
      </Head>
      <div className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] flex flex-col items-center gap-10">
        <h1 className="text-primary font-bold text-3xl lg:text-[60px] mt-10">
          Lunch Meny
        </h1>
        <div className="flex w-full lg:text-2xl text-primary font-semibold justify-between lg:my-10">
          {days.map(
            (day, index) =>
              day.se && (
                <p
                  key={index}
                  onClick={() => setLunch(day.en)}
                  className="hover:underline cursor-pointer"
                >
                  {day.se}
                </p>
              )
          )}
        </div>
        <h3 className="animate-blinkingBg text-white font-bold text-xl lg:text-4xl lg:leading-[50px] text-center border-8 border-black p-6 bg-teal-800">
          9 VALFRIA RÄTTER VARJE DAG: MÅNDAG - FREDAG (INKL : RIS, KAFFE , HALVA
          NAAN BRÖD, LÄSK OCH SALLAD BUFFE){" "}
        </h3>
        <h3 className="text-[30px] text-primary font-semibold">
          LUNCH TID: 11:00 - 14:30
        </h3>
        <MondayLunch lunch={lunch} />
        <TuesdayLunch lunch={lunch} />
        <WednesdayLunch lunch={lunch} />
        <ThursdayLunch lunch={lunch} />
        <FridayLunch lunch={lunch} />
        <div className="text-center text-2xl mt-10 text-primary font-bold mb-10">
          <p className="">
            Har du någon form av mat allergi? Låt oss veta det vid beställning,
            så kan vi bättre tillgodose dina förväntningar av en trivsam och god
            måltid.
          </p>
          <p>TEL: 08 6123780 </p>
        </div>
      </div>
    </main>
  )
}
