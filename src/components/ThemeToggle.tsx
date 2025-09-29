import { ThemePreference, useTheme } from "@/context/ThemeContext";

const iconClass = "h-5 w-5";

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={iconClass}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3.75v.75m4.5 3-1.06 1.06m3.81 3.44h-.75m-3 4.5-1.06-1.06m-3.44 3.81v-.75m-4.5-3 1.06-1.06m-3.81-3.44h.75m3-4.5 1.06 1.06M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"
    />
  </svg>
);

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className={iconClass}
    aria-hidden="true"
  >
    <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
  </svg>
);

const AutoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={iconClass}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12a9 9 0 11-9-9m0 0a9 9 0 019 9m-9-9v18"
    />
  </svg>
);

const preferenceLabel: Record<ThemePreference, string> = {
  light: "Light mode",
  dark: "Dark mode",
  system: "System theme",
};

const preferenceIcon: Record<ThemePreference, JSX.Element> = {
  light: <SunIcon />,
  dark: <MoonIcon />,
  system: <AutoIcon />,
};

export function ThemeToggle() {
  const { toggleTheme, preference } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/70 px-3 py-1 text-sm font-medium text-primary shadow-sm transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 dark:border-emerald-200/40 dark:bg-slate-800/60 dark:text-emerald-100 dark:hover:bg-slate-800"
      aria-label={preferenceLabel[preference]}
    >
      {preferenceIcon[preference]}
      <span className="hidden text-xs sm:inline">{preferenceLabel[preference]}</span>
    </button>
  );
}

export default ThemeToggle;
