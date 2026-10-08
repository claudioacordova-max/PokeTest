import type { pokemon } from "../types/Types";

type Props = {
  pokemonsData: pokemon[];
  handleClick: (p: number) => void;
};

function Card({ pokemonsData, handleClick }: Props) {
  return (
    <div
      className="
        mt-10
        grid
        w-full
        grid-cols-1
        gap-6
        md:grid-cols-3
      "
    >
      {pokemonsData.map((p, index) => (
        <button
          key={p?.id ?? index}
          type="button"
          onClick={() => handleClick(index)}
          className="
            group
            flex
            min-h-[340px]
            flex-col
            items-center
            justify-between
            rounded-[28px]
            border-2
            border-transparent
            bg-white/90
            p-6
            text-center
            shadow-sm
            backdrop-blur-sm
            transition
            duration-200
            hover:-translate-y-1
            hover:border-amber-400
            hover:shadow-lg
            hover:shadow-amber-100/70
          "
        >
          <div
            className="
              flex
              aspect-square
              w-full
              max-w-[240px]
              items-center
              justify-center
              rounded-full
              bg-slate-50/80
              transition
              duration-200
              group-hover:bg-amber-50
            "
          >
            <img
              src={p?.sprites?.other?.home?.front_default}
              alt={p?.name}
              className="
                h-[85%]
                w-[85%]
                object-contain
                transition
                duration-200
                group-hover:scale-105
              "
            />
          </div>
        </button>
      ))}
    </div>
  );
}

export default Card;
