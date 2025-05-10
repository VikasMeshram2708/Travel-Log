import { Button } from "@/components/ui/button";
import { DashTravelChart } from "@/components/dashboard/dash-travel-chart";
import DashStats from "@/components/dashboard/dash-stats";

export default function DashboardPage() {
  return (
    <div className="min-h-screen space-y-6">
      {/* Welcome Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Travel Dashboard
          </h1>
          <p className="text-muted-foreground">
            Your personal travel memories and statistics
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <DashStats />
      {/* Recent Places Section */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Recent Adventures</h2>
          <Button variant="ghost" className="text-primary">
            View All
          </Button>
        </div>
        {/* <RecentPlaces /> */}
        <DashTravelChart />
      </div>
    </div>
  );
}
