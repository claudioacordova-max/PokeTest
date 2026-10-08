import { Trophy } from "lucide-react";
type Props = { count: number };

function Counter({ count }: Props) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="
          flex h-20 w-20
          items-center justify-center
          rounded-full
          bg-amber-100
          text-amber-500
        "
      >
        <Trophy className="h-10 w-10" strokeWidth={2.5} aria-hidden="true" />
      </div>

      <div>
        <p className="text-4xl font-extrabold leading-none text-slate-950">
          {count}
        </p>
      </div>
    </div>
  );
}

export default Counter;
