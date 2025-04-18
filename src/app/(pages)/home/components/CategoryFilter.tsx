import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CategoryFilter() {
  return (
    <div className="w-full pb-4 flex items-center justify-between text-[#4a453f] text-sm font-normal md:border-r md:border-[#d7d0b9] cursor-pointer md:mb-0 md:pb-0">
      <FontAwesomeIcon icon={faBriefcase} className="text-base" />

      <select
        className="flex-grow bg-transparent appearance-none focus:outline-none cursor-pointer pl-2"
        defaultValue="default"
      >
        <option value="default" disabled hidden>
          Cargo o categoría
        </option>
        <option value="1">Docente</option>
        <option value="2">Kiosquero</option>
        <option value="3">Portero</option>
        <option value="4">Otro</option>
      </select>

      <div className="pointer-events-none px-2">
        <svg
          className="w-4 h-4 text-current"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
