// src/components/NoSSRMap.tsx
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

type Location = {
  name: string;
  coords: [number, number];
  description: string;
};

type NoSSRMapProps = {
  travelLocations: Location[];
  tileLayerProps: any;
};

export default function NoSSRMap({ travelLocations, tileLayerProps }: NoSSRMapProps) {
  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ height: "100%", width: "100%" }}>
      <TileLayer {...tileLayerProps} />
      {travelLocations.map((location, idx) => (
        <Marker key={idx} position={location.coords}>
          <Tooltip offset={[0, -20]} opacity={1}>
            <div className="text-sm">
              <strong>{location.name}</strong>: {location.description}
            </div>
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
}
