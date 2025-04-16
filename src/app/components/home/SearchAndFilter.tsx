import { MatcherTypes } from "@/types/google-maps/types";
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";

// In SearchAndFilter.tsx
export default function SearchAndFilter({
	handleFilterByMatching,
	selectedMatcher,
}: {
	handleFilterByMatching: (matching: MatcherTypes) => void;
	selectedMatcher: MatcherTypes;
}) {
	const toggleGroupItemClasses =
		"flex items-center justify-center bg-[#2f2f2f] leading-4 text-mauve11 first:rounded-l last:rounded-r hover:bg-violet3 focus:z-10 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none data-[state=on]:bg-violet6 data-[state=on]:text-violet12";

	return (
		<ToggleGroup
			type="single"
			value={selectedMatcher}
			onValueChange={(value) => handleFilterByMatching(value as MatcherTypes)}
			className="mb-4 flex gap-2"
		>
			<ToggleGroupItem
				value={MatcherTypes.FEATURED}
				className={`cursor-pointer p-2 ${selectedMatcher === MatcherTypes.FEATURED ? toggleGroupItemClasses : ""}`}
			>
				Featured
			</ToggleGroupItem>
			<ToggleGroupItem
				value={MatcherTypes.RECOMMENDED}
				className={`cursor-pointer p-2 ${selectedMatcher === MatcherTypes.RECOMMENDED ? toggleGroupItemClasses : ""}`}
			>
				Recommended
			</ToggleGroupItem>
			<ToggleGroupItem
				value={MatcherTypes.DEFAULT}
				className={`cursor-pointer p-2 ${selectedMatcher === MatcherTypes.DEFAULT ? toggleGroupItemClasses : ""}`}
			>
				All
			</ToggleGroupItem>
		</ToggleGroup>
	);
}
