import { MarkersProps } from "@/types/google-maps/types";
import { AdvancedMarker, Pin, useMap } from "@vis.gl/react-google-maps";
import { useRef, useState, useEffect, useCallback } from "react";
import { Marker, MarkerClusterer } from "@googlemaps/markerclusterer";

export const Markers = (props: { markers: MarkersProps[] }) => {
	const map = useMap();
	const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});
	const clusterer = useRef<MarkerClusterer | null>(null);

	useEffect(() => {
		if (!map) return;
		if (!clusterer.current) {
			clusterer.current = new MarkerClusterer({ map });
		}
	}, [map]);

	useEffect(() => {
		if (!clusterer.current) return;
		clusterer.current.clearMarkers();
		clusterer.current.addMarkers(Object.values(markers));
	}, [markers]);

	const setMarkerRef = (marker: Marker | null, key: string) => {
		if (marker && markers[key]) return;
		if (!marker && !markers[key]) return;

		setMarkers((prev) => {
			if (marker) {
				return { ...prev, [key]: marker };
			} else {
				const newMarkers = { ...prev };
				delete newMarkers[key];
				return newMarkers;
			}
		});
	};

	const handleClick = useCallback(
		(ev: google.maps.MapMouseEvent) => {
			if (!map) return;
			if (!ev.latLng) return;
			console.log("marker clicked:", ev.latLng.toString());
			map.panTo(ev.latLng);
		},
		[map]
	);

	return (
		<>
			{props.markers.map((marker: MarkersProps) => (
				<AdvancedMarker
					key={marker.key}
					position={marker.location}
					ref={(markerRef) => setMarkerRef(markerRef, marker.key)}
					clickable={true}
					onClick={handleClick}
				>
					<Pin background={"#ff0000"} glyphColor={"#00ff00"} borderColor={"#0000ff"} />
					<div
						style={{
							width: "10px",
							height: "10px",
							backgroundColor: "red",
							borderRadius: "50%",
						}}
					></div>
				</AdvancedMarker>
			))}
		</>
	);
};
