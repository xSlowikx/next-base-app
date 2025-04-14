import { MarkersProps } from "@/types/google-maps/types";
import MapWraper from "../google-maps/MapWraper";

const locations: MarkersProps[] = [
	{
		specializations: "Robotica",
		detail: "",
		title: "Hospital Italiano San Justo",
		key: "hospital-italiano-san-justo",
		location: { lat: -34.66838790905556, lng: -58.56703065328709 },
	},
	{
		specializations: "Carpinteria",
		detail: "",
		title: "Megafutbol San Justo",
		key: "megafutbol-san-justo",
		location: { lat: -34.6708409494721, lng: -58.556516394121694 },
	},
	{
		specializations: "CNC",
		detail: "",
		title: "Club Huracán San Justo Sede Universidad",
		key: "club-huracan-san-justo-sede-universidad",
		location: { lat: -34.66805967578555, lng: -58.558673859403704 },
	},
	{
		specializations: "Electricidad",
		detail: "",
		title: "Open Park Sede Cementerio",
		key: "open-park-sede-cementerio",
		location: { lat: -34.67217233718847, lng: -58.553199389761254 },
	},
	{
		specializations: "Mecanica",
		detail: "",
		title: "Plaza Rateros San Justo",
		key: "plaza-rateros-san-justo",
		location: { lat: -34.67458972514733, lng: -58.55190688733059 },
	},
	{
		specializations: "Automovil",
		detail: "",
		title: "Plaza San Justo",
		key: "plaza-san-justo",
		location: { lat: -34.67734991874826, lng: -58.56092313420325 },
	},
];

export default function MapContainer() {
	return (
		<div className="flex gap-4" style={{ width: "800px", height: "auto" }}>
			<div className="flex flex-col gap-2 w-1/2 h-auto overflow-y-auto">
				{locations &&
					locations.map((location) => (
						<div key={location.key} className="bg-white p-2 rounded-md text-black">
							<h3 className="text-lg font-bold">{location.title}</h3>
							<p>{location.detail}</p>
							<p>{location.specializations}</p>
						</div>
					))}
			</div>
			<div className="h-auto w-1/2">
				<MapWraper locations={locations} />
			</div>
		</div>
	);
}
