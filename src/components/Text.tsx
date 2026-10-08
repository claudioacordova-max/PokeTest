import { type ReactNode } from "react";

type Props = { children: ReactNode };

function Text({ children }: Props) {
  return (
    <div className="text-center">
      <h2
        className="
      text-3xl
      font-extrabold
      tracking-tight
      text-slate-950
      md:text-5xl
    "
      >
        {children}
      </h2>

      <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-amber-400" />
    </div>
  );
}

export default Text;
