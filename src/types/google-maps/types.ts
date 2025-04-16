export type MarkersProps = {
	title: string;
	key: string;
	location: google.maps.LatLngLiteral;
    detail?: string;
    specializations?: string;
	matching_types?: MatcherTypes[];
};

export enum MatcherTypes  {
	FEATURED = "featured",
	RECOMMENDED = "recommended",
	DEFAULT = "default",
}