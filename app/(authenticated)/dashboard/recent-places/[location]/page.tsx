import UploadMediaBtn from "@/components/dashboard/upload-media-btn";
import MapComponent from "@/components/maps/map-component";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type LocationDetailsProps = {
  params: Promise<{
    location: string;
    lat: string;
    lng: string;
  }>;
};
export default async function LocationDetails({
  params,
}: LocationDetailsProps) {
  const { location } = await params;

  return (
    <div className="px-6 py-4 space-y-4">
      <h2 className="text-lg sm:text-xl font-bold">Location Details</h2>
      {/* <pre>{JSON.stringify(await params)}</pre> */}

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
            <BreadcrumbLink href="/dashboard/recent-places">
              Recent Places
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              <span className="capitalize">{location}</span>
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <UploadMediaBtn />

      <MapComponent />
    </div>
  );
}
