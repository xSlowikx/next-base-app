import { MarkersProps } from "@/types/google-maps/types";
import { AdvancedMarker, useMap } from "@vis.gl/react-google-maps";
import { useRef, useState, useEffect, useCallback } from "react";
import { Marker, MarkerClusterer } from "@googlemaps/markerclusterer";
import Image from "next/image";

export const Markers = (props: { 
  markers: MarkersProps[]; 
  selectedLocation: MarkersProps | null; 
  onMarkerClick: (marker: MarkersProps) => void 
}) => {
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

  const handleCombinedClick = useCallback((marker: MarkersProps, ev: google.maps.MapMouseEvent) => {
    handleClick(ev);
    props.onMarkerClick(marker);
  }, [handleClick, props.onMarkerClick]);

	return (
		<>
			{props.markers.map((marker: MarkersProps) => (
				<AdvancedMarker
					key={marker.key}
					position={marker.location}
					ref={(markerRef) => setMarkerRef(markerRef, marker.key)}
					clickable={true}
					onClick={(ev) => handleCombinedClick(marker, ev)}
				>
					{/* <Pin
            background={"#ff0000"}
            glyphColor={"#00ff00"}
            borderColor={"#0000ff"}
          /> */}
					<div
						className="relative flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#c4ddc5] p-2 border-1 border-black pointer-events-auto"
					>
						{/* Creo que esto tenemos que dejarlo asi en teoria el componente Image es para imagenes que no van a cambiar ni rerenderizarse si no entendi mal */}
						<Image src="/logo.png" alt="Logo" fill className="object-contain p-1" />

						{props.selectedLocation?.key === marker.key && (
							<div className="absolute bottom-full left-1/2 mb-2 transform -translate-x-1/2 z-50 w-30">
								<div className="relative bg-[#c4ddc5] p-4 shadow-lg rounded-lg border border-black">
									<h3 className="text-lg font-semibold">{marker.title}</h3>
									<p>Puesto: {marker.specializations}</p>

									{/* Triangulito centrado */}
									<div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#c4ddc5]"></div>
									<div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-black z-[-1] translate-y-[1px]"></div>
								</div>
							</div>
						)}
					</div>
				</AdvancedMarker>
			))}
		</>
	);
};
