import VisitedSummary from "@/components/dashboard/visited-summary";
import MapComponent from "@/components/maps/map-component";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { recentlyVisited } from "@/data";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import MemoryForm from "@/components/dashboard/memory-form";

export default function DashboardPage() {
  return (
    <div className="min-h-screen w-full">
      {/* Tiles showing for recently visited places */}
      {/* <DashSidebar /> */}
      <h2 className="text-lg sm:text-xl font-bold pb-5">
        Recently Visited Places
      </h2>

      <Dialog>
        <DialogTrigger asChild>
          <Button>Add Memory</Button>
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>Add Memories of your Journey</DialogTitle>
            <DialogDescription asChild>
              <MemoryForm />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

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
