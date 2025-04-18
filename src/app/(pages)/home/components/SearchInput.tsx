"use client";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PlaceFilter() {
  return (
    <div className="w-full flex items-center justify-between text-[#4a453f] text-sm font-normal cursor-pointer py-2 md:pl-2">
      <input
        type="text"
        placeholder="Buscar"
        className="w-[90%] text-sm font-normal text-[#4f7a44] focus:outline-none md:pl-6 placeholder:text-[#4a453f8a]"
        aria-label="Search keywords"
      />

      <button
        type="submit"
        className="text-[#4f7a44] h-full rounded-full cursor-pointer w-[10%]"
        aria-label="Search"
      >
        <FontAwesomeIcon icon={faSearch} className="text-base text-[#4a453f]" />
      </button>
    </div>
  );
}
