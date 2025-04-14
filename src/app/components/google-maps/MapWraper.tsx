import { APIProvider, Map, MapCameraChangedEvent } from '@vis.gl/react-google-maps'
import { MarkersProps } from '@/types/google-maps/types'
import { Markers } from './Markers'

export default function MapWraper (props: { locations: MarkersProps[] }) {
    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
            <Map
                mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID || ''}
                defaultCenter={{ lat: -34.67067374713742, lng: -58.56278911047002 }}
                defaultZoom={13}
                onCameraChanged={(ev: MapCameraChangedEvent) => console.log("camera changed:", ev.detail.center, "zoom:", ev.detail.zoom)}
            >
                <Markers markers={props.locations} />
            </Map>
        </APIProvider>
    )
}