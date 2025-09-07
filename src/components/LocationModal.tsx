import LocationSelect from "./LocationSelect";

export default function LocationModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded shadow-md max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4">Choose Location</h2>
        <LocationSelect
          className="w-full border border-gray-300 rounded p-2"
          onChange={onClose}
        />
      </div>
    </div>
  );
}
