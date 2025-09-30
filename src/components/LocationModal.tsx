import LocationSelect from "./LocationSelect";

export default function LocationModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-sm rounded-2xl border border-black/10 bg-white p-6 shadow-xl transition dark:border-emerald-200/10 dark:bg-slate-900">
        <h2 className="mb-4 text-xl font-semibold text-primary dark:text-emerald-100">
          Choose Location
        </h2>
        <LocationSelect
          className="w-full rounded-lg border border-primary/30 bg-white/80 p-2 text-primary transition focus:outline-none focus:ring-2 focus:ring-primary/30 dark:border-emerald-200/40 dark:bg-slate-800/60 dark:text-emerald-100"
          onChange={onClose}
        />
      </div>
    </div>
  );
}
