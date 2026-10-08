import { useState } from "react";

type Props = {
  region: string;
  setRegion: (region: string) => void;
};

function RegionSelector({ region, setRegion }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  const regions = [
    "Kanto",
    "Johto",
    "Hoenn",
    "Sinnoh",
    "Unova",
    "Kalos",
    "Alola",
    "Galar",
    "Paldea",
  ];

  function selectRegion(regionName: string) {
    setRegion(regionName);
    setOpen(false);
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex w-full
          items-center gap-4
          rounded-full
          border border-slate-200
          bg-white/90
          px-6 py-4
          text-left
          shadow-sm
          backdrop-blur-sm
          transition
          hover:bg-white
          hover:shadow-md
          sm:w-auto
          sm:min-w-[320px]
        "
      >
        {/* Icono */}
        <div
          className="
            flex h-12 w-12 shrink-0
            items-center justify-center
            rounded-full
            bg-blue-50
            text-blue-500
          "
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-7 w-7"
            aria-hidden="true"
          >
            <path d="M3 20h18L15 8l-4 6-2-3-6 9Z" />
          </svg>
        </div>

        {/* Texto */}
        <div className="flex flex-1 flex-col">
          <span className="text-sm font-semibold text-slate-500">Región</span>

          <span className="text-xl font-bold text-slate-950">{region}</span>
        </div>

        {/* Flecha */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className={`
            h-6 w-6
            text-slate-900
            transition-transform
            ${open ? "rotate-180" : ""}
          `}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div
          className="
            absolute
            right-0
            top-full
            z-50
            mt-3
            w-full
            overflow-hidden
            rounded-3xl
            border border-slate-200
            bg-white
            p-2
            shadow-xl
            sm:min-w-[320px]
          "
        >
          {regions.map((regionName) => (
            <button
              key={regionName}
              type="button"
              onClick={() => selectRegion(regionName)}
              className={`
                w-full
                rounded-2xl
                px-5 py-3
                text-left
                text-lg
                font-semibold
                transition
                ${
                  region === regionName
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-700 hover:bg-slate-50"
                }
              `}
            >
              {regionName}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default RegionSelector;
