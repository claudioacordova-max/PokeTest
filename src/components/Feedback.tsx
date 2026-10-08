import { Info } from "lucide-react";

type Props = {};

function Feedback({}: Props) {
  return (
    <div className="mt-10 flex justify-center">
      <div
        className="
      flex
      items-center
      gap-3
      rounded-full
      bg-blue-50/90
      px-6
      py-3
      text-blue-600
      shadow-sm
      backdrop-blur-sm
    "
      >
        <div
          className="
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-full
        bg-blue-500
        text-white
      "
        >
          <Info className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
        </div>

        <span className="text-lg font-semibold">¡Selecciona una opción!</span>
      </div>
    </div>
  );
}

export default Feedback;
