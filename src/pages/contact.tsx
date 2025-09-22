import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { contact } from "@/utils/translations";
import {
  locationData,
  type LocationInfo,
  type LocationKey,
} from "@/context/LocationContext";
import { Language as LanguageCode } from "@/utils/site";

export default function Contact() {
  const router = useRouter();
  const t = router.locale as LanguageCode;
  const locationEntries = Object.entries(locationData) as [
    LocationKey,
    LocationInfo,
  ][];
  const activePhoneNumbers = Array.from(
    new Set(
      locationEntries
        .filter(([, info]) => info.isActive)
        .flatMap(([, info]) => info.phones)
    )
  );

  return (
    <main className="flex-1 flex">
      <Head>
        <title>{`BUDDHA - ${contact.title[t]}`}</title>
      </Head>
      <div className="w-full flex-1 flex justify-center">
        <div className="w-[350px] flex-1 md:w-[700px] h-full mb-[25px] lg:mb-[100px] lg:w-[1000px] xl:w-[1200px] flex items-center flex-col justify-start mt-[150px] gap-10">
          <h1 className="text-4xl lg:text-5xl font-bold">{contact.title[t]}</h1>

          <div className="flex flex-col gap-8 w-full text-center">
            {locationEntries.map(([key, info]) => (
              <div key={key} className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold">{info.shortName}</h2>
                <p>{info.name}</p>
                {info.isActive ? (
                  <>
                    <p>{contact.opening_times[t]}</p>
                    <p>{contact.weekdays[t]}</p>
                    <p>{contact.weekends[t]}</p>
                  </>
                ) : (
                  <p className="text-primary font-semibold">
                    {info.statusMessage?.[t]}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 mt-4">
            <h2 className="text-2xl font-semibold">{contact.order_call[t]}</h2>
            <div className="flex flex-col">
              {activePhoneNumbers.map((phone) => {
                const sanitized = phone.replace(/\s+/g, "");
                return (
                  <a
                    key={sanitized}
                    href={`tel:${sanitized}`}
                    className="underline"
                  >
                    {phone}
                  </a>
                );
              })}
            </div>
            <div className="flex items-center gap-4 mt-4">
              <Image src="/foodora.svg" alt="Foodora" width={60} height={60} />
              <Image src="/wolt.svg" alt="Wolt" width={60} height={60} />
              <Image
                src="/uber-eats.svg"
                alt="Uber Eats"
                width={60}
                height={60}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
