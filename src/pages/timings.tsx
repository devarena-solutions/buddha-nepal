import Head from "next/head";
import { useRouter } from "next/router";
import { Language } from "@/utils/site";
import { timings } from "@/utils/translations";

export default function Timings() {
  const router = useRouter();
  const t = router.locale as Language;

  return (
    <main className="flex-1 flex">
      <Head>
        <title>{`Buddha Nepal - ${timings.opening_hours[t]}`}</title>
      </Head>
      <div className="w-full flex-1 flex justify-center">
        <div className="w-[350px] flex-1 md:w-[700px] h-full mb-[25px] lg:mb-[100px] lg:w-[1000px] xl:w-[1200px] flex items-center flex-col justify-start mt-[150px] gap-10">
          <h1 className="text-4xl lg:text-5xl font-bold">
            {timings.opening_hours[t]}
          </h1>
          <h1 className="text-3xl lg:text-4xl font-bold">
            {timings.weekdays[t]}
          </h1>
          <h1 className="text-3xl lg:text-4xl font-bold">
            {timings.weekends[t]}
          </h1>
        </div>
      </div>
    </main>
  );
}
