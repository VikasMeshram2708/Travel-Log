import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound, redirect } from "next/navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  MapPin,
  Tag,
  NotebookText,
  Flag,
  Navigation,
  Globe,
  Image as ImageIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { Separator } from "@/components/ui/separator";
import UploadMediaBtn from "@/components/dashboard/upload-media-btn";
import Image from "next/image";

type DetailsPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const { getUser } = getKindeServerSession();

  const user = await getUser();
  const logs = await prisma.tripLog.findMany({
    where: {
      user: {
        email: user?.email as string,
      },
    },
  });

  return logs?.map((log) => ({
    id: log.id,
  }));
}

export default async function DetailsPage({ params }: DetailsPageProps) {
  const { id } = await params;
  if (!id) return notFound();

  const { getUser, isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  const user = await getUser();
  if (!user) return notFound();

  const log = await prisma.tripLog.findUnique({
    where: { id },
  });

  if (!log) return notFound();

  const medias = await prisma.mediaFile.findMany({
    where: {
      tripLogId: log.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const durationValue = log.duration.split("Value - ")[1];

  return (
    <div className="">
      <div className="flex flex-col gap-6">
        {/* Header Section */}
        <div className="flex items-center gap-2 justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Trip Details</h1>
            <p className="text-muted-foreground">
              Comprehensive overview of your travel experience
            </p>
          </div>
          <UploadMediaBtn tripId={log.id} />
        </div>

        <Card className="overflow-hidden">
          {/* Destination Header */}
          <CardHeader className="bg-muted/50 pb-4">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl">
                  {log.city}, {log.country}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {format(new Date(log.visitedOn), "MMMM yyyy")}
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Location Details */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-lg font-medium">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h3>Location Details</h3>
                  </div>
                  <div className="space-y-2 pl-7">
                    <p className="font-medium">{log.location}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Navigation className="h-4 w-4" />
                      <span>
                        {log.latitude}, {log.longitude}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Trip Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-lg font-medium">
                    <Flag className="h-5 w-5 text-primary" />
                    <h3>Trip Information</h3>
                  </div>
                  <div className="space-y-4 pl-7">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Visited On
                      </p>
                      <p className="font-medium">
                        {format(new Date(log.visitedOn), "MMMM d, yyyy")}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-medium">{durationValue} days</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Tags */}
                {log.tags && log.tags.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-lg font-medium">
                      <Tag className="h-5 w-5 text-primary" />
                      <h3>Categories</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-7">
                      {log.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="px-3 py-1 text-sm"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Notes */}
                {log.notes && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-lg font-medium">
                      <NotebookText className="h-5 w-5 text-primary" />
                      <h3>Notes</h3>
                    </div>
                    <div className="rounded-lg border p-4 bg-muted/10 pl-7">
                      <p className="whitespace-pre-line text-justify">
                        {log.notes}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>

          <Separator className="my-4" />

          {/* Media Gallery */}
          {medias.length > 0 && (
            <CardContent className="pt-0">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-lg font-medium">
                  <ImageIcon className="h-5 w-5 text-primary" />
                  <h3>Media Gallery</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pl-7">
                  {medias.map((media) => (
                    <div
                      key={media.id}
                      className="relative w-full h-56 rounded-lg overflow-hidden border"
                    >
                      <Image
                        src={media.url}
                        alt={`Trip media ${media.id}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={false}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          )}
          <Separator className="my-4" />

          {/* Footer */}
          <CardFooter className="flex flex-col items-start gap-2 text-sm text-muted-foreground pb-6 px-6">
            <div className="flex gap-4">
              <p>
                Created:{" "}
                {format(new Date(log.createdAt), "MMM d, yyyy 'at' h:mm a")}
              </p>
              <p>
                Updated:{" "}
                {format(new Date(log.updatedAt), "MMM d, yyyy 'at' h:mm a")}
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
