import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Theme = "light" | "dark";
export type ThemePreference = Theme | "system";

type ThemeContextValue = {
  theme: Theme;
  preference: ThemePreference;
  setPreference: (preference: ThemePreference) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "theme-preference";
const DARK_MEDIA_QUERY = "(prefers-color-scheme: dark)";

const getStoredPreference = (): ThemePreference | null => {
  if (typeof window === "undefined") {
    return null;
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark" || stored === "system") {
    return stored;
  }

  return null;
};

const getSystemTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia(DARK_MEDIA_QUERY).matches ? "dark" : "light";
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const storedPreference = getStoredPreference();

  const [preference, setPreferenceState] = useState<ThemePreference>(
    storedPreference ?? "system"
  );
  const [theme, setTheme] = useState<Theme>(() => {
    if (storedPreference === "light" || storedPreference === "dark") {
      return storedPreference;
    }

    return getSystemTheme();
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, preference);
  }, [preference]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia(DARK_MEDIA_QUERY);

    const syncWithSystem = (event?: MediaQueryListEvent) => {
      const prefersDark = event?.matches ?? mediaQuery.matches;
      setTheme(prefersDark ? "dark" : "light");
    };

    if (preference === "system") {
      syncWithSystem();
      const cleanup = (() => {
        if (typeof mediaQuery.addEventListener === "function") {
          mediaQuery.addEventListener("change", syncWithSystem);
          return () => mediaQuery.removeEventListener("change", syncWithSystem);
        }

        mediaQuery.addListener(syncWithSystem);
        return () => mediaQuery.removeListener(syncWithSystem);
      })();

      return cleanup;
    }

    setTheme(preference);

    return () => {
      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", syncWithSystem);
      } else {
        mediaQuery.removeListener(syncWithSystem);
      }
    };
  }, [preference]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const root = document.documentElement;
    root.classList.remove(theme === "dark" ? "light" : "dark");
    root.classList.add(theme);
    root.style.colorScheme = theme;
  }, [theme]);

  const setPreference = useCallback((value: ThemePreference) => {
    setPreferenceState(value);
  }, []);

  const toggleTheme = useCallback(() => {
    setPreferenceState((current) => {
      if (current === "light") {
        return "dark";
      }
      if (current === "dark") {
        return "system";
      }
      return "light";
    });
  }, []);

  const value = useMemo(
    () => ({
      theme,
      preference,
      setPreference,
      toggleTheme,
    }),
    [preference, setPreference, theme, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
