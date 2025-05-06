import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookImage, Globe, MapPin } from "lucide-react";
import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound } from "next/navigation";

export default async function DashStats() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user?.email || !user.id) {
    throw notFound();
  }

  const tripLogs = await prisma.tripLog.findMany({
    where: {
      user: {
        email: user?.email,
      },
    },
    select: {
      id: true,
      country: true,
    },
  });

  // Unique countries visited
  const uniqueCountries = new Set(tripLogs.map((trip) => trip.country));
  const countryCnt = uniqueCountries.size;

  const tripsCnt = tripLogs.length;

  // Get all tripLogIds to count associated media files
  const tripLogIds = tripLogs.map((trip) => trip.id);

  const memoryCnt = await prisma.mediaFile.count({
    where: {
      tripLogId: {
        in: tripLogIds,
      },
    },
  });

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Trips</CardTitle>
          <Globe className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{tripsCnt}</div>
          <p className="text-xs text-muted-foreground">+5 from last year</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">
            Countries Visited
          </CardTitle>
          <MapPin className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{countryCnt}</div>
          <p className="text-xs text-muted-foreground">3 new this year</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Memories</CardTitle>
          <BookImage className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{memoryCnt}</div>
          <p className="text-xs text-muted-foreground">+32 this month</p>
        </CardContent>
      </Card>
    </div>
  );
}
