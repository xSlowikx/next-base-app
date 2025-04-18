import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PlaceFilter() {
  return (
    <div className="w-full pb-4 flex items-center justify-between text-[#4a453f] text-sm font-normal md:border-r md:border-[#d7d0b9] cursor-pointer md:mb-0 md:pb-0">
      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-base" />

      <select
        className="flex-grow bg-transparent appearance-none focus:outline-none cursor-pointer pl-2"
        defaultValue="default"
      >
        <option value="default" disabled hidden>
          Lugar
        </option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
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
