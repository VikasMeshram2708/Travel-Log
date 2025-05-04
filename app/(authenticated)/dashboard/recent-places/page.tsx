import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { EllipsisVertical, Globe, MapPin, Plane } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import PlacesActionBtn from "@/components/dashboard/places-action-btn";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export async function generateStaticProps() {
  const { getUser } = getKindeServerSession();
  const kindeUser = await getUser();

  if (!kindeUser) {
    throw notFound();
  }

  const user = await prisma.user.findUnique({
    where: { email: kindeUser.email as string },
    include: {
      tripLogs: {
        orderBy: { createdAt: "desc" },
        take: 4,
      },
      _count: {
        select: { tripLogs: true },
      },
    },
  });

  return user?.tripLogs?.map((travel) => ({
    location: travel?.location,
  }));
}

export default async function RecentPlaces() {
  const { getUser } = getKindeServerSession();
  const kindeUser = await getUser();

  if (!kindeUser) {
    throw notFound();
  }

  const user = await prisma.user.findUnique({
    where: { email: kindeUser.email as string },
    include: {
      tripLogs: {
        orderBy: { createdAt: "desc" },
        take: 4,
      },
      _count: {
        select: { tripLogs: true },
      },
    },
  });

  return (
    <div className="space-y-6">
      <SidebarTrigger />
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
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Globe className="w-5 h-5" />
          Recent Travels
        </h2>
        {Number(user?._count.tripLogs) > 4 && (
          <Button variant="ghost" className="text-sm">
            View All
          </Button>
        )}
      </div>

      <Suspense fallback={<RecentPlacesFallback />}>
        {user?.tripLogs && user.tripLogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {user.tripLogs.map((travel) => (
              <Card
                key={travel.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2 capitalize">
                      <MapPin className="w-4 h-4 text-primary" />
                      {travel.location}
                    </CardTitle>
                    <CardDescription>
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <EllipsisVertical />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuLabel>My Account</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <PlacesActionBtn
                            tripId={travel.id ?? ""}
                            tripName={travel.location}
                          />
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link
                    href={`/dashboard/recent-places/${encodeURIComponent(
                      travel.location.toLowerCase().replace(/\s+/g, "-")
                    )}?lat=${encodeURIComponent(
                      travel.latitude
                    )}&lng=${encodeURIComponent(
                      travel.longitude
                    )}&tlId=${encodeURIComponent(travel.id)} `}
                  >
                    <p className="text-sm text-muted-foreground">
                      {travel.visitedOn.toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg">
            <Plane className="w-10 h-10 mb-4 text-muted-foreground" />
            <h3 className="text-lg font-medium">No recent travels</h3>
            <p className="text-sm text-muted-foreground text-center mt-2">
              Your recent travel locations will appear here
            </p>
            <Link href="/dashboard">
              <Button variant="outline" className="mt-4 cursor-pointer">
                Add a trip
              </Button>
            </Link>
          </div>
        )}
      </Suspense>
    </div>
  );
}

function RecentPlacesFallback() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Skeleton key={idx} className="h-36 w-full" />
      ))}
    </div>
  );
}
