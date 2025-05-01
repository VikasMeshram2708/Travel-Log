/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

// Fix for default icon issue in React
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = new L.Icon({
  // @ts-ignore
  iconUrl,
  // @ts-ignore
  iconRetinaUrl,
  // @ts-ignore
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function MapComponent() {
  const position: LatLngTuple = [27.133662, 81.963219];

  return (
    <div style={{ height: "50vh", width: "100%" }}>
      <MapContainer
        center={position}
        zoom={14}
        scrollWheelZoom={false}
        className="rounded-lg"
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={defaultIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
