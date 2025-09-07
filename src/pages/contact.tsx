import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { contact } from "@/utils/translations";
import { Language } from "@/utils/site";

export default function Contact() {
  const router = useRouter();
  const t = router.locale as Language;

  return (
    <main className="flex-1 flex">
      <Head>
        <title>{`Buddha Nepal - ${contact.title[t]}`}</title>
      </Head>
      <div className="w-full flex-1 flex justify-center">
        <div className="w-[350px] flex-1 md:w-[700px] h-full mb-[25px] lg:mb-[100px] lg:w-[1000px] xl:w-[1200px] flex items-center flex-col justify-start mt-[150px] gap-10">
          <h1 className="text-4xl lg:text-5xl font-bold">{contact.title[t]}</h1>

          <div className="flex flex-col gap-8 w-full text-center">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold">{contact.address_one[t]}</h2>
              <p>{contact.opening_times[t]}</p>
              <p>{contact.weekdays[t]}</p>
              <p>{contact.weekends[t]}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold">{contact.address_two[t]}</h2>
              <p>{contact.opening_times[t]}</p>
              <p>{contact.weekdays[t]}</p>
              <p>{contact.weekends[t]}</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 mt-4">
            <h2 className="text-2xl font-semibold">{contact.order_call[t]}</h2>
            <div className="flex flex-col">
              <a href="tel:0868427190" className="underline">
                {contact.phone_one[t]}
              </a>
              <a href="tel:0760353799" className="underline">
                {contact.phone_two[t]}
              </a>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <Image src="/foodora.svg" alt="Foodora" width={120} height={40} />
              <Image src="/wolt.svg" alt="Wolt" width={120} height={40} />
              <Image src="/uber-eats.svg" alt="Uber Eats" width={120} height={40} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
