import MapComponent from "@/components/maps/map-component";
import LocContainer from "@/components/dashboard/locations/loc-container";

export default function RecentPlaces() {
  return (
    <div className="min-h-screen space-y-6">
      {/* Map Component */}
      <MapComponent />
      {/* Locations Container */}
      <LocContainer />
    </div>
  );
}
