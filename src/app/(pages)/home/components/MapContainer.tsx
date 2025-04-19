import { MarkersProps } from "@/types/google-maps/types";
import WorkList from "./WorkList";
import MapWraper from "@/components/google-maps/MapWraper";

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
    <div className="flex flex-col md:flex-row h-full gap-4 md:pt-8 w-full justify-center p-2 md:p-0">
      {/* <div className="flex flex-col gap-2 md:w-1/2 overflow-y-auto bg-red-300 h-10">
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
      </div> */}

      <div className="w-full md:w-1/2 lg:w-1/2">
        <div>
          <WorkList works={locations} />
        </div>
      </div>

      <div className="w-full md:w-1/2 h-80 md:h-100 lg:w-full">
        <MapWraper
          locations={locations}
          selectedLocation={selectedLocation}
          onLocationSelect={onLocationSelect}
        />
      </div>
    </div>
  );
}
