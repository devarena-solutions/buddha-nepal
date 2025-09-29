import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { contact } from "@/utils/translations";
import {
  locationData,
  type LocationInfo,
  type LocationKey,
} from "@/context/LocationContext";
import { useTheme } from "@/context/ThemeContext";
import { Language as LanguageCode } from "@/utils/site";

export default function Contact() {
  const router = useRouter();
  const t = router.locale as LanguageCode;
  const { theme } = useTheme();
  const locationEntries = Object.entries(locationData) as [
    LocationKey,
    LocationInfo,
  ][];

  const partnerLogos = [
    {
      alt: "Foodora",
      lightSrc: "/foodora.svg",
      darkSrc: "/foodora.svg",
      className: "drop-shadow-lg",
    },
    {
      alt: "Qopla",
      lightSrc: "/qopla.svg",
      darkSrc: "/qopla-dark.svg",
      className: "drop-shadow-lg", 
    },
  ];

  return (
    <main className="flex-1 flex bg-white/80 text-slate-900 transition-colors dark:bg-slate-900/60 dark:text-slate-100">
      <Head>
        <title>{`BUDDHA - ${contact.title[t]}`}</title>
      </Head>
      <div className="w-full flex-1 flex justify-center">
        <div className="w-[350px] flex-1 md:w-[700px] h-full pb-[40px] lg:pb-[100px] lg:w-[1000px] xl:w-[1200px] flex flex-col items-center justify-start gap-10 pt-[110px] md:pt-[140px]">
          <h1 className="text-4xl lg:text-5xl font-bold">{contact.title[t]}</h1>

          <div className="grid w-full grid-cols-1 gap-8 text-left md:grid-cols-2">
            {locationEntries.map(([key, info]) => {
              const isActive = info.isActive;
              const statusMessage = info.statusMessage?.[t];
              const statusLabel = statusMessage ?? contact.coming_soon_default[t];
              const phoneNumbers = info.phones ?? [];

              if (isActive) {
                return (
                  <article
                    key={key}
                    className="relative flex h-full flex-col gap-6 rounded-3xl border border-primary/10 bg-white/95 p-8 text-slate-900 shadow-lg transition duration-300 hover:shadow-xl dark:border-emerald-200/20 dark:bg-slate-900/80 dark:text-slate-100"
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex flex-col">
                          <h2 className="text-2xl font-semibold text-primary dark:text-emerald-200">
                            {info.shortName}
                          </h2>
                          <p className="text-sm font-medium uppercase tracking-wide text-primary/70 dark:text-emerald-200/80">
                            {contact.opening_times[t]}
                          </p>
                        </div>
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary dark:bg-emerald-200/20 dark:text-emerald-100">
                          {contact.open_label[t]}
                        </span>
                      </div>
                      <p className="text-base text-slate-600 dark:text-slate-300">{info.name}</p>
                      <div className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                        <p>{contact.weekdays[t]}</p>
                        <p>{contact.weekends[t]}</p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 dark:border-emerald-200/20 dark:bg-slate-800/60">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary dark:text-emerald-200">
                        {contact.order_call[t]}
                      </p>
                      <div className="mt-4 flex flex-col gap-2">
                        {phoneNumbers.map((phone) => {
                          const sanitized = phone.replace(/\s+/g, "");
                          return (
                            <a
                              key={sanitized}
                              href={`tel:${sanitized}`}
                              className="text-lg font-semibold text-primary transition-colors duration-200 hover:text-primary/80 dark:text-emerald-200 dark:hover:text-emerald-100"
                            >
                              {phone}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </article>
                );
              }

              return (
                <article
                  key={key}
                  className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-primary to-primary/70 p-8 text-white shadow-xl"
                >
                  <div className="pointer-events-none absolute -top-16 right-0 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-10 left-10 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
                  <div className="relative flex h-full flex-col gap-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-2xl font-semibold">{info.shortName}</h2>
                        <p className="text-sm text-white/80">{info.name}</p>
                      </div>
                      <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                        {statusLabel}
                      </span>
                    </div>
                    <p className="text-base text-white/80">
                      {statusMessage ?? contact.coming_soon_description[t]}
                    </p>
                    <p className="text-sm text-white/60">
                      {contact.coming_soon_follow[t]}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="flex items-center justify-center gap-6 mt-12">
            {partnerLogos.map((logo) => (
              <Image
                key={logo.alt}
                src={theme === "dark" ? logo.darkSrc : logo.lightSrc}
                alt={logo.alt}
                width={60}
                height={60}
                className={`h-[60px] w-[60px] object-contain ${logo.className}`}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
