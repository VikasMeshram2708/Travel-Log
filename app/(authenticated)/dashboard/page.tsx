import VisitedSummary from "@/components/dashboard/visited-summary";
import MapComponent from "@/components/maps/map-component";
import { Card, CardContent } from "@/components/ui/card";
import { recentlyVisited } from "@/data";

export default function DashboardPage() {
  return (
    <div className="min-h-screen w-full">
      {/* Tiles showing for recently visited places */}
      {/* <DashSidebar /> */}
      <h2 className="text-lg sm:text-xl font-bold">Recently Visited Places</h2>
      <ul className="flex items-center gap-4 py-5">
        {recentlyVisited.map((item) => (
          <Card key={item.title}>
            <CardContent>
              <p className="capitalize">{item.title}</p>
            </CardContent>
          </Card>
        ))}
      </ul>
      <MapComponent />
      <VisitedSummary />
    </div>
  );
}
