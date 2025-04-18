import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { MarkersProps } from "@/types/google-maps/types";
import { Markers } from "./Markers";

export default function MapWraper(props: {
  locations: MarkersProps[];
  selectedLocation: MarkersProps | null;
  onLocationSelect: (location: MarkersProps) => void;
}) {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
      <Map
        mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID || ""}
        defaultCenter={{ lat: -34.67067374713742, lng: -58.56278911047002 }}
        defaultZoom={13}
        fullscreenControl={false}
        mapTypeControl={false}
        streetViewControl={false}
        zoomControl={false}
        clickableIcons={false}
        disableDefaultUI={true} // Esto apaga todos los controles por defecto
      >
        <Markers
          markers={props.locations}
          selectedLocation={props.selectedLocation}
          onMarkerClick={props.onLocationSelect}
        />
      </Map>
    </APIProvider>
  );
}
