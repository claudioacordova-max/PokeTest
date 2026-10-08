import Counter from "./Counter";
import Timer from "./Timer";
import LifeCounter from "./LifeCounter";

type Props = { count: number; lives: number; time: number };

function Stats({ count, lives, time }: Props) {
  return (
    <section
      className="
        flex w-full items-center justify-center
        gap-8 py-8
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
