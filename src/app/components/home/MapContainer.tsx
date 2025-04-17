import { MarkersProps } from "@/types/google-maps/types";
import MapWraper from "../google-maps/MapWraper";

export default function MapContainer({
  locations,
  selectedLocation,
  onLocationSelect,
}: {
  locations: MarkersProps[];
  selectedLocation: MarkersProps | null;
  onLocationSelect: (location: MarkersProps) => void;
}) {
  return (
    <div className="flex flex-col h-full gap-4">
      <div className="flex flex-col gap-2 md:w-1/2 overflow-y-auto bg-red-300 h-10">
        {locations.map((location) => (
          <div
            key={location.key}
            className={`bg-white p-2 rounded-md text-black cursor-pointer ${
              selectedLocation?.key === location.key
                ? "border-2 border-blue-500"
                : ""
            }`}
            onClick={() => onLocationSelect(location)}
          >
            <h3 className="text-lg font-bold">{location.title}</h3>
            {selectedLocation?.key === location.key && (
              <>
                <p>{location.detail}</p>
                <p>{location.specializations}</p>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="md:w-1/2 bg-blue-300 h-80">
        <MapWraper
          locations={locations}
          selectedLocation={selectedLocation}
          onLocationSelect={onLocationSelect}
        />
      </div>
    </div>
  );
}
