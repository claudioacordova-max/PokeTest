import Counter from "./Counter";
import Timer from "./Timer";
import LifeCounter from "./LifeCounter";

type Props = { count: number; lives: number; time: number };

function Stats({ count, lives, time }: Props) {
  return (
    <section
      className="
        flex w-full items-center justify-center
        gap-2 px-2 py-6
        sm:gap-8 sm:py-8
        [&_svg]:max-sm:size-6
        [&_.h-20]:max-sm:h-12
        [&_.w-20]:max-sm:w-12
        [&_.gap-4]:max-sm:gap-1
        [&_.text-4xl]:max-sm:text-xl
      "
    >
      <Counter count={count} />

      <div className="h-16 w-px bg-slate-200" />

      <Timer seconds={time} />

      <div className="h-16 w-px bg-slate-200" />

      <LifeCounter lives={lives} />
    </section>
  );
}

export default Stats;
