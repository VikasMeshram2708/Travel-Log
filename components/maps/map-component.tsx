/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import type { LatLngTuple } from "leaflet";
import { useSearchParams } from "next/navigation";

// Dynamically import components
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

export default function MapComponent() {
  const [position, setPosition] = useState<LatLngTuple>([28.6448, 77.216721]);
  const params = useSearchParams();
  const lat = params.get("lat") ?? 0;
  const lng = params.get("lng") ?? 0;

  useEffect(() => {
    // console.log("location", { lat, lng });
    if (lat || lng) {
      setPosition([+lat, +lng]);
    }
  }, [lat, lng]);

  useEffect(() => {
    // Fix for missing marker icons
    async function fixLeafletIcons() {
      const L = await import("leaflet");

      delete (L.Icon.Default.prototype as any)._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "/leaflet/marker-icon-2x.png",
        iconUrl: "/leaflet/marker-icon.png",
        shadowUrl: "/leaflet/marker-shadow.png",
      });
    }

    fixLeafletIcons();
  }, []);

  return (
    <div style={{ height: "50vh", width: "100%" }}>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className="z-0"
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
