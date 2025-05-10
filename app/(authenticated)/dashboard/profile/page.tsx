import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import prisma from "@/lib/prisma";
import {
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { LogOut, MapPin, Globe, Calendar, FileText } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ProfilePage() {
  const { getUser } = getKindeServerSession();
  const kindeUser = await getUser();

  if (!kindeUser) throw notFound();

  const user = await prisma.user.findUnique({
    where: { email: kindeUser.email as string },
    include: {
      tripLogs: {
        orderBy: { createdAt: "desc" },
        take: 3,
      },
      _count: {
        select: { tripLogs: true },
      },
    },
  });

  if (!user) {
    return (
      <div className="">
        <Card>
          <CardHeader>
            <CardTitle>Welcome Traveler!</CardTitle>
            <CardDescription>
              Complete your registration to start logging your journeys.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full overflow-hidden border shadow">
          <Image
            src="https://picsum.photos/200"
            alt={user.name}
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-muted-foreground flex items-center gap-1">
            <Globe className="w-4 h-4" />
            {user._count.tripLogs}{" "}
            {user._count.tripLogs === 1 ? "Journey" : "Journeys"} logged
          </p>
        </div>
      </div>

      {/* Recent Travels */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Recent Travels
          </CardTitle>
          <CardDescription>Your most recent adventures</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {user.tripLogs.length > 0 ? (
            user.tripLogs.map((log) => (
              <div
                key={log.id}
                className="space-y-2 border-b pb-4 last:border-b-0 last:pb-0"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-base">{log.location}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(log.visitedOn).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                {log.notes && (
                  <p className="text-sm flex items-start gap-2 text-muted-foreground">
                    <FileText className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    {log.notes}
                  </p>
                )}
                {log.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {log.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-6 text-muted-foreground">
              No travels logged yet. Start your journey!
            </div>
          )}
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="hover:shadow-sm transition-shadow">
          <CardHeader className="pb-2">
            <CardDescription>Total Journeys</CardDescription>
            <CardTitle className="text-3xl">{user._count.tripLogs}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="hover:shadow-sm transition-shadow">
          <CardHeader className="pb-2">
            <CardDescription>Member Since</CardDescription>
            <CardTitle className="text-xl">
              {new Date(user.createdAt).toLocaleDateString("default", {
                month: "short",
                year: "numeric",
              })}
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
