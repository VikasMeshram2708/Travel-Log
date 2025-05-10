import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Calendar, MapPin, Plane, Plus } from "lucide-react";
import { notFound, redirect } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import LocHeader from "./loc-header";

export default async function TravelLogContainer() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  const user = await getUser();
  if (!user) {
    notFound();
  }

  const logs = await prisma.tripLog.findMany({
    orderBy: {
      createdAt: "desc",
    },
    where: {
      user: {
        email: user?.email as string,
      },
    },
    take: 4,
  });
  // console.log(logs[0]);

  return (
    <div className="">
      <LocHeader />

      <Suspense
        fallback={
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="h-44">
                <CardHeader className="pb-2">
                  <Skeleton className="h-5 w-24" />
                </CardHeader>
                <CardContent className="space-y-3">
                  <Skeleton className="h-4 w-20" />
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-14" />
                    <Skeleton className="h-6 w-14" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        }
      >
        {logs?.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 border border-dashed rounded bg-muted/20">
            <p className="text-muted-foreground mb-2">No trips recorded yet</p>
            <p>Select your place on map then click the Add Trip on top</p>
          </div>
        ) : (
          <div className="">
            <p className="text-base sm:text-lg hover:underline hover:underline-offset-4 py-5">
              <Link href="/dashboard/locations/all" className="">
                View All
              </Link>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {logs?.map((log) => (
                <Link
                  href={`/dashboard/locations/all/${log.id}`}
                  key={log.id}
                  className="group outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
                >
                  <Card className="h-44 border-l-2 border-l-primary hover:shadow-sm transition-shadow duration-200">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-1.5 text-base group-hover:text-primary transition-colors">
                        <Plane className="w-4 h-4 text-primary" />
                        <span className="truncate capitalize">{log.city}</span>
                      </CardTitle>
                      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        <span className="truncate">{log.country}</span>
                      </p>
                    </CardHeader>

                    <CardContent className="space-y-3 pb-2">
                      <div className="flex flex-wrap gap-1">
                        {log.tags.slice(0, 2).map((tag, idx) => (
                          <Badge
                            variant="secondary"
                            key={idx}
                            className="text-xs capitalize font-normal"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {log.tags.length > 2 && (
                          <Badge
                            variant="outline"
                            className="text-xs font-normal"
                          >
                            +{log.tags.length - 2}
                          </Badge>
                        )}
                      </div>

                      <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        {new Date(log.visitedOn).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Suspense>
    </div>
  );
}
