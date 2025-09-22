import { locationData } from "@/context/LocationContext";
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
  const locationEntries = Object.entries(locationData);
  const activeLocations = locationEntries.filter(([, info]) => info.isActive);
  const upcomingLocations = locationEntries.filter(([, info]) => !info.isActive);
  const phoneNumbers = Array.from(
    new Set(activeLocations.flatMap(([, info]) => info.phones))
  );

  const deliveryPartners = [
    { src: "/foodora.svg", alt: "Foodora" },
    { src: "/wolt.svg", alt: "Wolt" },
    { src: "/uber-eats.svg", alt: "Uber Eats" },
  ];

  return (
    <footer className="relative mt-auto overflow-hidden bg-[#10201d] text-white">
      <div className="pointer-events-none absolute -left-10 top-0 h-48 w-48 rounded-full bg-primary/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-teal-400/20 blur-3xl" />

      <div className="relative flex justify-center px-6 py-16 md:px-10 md:py-20">
        <div className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 flex flex-col gap-6">
            <button
              type="button"
              onClick={() => router.push("/")}
              className="flex w-fit items-center gap-4 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/10 transition hover:bg-white/20"
            >
              <Image
                src={icons.logo}
                width={70}
                height={70}
                alt="BUDDHA logo"
                className="rounded-full border border-white/10"
              />
              <span className="text-xl font-semibold tracking-wide">BUDDHA</span>
            </button>

            <p className="text-base leading-relaxed text-white/80">
              {footerContent.tagline[locale]}
            </p>
            <p className="text-sm leading-relaxed text-white/60">
              {footerContent.ctaDescription[locale]}
            </p>

            <Link
              href="/#form"
              className="inline-flex w-fit items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary shadow-lg shadow-primary/20 transition hover:bg-white/90"
            >
              {footerContent.ctaLabel[locale]}
            </Link>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              {footerContent.exploreTitle[locale]}
            </p>
            <nav className="flex flex-col gap-3 text-sm text-white/80">
              {links.map((item) => (
                <Link
                  key={item.en}
                  href={item.href}
                  locale={router.locale}
                  className="transition hover:text-white"
                >
                  {item[locale]}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                {footerContent.contactTitle[locale]}
              </p>
              <div className="grid gap-4">
                {activeLocations.map(([key, info]) => (
                  <div
                    key={key}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-sm font-semibold text-white">
                      {info.shortName}
                    </p>
                    <p className="mt-1 text-sm text-white/70">{info.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {upcomingLocations.length > 0 && (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  {contact.coming_soon_default[locale]}
                </p>
                {upcomingLocations.map(([key, info]) => (
                  <div key={key} className="mt-3">
                    <p className="text-sm font-semibold text-white">
                      {info.shortName}
                    </p>
                    <p className="text-sm text-white/70">{info.name}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  {footerContent.hoursTitle[locale]}
                </p>
                <p className="mt-3 text-sm text-white/80">{contact.weekdays[locale]}</p>
                <p className="text-sm text-white/80">{contact.weekends[locale]}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  {footerContent.callUsTitle[locale]}
                </p>
                <div className="mt-3 flex flex-col gap-2">
                  {phoneNumbers.map((phone) => {
                    const sanitized = phone.replace(/\s+/g, "");
                    return (
                      <a
                        key={sanitized}
                        href={`tel:${sanitized}`}
                        className="text-sm font-semibold text-white transition hover:text-white/80"
                      >
                        {phone}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <p className="py-6 text-center text-xs tracking-wide text-white/60">
          {footerContent.rights[locale]}
        </p>
      </div>
    </footer>
  );
}
