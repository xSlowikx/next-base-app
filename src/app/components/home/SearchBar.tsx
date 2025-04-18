import CategoryFilter from "./CategoryFilter";
import PlaceFilter from "./PlaceFilter";
import SearchInput from "./SearchInput";

export default function SearchBar() {
  return (
    <div className="w-full p-2 flex items-center justify-center mx-auto max-w-xl lg:max-w-2xl">
      <form className="flex flex-col items-center bg-[#e6dfcc] rounded-xl w-full p-4 md:flex-row md:gap-2 lg:px-6">
        <CategoryFilter />

        <PlaceFilter />

        <SearchInput />
      </form>
    </div>
  );
}
