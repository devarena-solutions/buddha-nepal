import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type LocationKey = "arsta" | "haga";

interface LocationInfo {
  name: string;
  phones: string[];
}

const locations: Record<LocationKey, LocationInfo> = {
  arsta: {
    name: "ÅRSTAVÄGEN 39, 120 52 Årsta",
    phones: ["08-684 271 90", "0760-35 37 99"],
  },
  haga: {
    name: "Buddha Haga",
    phones: ["08-684 271 90", "0760-35 37 99"],
  },
};

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
  const [location, setLocationState] = useState<LocationKey | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("location") as LocationKey | null;
      if (stored === "arsta" || stored === "haga") {
        setLocationState(stored);
      }
    }
  }, []);

  const setLocation = (loc: LocationKey) => {
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
