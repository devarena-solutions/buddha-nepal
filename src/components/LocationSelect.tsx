import { useLocation, LocationKey } from "@/context/LocationContext";
import { ChangeEvent } from "react";

export default function LocationSelect({ className = "", onChange }: { className?: string; onChange?: () => void }) {
  const { location, setLocation, locations } = useLocation();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setLocation(e.target.value as LocationKey);
    if (onChange) {
      onChange();
    }
  };

  return (
    <select
      className={className}
      value={location ?? ""}
      onChange={handleChange}
    >
      <option value="" disabled>
        Select Location
      </option>
      {Object.entries(locations).map(([key, info]) => (
        <option key={key} value={key}>
          {info.shortName}
        </option>
      ))}
    </select>
  );
}
