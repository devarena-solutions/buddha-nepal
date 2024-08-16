import Head from "next/head";

export default function Timings() {
  return (
    <main className="flex-1 flex">
      <Head>
        <title>The Table Himalaya - Öppettider</title>
      </Head>
      <div className="w-full flex-1 flex justify-center">
        <div className="w-[350px] flex-1 md:w-[700px] h-full mb-[25px] lg:mb-[100px] lg:w-[1000px] xl:w-[1200px] flex items-center flex-col justify-start mt-[150px] gap-10">
          <h1 className="text-4xl lg:text-5xl font-bold">ÖPPETTIDER</h1>
          <h1 className="text-3xl lg:text-4xl font-bold">
            MÅN-TORS: 11.00 - 21.00
          </h1>
          <h1 className="text-3xl lg:text-4xl font-bold">
            FREDAG: 11.00 - 22.00
          </h1>
          <h1 className="text-3xl lg:text-4xl font-bold">
            LÖRDAG: 15.00 - 22.00
          </h1>
          <h1 className="text-3xl lg:text-4xl font-bold">
            SÖNDAG: 15.00 - 21.00
          </h1>
        </div>
      </div>
    </main>
  );
}
