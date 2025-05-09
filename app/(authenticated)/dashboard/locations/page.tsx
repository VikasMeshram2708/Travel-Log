import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import MapComponent from "@/components/maps/map-component";
import SearchLocation from "@/components/maps/search-location";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import AddNewBtn from "./add-new-btn";

export default function RecentPlaces() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <SidebarTrigger />
            </TooltipTrigger>
            <TooltipContent>
              <p>Toggle Sidebar</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard/locations">
                Locations
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Search bar and add new location button */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <SearchLocation />
        </div>
        <AddNewBtn />
      </div>

      {/* Map Component */}
      <MapComponent />
    </div>
  );
}
