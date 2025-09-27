import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { Language as LanguageMap } from "@/utils/translations";

export type LocationKey = "arsta" | "haga";

export interface LocationInfo {
  /** Full descriptive name or address */
  name: string;
  /** Short label used in the UI dropdown */
  shortName: string;
  phones: string[];
  /** Google Maps embed source URL */
  mapSrc: string;
  /** Flag that states whether the location is active */
  isActive: boolean;
  /** Optional status or availability message */
  statusMessage?: LanguageMap;
}

const locations: Record<LocationKey, LocationInfo> = {
  arsta: {
    name: "ÅRSTAVÄGEN 39, 120 52 Årsta",
    shortName: "BUDDHA Årsta",
    phones: ["08-684 271 90", "0760-35 37 99"],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2037.2104655923176!2d18.05061867705999!3d59.296042113684926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f7791cc0466d9%3A0xa844d6d5435f306a!2sBUDDHA%20Nepal!5e0!3m2!1sen!2sse!4v1757644635036!5m2!1sen!2sse",
    isActive: true,
  },
  haga: {
    name: "Ynglingagatan 9, 113 47 Stockholm",
    shortName: "BUDDHA Haga",
    phones: ["08-684 271 90", "0760-35 37 99"],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4068.038657368876!2d18.04833100611805!3d59.34932516386402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d724ef405ef%3A0xba83e55580836315!2sYnglingagatan%209%2C%20113%2047%20Stockholm!5e0!3m2!1sen!2sse!4v1757644789600!5m2!1sen!2sse",
    isActive: true,
  },
};

export const DEFAULT_LOCATION: LocationKey = "arsta";

interface LocationContextProps {
  location: LocationKey | null;
  setLocation: (loc: LocationKey) => void;
  locations: typeof locations;
}

const LocationContext = createContext<LocationContextProps>({
  location: null,
  setLocation: () => {},
  locations,
});

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocationState] = useState<LocationKey | null>(
    locations[DEFAULT_LOCATION]?.isActive ? DEFAULT_LOCATION : null
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("location") as LocationKey | null;
      if (stored && locations[stored]?.isActive) {
        setLocationState(stored);
        return;
      }
      if (locations[DEFAULT_LOCATION]?.isActive) {
        setLocationState(DEFAULT_LOCATION);
        localStorage.setItem("location", DEFAULT_LOCATION);
      }
    }
  }, []);

  const setLocation = (loc: LocationKey) => {
    if (!locations[loc]?.isActive) {
      return;
    }
    setLocationState(loc);
    if (typeof window !== "undefined") {
      localStorage.setItem("location", loc);
    }
  };

  return (
    <LocationContext.Provider value={{ location, setLocation, locations }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);

export const locationData = locations;
