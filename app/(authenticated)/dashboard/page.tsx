import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import MemoryForm from "@/components/dashboard/memory-form";
import { Plus } from "lucide-react";
import { DashTravelChart } from "@/components/dashboard/dash-travel-chart";
// import DashStats from "@/components/dashboard/dash-stats";

export default function DashboardPage() {
  return (
    <div className="min-h-screen space-y-6 p-6">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="hover:text-primary">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard" className="text-primary">
              Dashboard
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

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
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2" size={"lg"}>
              <Plus className="h-5 w-5" />
              Add Memory
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-5xl">
            <DialogHeader>
              <DialogTitle className="text-center">
                Document Your Journey
              </DialogTitle>
            </DialogHeader>
            <MemoryForm />
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      {/* <DashStats /> */}
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
