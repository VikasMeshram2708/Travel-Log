import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Globe, MapPin, Plane } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

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
    <div className="px-4 py-6 space-y-6">
      {/* <pre>{JSON.stringify(user?.tripLogs, null, 2)}</pre> */}
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
              <Link
                key={travel.id}
                href={`/dashboard/recent-places/${encodeURIComponent(
                  travel.location.toLowerCase().replace(/\s+/g, "-")
                )}?lat=${encodeURIComponent(
                  travel.latitude
                )}&lng=${encodeURIComponent(
                  travel.longitude
                )}&tlId=${encodeURIComponent(travel.id)} `}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2 capitalize">
                      <MapPin className="w-4 h-4 text-primary" />
                      {travel.location}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      {travel.visitedOn.toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </CardContent>
                </Card>
              </Link>
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
