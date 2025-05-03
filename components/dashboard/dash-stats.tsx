import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookImage, Globe, MapPin } from "lucide-react";
import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound } from "next/navigation";

export default async function DashStats() {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  if (!user?.email) {
    throw notFound();
  }

  const stats = await prisma.travelLog.findMany({
    where: {
      userId: user?.id,
    },
  });

  //   total trips, countries visited, memories
  const countryStats = await prisma.travelLog.count({
    where: {
      User: {
        email: user?.email,
      },
    },
  });
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {/* <pre>{JSON.stringify(countryStats, null, 2)}</pre> */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Trips</CardTitle>
          <Globe className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{countryStats ?? 0}</div>
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
          <div className="text-2xl font-bold">12</div>
          <p className="text-xs text-muted-foreground">3 new this year</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Memories</CardTitle>
          <BookImage className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">156</div>
          <p className="text-xs text-muted-foreground">+32 this month</p>
        </CardContent>
      </Card>
    </div>
  );
}
