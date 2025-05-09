/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import type { LatLngTuple } from "leaflet";

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

// This child component safely uses useMapEvents
import { useMapEvents } from "react-leaflet";
import { MapLocationDetails } from "@/types";
import { useStore } from "@/store/store";

function LocationClickHandler({
  onClick,
}: {
  onClick: (latlng: LatLngTuple) => void;
}) {
  const { fillLocDetails } = useStore();
  //
  async function getLocationName(lat: number, lng: number) {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
      );
      const json: MapLocationDetails = await response.json();
      fillLocDetails(json);
    } catch (e) {
      console.error(e);
    }
  }

  useMapEvents({
    click(e) {
      const latlng: LatLngTuple = [e.latlng.lat, e.latlng.lng];
      console.log("ev", e);
      onClick(latlng);
      getLocationName(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

export default function MapComponent() {
  const defaultPosition: LatLngTuple = [28.6448, 77.216721];
  const [markerPosition, setMarkerPosition] = useState<LatLngTuple | null>(
    defaultPosition
  );

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
        center={defaultPosition}
        zoom={13}
        scrollWheelZoom={false}
        className="z-0"
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationClickHandler onClick={(latlng) => setMarkerPosition(latlng)} />
        {markerPosition && (
          <Marker position={markerPosition}>
            <Popup>
              Latitude: {markerPosition[0]} <br />
              Longitude: {markerPosition[1]}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}
