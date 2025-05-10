import React, { Suspense } from "react";
import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound, redirect } from "next/navigation";

import LocWrapper from "@/components/dashboard/locations/loc-wrapper";
import { Loader2, Plane } from "lucide-react";

/**
 * This page shows all the records of trips for a user
 */
export default async function AllPage() {
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
  });

  const count = await prisma.tripLog.count({
    where: {
      user: {
        email: user?.email as string,
      },
    },
  });

  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">All Trip Logs</h1>
          <p className="text-muted-foreground">
            Browse and search through all your travel adventures
          </p>
        </div>
      </div>

      <Suspense
        fallback={
          <div className="flex items-center gap-3">
            <Loader2 className="animate-spin" />
            <p>Loading...</p>
          </div>
        }
      >
        {count > 0 ? (
          <LocWrapper logs={logs} />
        ) : (
          <div className="flex items-center justify-center gap-4">
            <Plane />
            <p>You {"don't"} have any Trips</p>
          </div>
        )}
      </Suspense>
    </div>
  );
}
