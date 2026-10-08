import { Heart } from "lucide-react";

type LifeCounterProps = {
  lives?: number;
};

function LifeCounter({ lives = 3 }: LifeCounterProps) {
  return (
    <div className="flex items-center gap-4">
      <div>
        <div className="mt-1 flex gap-2">
          {Array.from({ length: lives }).map((_, index) => (
            <Heart
              key={index}
              className="h-9 w-9 text-red-500"
              fill="currentColor"
              strokeWidth={1.8}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LifeCounter;
