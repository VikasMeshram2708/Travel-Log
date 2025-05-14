import { Button } from "@/components/ui/button";
import DashStats from "@/components/dashboard/dash-stats";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound, redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import DashTravelChart from "@/components/dashboard/dash-travel-chart";
import Link from "next/link";

export default async function DashboardPage() {
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
  return (
    <div className="min-h-screen space-y-6">
      {/* <pre>{JSON.stringify(logs, null, 2)}</pre> */}
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
      </div>

      {/* Stats Cards */}
      <DashStats />
      {/* Recent Places Section */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Recent Adventures</h2>
          <Button variant="ghost" className="text-primary">
            <Link href="/dashboard/locations/all">
              View All
            </Link>
          </Button>
        </div>
        {/* <RecentPlaces /> */}
        <DashTravelChart logs={logs} />
      </div>
    </div>
  );
}
