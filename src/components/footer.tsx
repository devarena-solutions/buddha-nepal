import {
  locationData,
  type LocationInfo,
  type LocationKey,
} from "@/context/LocationContext";
import { icons } from "@/utils/icons";
import { contact, footerContent } from "@/utils/translations";
import { siteSetting, type Language as SiteLanguage } from "@/utils/site";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  const locale = (router.locale as SiteLanguage) ?? "en";
  const links = siteSetting.getHeaderLinks();
  const locationEntries = Object.entries(locationData) as [
    LocationKey,
    LocationInfo,
  ][];
  const activeLocations = locationEntries.filter(([, info]) => info.isActive);
  const upcomingLocations = locationEntries.filter(([, info]) => !info.isActive);

  const deliveryPartners = [
    { src: "/foodora.svg", alt: "Foodora" },
    { src: "/qopla-white.svg", alt: "Qopla" },
  ];

  return (
    <footer className="relative mt-auto overflow-hidden bg-[#10201d] text-white dark:text-slate-200">
      <div className="pointer-events-none absolute -left-10 top-0 h-48 w-48 rounded-full bg-primary/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-teal-400/20 blur-3xl" />

      <div className="relative flex justify-center px-6 py-16 md:px-10 md:py-20">
        <div className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 flex flex-col gap-6">
            <button
              type="button"
              onClick={() => router.push("/")}
              className="flex w-fit items-center gap-4 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/10 transition hover:bg-white/20 dark:bg-emerald-200/10 dark:ring-emerald-200/10 dark:hover:bg-emerald-200/20"
            >
              <Image
                src={icons.logo}
                width={70}
                height={70}
                alt="BUDDHA logo"
                className="rounded-full border border-white/10 dark:border-emerald-200/20"
              />
              <span className="text-xl font-semibold tracking-wide dark:text-slate-100">BUDDHA</span>
            </button>

            <p className="text-base leading-relaxed text-white/80 dark:text-slate-300">
              {footerContent.tagline[locale]}
            </p>
            <p className="text-sm leading-relaxed text-white/60 dark:text-slate-400">
              {footerContent.ctaDescription[locale]}
            </p>

            <Link
              href="/#form"
              className="inline-flex w-fit items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary shadow-lg shadow-primary/20 transition hover:bg-white/90 dark:bg-emerald-200/20 dark:text-emerald-100 dark:shadow-emerald-200/10 dark:hover:bg-emerald-200/30"
            >
              {footerContent.ctaLabel[locale]}
            </Link>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70 dark:text-slate-400">
                {footerContent.deliveryTitle[locale]}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                {deliveryPartners.map((partner) => (
                  <Image
                    key={partner.alt}
                    src={partner.src}
                    alt={partner.alt}
                    width={46}
                    height={46}
                    className="opacity-80 transition hover:opacity-100"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70 dark:text-slate-400">
              {footerContent.exploreTitle[locale]}
            </p>
            <nav className="flex flex-col gap-3 text-sm text-white/80 dark:text-slate-300">
              {links.map((item) => (
                <Link
                  key={item.en}
                  href={item.href}
                  locale={router.locale}
                  className="transition hover:text-white dark:hover:text-slate-100"
                >
                  {item[locale]}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-7 flex flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70 dark:text-slate-400">
              {footerContent.contactTitle[locale]}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {activeLocations.map(([key, info]) => {
                const phoneNumbers = info.phones ?? [];

                return (
                  <article
                    key={key}
                    className="relative flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-gradient-to-br from-[#1b302a] via-[#132420] to-[#0c1916] p-6 text-white shadow-[0_24px_48px_-32px_rgba(8,30,24,0.9)] dark:border-emerald-200/10 dark:text-slate-200"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex flex-col">
                        <h3 className="text-xl font-semibold text-white dark:text-slate-100">
                          {info.shortName}
                        </h3>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200/70">
                          {contact.opening_times[locale]}
                        </p>
                      </div>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-emerald-200">
                        {contact.open_label[locale]}
                      </span>
                    </div>
                    <p className="text-sm text-white/70 dark:text-slate-400">{info.name}</p>
                    <div className="space-y-1 text-sm text-white/70 dark:text-slate-400">
                      <p>{contact.weekdays[locale]}</p>
                      <p>{contact.weekends[locale]}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur dark:border-emerald-200/10 dark:bg-emerald-200/10">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-emerald-200">
                        {contact.order_call[locale]}
                      </p>
                      <div className="mt-3 flex flex-col gap-2">
                        {phoneNumbers.map((phone) => {
                          const sanitized = phone.replace(/\s+/g, "");
                          return (
                            <a
                              key={sanitized}
                              href={`tel:${sanitized}`}
                            className="text-sm font-semibold text-emerald-200 transition hover:text-emerald-100 dark:text-emerald-100 dark:hover:text-emerald-50"
                          >
                            {phone}
                          </a>
                        );
                      })}
                      </div>
                    </div>
                  </article>
                );
              })}

              {upcomingLocations.map(([key, info]) => {
                const statusMessage = info.statusMessage?.[locale];
                const statusLabel =
                  statusMessage ?? contact.coming_soon_default[locale];

                return (
                  <article
                    key={key}
                    className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-primary to-primary/70 p-6 text-white shadow-xl dark:border-emerald-200/15 dark:text-slate-200"
                  >
                    <div className="pointer-events-none absolute -top-10 right-0 h-24 w-24 rounded-full bg-white/10 blur-3xl dark:bg-emerald-200/10" />
                    <div className="pointer-events-none absolute -bottom-6 left-6 h-20 w-20 rounded-full bg-white/10 blur-2xl dark:bg-emerald-200/10" />
                    <div className="relative flex h-full flex-col gap-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-xl font-semibold">{info.shortName}</h3>
                          <p className="text-sm text-white/80 dark:text-slate-300">{info.name}</p>
                        </div>
                        <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-white dark:bg-emerald-200/10 dark:text-emerald-100">
                          {statusLabel}
                        </span>
                      </div>
                      <p className="text-sm text-white/80 dark:text-slate-300">
                        {statusMessage ?? contact.coming_soon_description[locale]}
                      </p>
                      <p className="text-xs text-white/60 dark:text-slate-400">
                        {contact.coming_soon_follow[locale]}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 dark:border-emerald-200/10">
        <p className="py-6 text-center text-xs tracking-wide text-white/60 dark:text-slate-500">
          {footerContent.rights[locale]}
        </p>
      </div>
    </footer>
  );
}
