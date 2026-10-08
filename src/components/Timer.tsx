import { Clock3 } from "lucide-react";

type TimerProps = {
  seconds?: number;
};

function Timer({ seconds = 23 }: TimerProps) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="
          flex h-20 w-20
          items-center justify-center
          rounded-full
          bg-blue-100
          text-blue-600
        "
      >
        <Clock3 className="h-10 w-10" strokeWidth={2.5} aria-hidden="true" />
      </div>

      <div>
        <p className="text-4xl font-extrabold leading-none text-slate-950">
          {seconds}s
        </p>
      </div>
    </div>
  );
}

export default Timer;
