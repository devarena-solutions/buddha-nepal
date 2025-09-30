import {
  useLocation,
  LocationKey,
  DEFAULT_LOCATION,
} from "@/context/LocationContext";
import { Language as LanguageMap } from "@/utils/translations";
import { useRouter } from "next/router";
import { ChangeEvent } from "react";

export default function LocationSelect({ className = "", onChange }: { className?: string; onChange?: () => void }) {
  const { location, setLocation, locations } = useLocation();
  const router = useRouter();
  const locale = (router.locale as keyof LanguageMap) ?? "en";

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setLocation(e.target.value as LocationKey);
    if (onChange) {
      onChange();
    }
  };

  return (
    <select
      className={`rounded-md border border-primary/30 bg-white/80 text-sm text-primary transition focus:outline-none focus:ring-2 focus:ring-primary/30 dark:border-emerald-200/40 dark:bg-slate-800/60 dark:text-emerald-100 ${className}`}
      value={location ?? DEFAULT_LOCATION}
      onChange={handleChange}
    >
      {!location && (
        <option value="" disabled>
          Select Location
        </option>
      )}
      {Object.entries(locations).map(([key, info]) => (
        <option
          key={key}
          value={key}
          disabled={!info.isActive}
        >
          {info.shortName}
          {!info.isActive && info.statusMessage
            ? ` — ${info.statusMessage[locale]}`
            : ""}
        </option>
      ))}
    </select>
  );
}
