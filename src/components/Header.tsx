import RegionSelector from "./RegionSelector";
import logo from "../assets/brand/logo.png";

type Props = {
  region: string;
  setRegion: (region: string) => void;
};

function Header({ region, setRegion }: Props) {
  return (
    <header
      className=" flex w-full
  flex-col
  gap-6
  py-6
  sm:flex-row
  sm:items-center
  sm:justify-between"
    >
      {/* Brand */}
      <div className="flex items-center gap-4">
        <img src={logo} alt="PokeTest" className="h-20 w-20 object-contain" />

        <div>
          <h1 className="text-4xl font-extrabold leading-none tracking-tight text-slate-950">
            Poke<span className="text-red-500">Test</span>
          </h1>

          <p className="mt-2 text-lg font-semibold text-slate-500">
            Quiz de Pokémon
          </p>
        </div>
      </div>

      {/* Región */}
      <RegionSelector region={region} setRegion={setRegion} />
    </header>
  );
}

export default Header;
