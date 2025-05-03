import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

  if (!kindeUser) {
    throw notFound();
  }

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
      <div className="max-w-md mx-auto px-4 py-8">
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
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
      {/* Profile Header */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow">
          <Image
            src={"https://picsum.photos/200"}
            alt={user.name}
            width={64}
            height={64}
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
        <CardContent className="space-y-4">
          {user.tripLogs.length > 0 ? (
            user.tripLogs.map((log) => (
              <div
                key={log.id}
                className="border-b pb-4 last:border-b-0 last:pb-0"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{log.location}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(log.visitedOn).toLocaleDateString()}
                    </p>
                  </div>
                  {Array.from({ length: 4 }).map((_, idx) => (
                    <div
                      key={idx}
                      className="w-12 h-12 rounded-md overflow-hidden"
                    >
                      <Image
                        src="https://picsum.photos/200/"
                        alt={log.location}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  {/* {log.mediaFiles.length > 0 && (
                    <div className="w-12 h-12 rounded-md overflow-hidden">
                      <Image
                        src={log.mediaFiles[0]}
                        alt={log.location}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )} */}
                </div>
                {log.notes && (
                  <p className="text-sm mt-2 flex items-start gap-2">
                    <FileText className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{log.notes}</span>
                  </p>
                )}
                {log.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
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

      {/* Actions */}
      <div className="flex justify-end">
        <LogoutLink>
          <Button variant="ghost" className="flex items-center gap-2">
            <LogOut className="w-4 h-4" />
            Sign Out
          </Button>
        </LogoutLink>
      </div>
    </div>
  );
}
