import {
  Check,
  Circle,
  Diamond,
  RotateCcw,
  Sparkles,
  Star,
  ThumbsUp,
  X,
} from "lucide-react";
import { FaTrophy } from "react-icons/fa";

interface GameOverModalProps {
  count: number;
  turn: number;
  won: boolean;
  pokemomnMax: number;
  onRestart: () => void;
}

function GameOverModal({
  count,
  turn,
  won,
  pokemomnMax,
  onRestart,
}: GameOverModalProps) {
  // ESTADÍSTICAS
  const totalAnswers = Math.max(turn - 1, 1);

  const correctPercentage = Math.min(
    100,
    Math.max(0, Math.round((count / totalAnswers) * 100)),
  );

  const wrongPercentage = 100 - correctPercentage;

  // ESTADOS DEL RESULTADO
  const noHits = count === 0;

  const completed = pokemomnMax > 0 && count >= pokemomnMax;

  const isGold = completed;

  const perfectGame = completed && count === totalAnswers;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/30 backdrop-blur-sm">
      <div className="relative w-[540px] max-w-[90%] rounded-[32px] bg-white px-8 pb-8 pt-7 shadow-2xl">
        {/* ICONO SUPERIOR */}
        <div className="flex justify-center">
          <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-yellow-50">
            <Sparkles
              className="absolute -left-6 top-8 h-7 w-7 text-red-400"
              aria-hidden="true"
            />

            <Circle
              className="absolute -right-5 top-5 h-3 w-3 fill-current text-cyan-500"
              aria-hidden="true"
            />

            <Diamond
              className="absolute -left-4 bottom-5 h-6 w-6 fill-current text-blue-500"
              aria-hidden="true"
            />

            <Star
              className="absolute -right-3 bottom-6 h-6 w-6 fill-current text-green-500"
              aria-hidden="true"
            />

            {/* PREMIO */}
            {noHits ? (
              <ThumbsUp
                className="h-[72px] w-[72px] text-blue-500"
                strokeWidth={2}
                aria-hidden="true"
              />
            ) : (
              <FaTrophy
                className={`
    h-[76px] w-[76px]
    ${isGold ? "text-amber-400" : "text-slate-300"}
  `}
                aria-hidden="true"
              />
            )}
          </div>
        </div>

        {/* TÍTULO */}
        <div className="mt-3 text-center">
          <h2 className="text-5xl font-black text-[#020817]">
            {count !== 0
              ? won
                ? "¡Felicidades!"
                : "¡Buen trabajo!"
              : "Buen intento"}
          </h2>

          <p className="mt-2 text-lg font-medium text-slate-500">
            {won
              ? "Terminaste la partida con excelentes resultados"
              : "Llegaste al final de la partida"}
          </p>
        </div>

        {/* ESTADÍSTICAS */}
        <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {/* ACIERTOS */}
          <div className="flex min-w-0 items-center gap-3 rounded-2xl bg-green-50 px-4 py-4 sm:gap-4 sm:px-5 sm:py-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-500 text-white shadow">
              <Check className="h-8 w-8" strokeWidth={3} aria-hidden="true" />
            </div>

            <div>
              <p className="text-lg font-semibold text-slate-700">Aciertos</p>

              <p className="text-4xl font-black text-green-700">
                {correctPercentage}%
              </p>
            </div>
          </div>

          {/* FALLOS */}
          <div className="flex min-w-0 items-center gap-3 rounded-2xl bg-red-50 px-4 py-4 sm:gap-4 sm:px-5 sm:py-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-red-500 text-white shadow">
              <X className="h-8 w-8" strokeWidth={3} aria-hidden="true" />
            </div>

            <div>
              <p className="text-lg font-semibold text-slate-700">Fallos</p>

              <p className="text-4xl font-black text-red-600">
                {wrongPercentage}%
              </p>
            </div>
          </div>
        </div>

        {/* CONTADOR DE POKÉMON */}
        <div className="mt-3 text-center">
          <p className="mt-2 text-lg font-medium text-slate-500">
            {count !== 0
              ? `Acertaste ${count} de un total de ${pokemomnMax} Pokemon`
              : ``}
          </p>
        </div>

        {/* MENSAJE FINAL */}
        <div className="mt-5 flex items-center justify-center gap-4 rounded-2xl bg-yellow-50 py-5">
          <Star
            className="h-10 w-10 fill-yellow-400 text-yellow-500"
            strokeWidth={1.8}
            aria-hidden="true"
          />

          <p className="text-2xl font-bold text-yellow-800">
            {perfectGame ? "Partida perfecta" : "Buena partida"}
          </p>
        </div>

        {/* BOTÓN ORIGINAL */}
        <button
          onClick={onRestart}
          className="
            mt-5
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-full
            bg-blue-600
            py-4
            text-xl
            font-bold
            text-white
            shadow-lg
            transition
            hover:bg-blue-700
            active:scale-[0.98]
          "
        >
          <RotateCcw className="h-6 w-6" strokeWidth={2.5} aria-hidden="true" />
          Jugar de nuevo
        </button>
      </div>
    </div>
  );
}

export default GameOverModal;
