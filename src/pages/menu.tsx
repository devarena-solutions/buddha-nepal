import Head from "next/head";
import { useRouter } from "next/router";

import { MenuArsta } from "@/components/menu/MenuArsta";
import { MenuHaga } from "@/components/menu/MenuHaga";
import { DEFAULT_LOCATION, useLocation } from "@/context/LocationContext";
import type { Language } from "@/utils/site";

const resolveLocale = (value: string | undefined): Language => {
  return value === "se" ? "se" : "en";
};

export default function Menu() {
  const router = useRouter();
  const { location } = useLocation();

  const locale = resolveLocale(router.locale);
  const activeLocation = location ?? DEFAULT_LOCATION;

  return (
    <div>
      <Head>
        <title>BUDDHA - Menu</title>
      </Head>
      {activeLocation === "haga" ? (
        <MenuHaga locale={locale} />
      ) : (
        <MenuArsta locale={locale} />
      )}
    </div>
  );
}
