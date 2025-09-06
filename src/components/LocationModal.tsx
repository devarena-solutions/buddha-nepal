import { useLocation, LocationKey } from "@/context/LocationContext";

export default function LocationModal({ onClose }: { onClose: () => void }) {
  const { setLocation, locations } = useLocation();

  const choose = (loc: LocationKey) => {
    setLocation(loc);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded shadow-md max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4">Choose Location</h2>
        {Object.entries(locations).map(([key, info]) => (
          <div key={key} className="mb-4">
            <button
              className="text-primary font-semibold underline"
              onClick={() => choose(key as LocationKey)}
            >
              {info.name}
            </button>
            <div className="text-sm mt-1">
              {info.phones.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
