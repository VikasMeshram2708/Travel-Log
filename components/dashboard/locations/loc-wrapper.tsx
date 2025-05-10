import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TripLog } from "@/types";
import { Calendar, MapPin, Plane } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function LocWrapper({ logs }: { logs: TripLog[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {logs?.map((log) => (
        <Link
          href={`/dashboard/locations/all/${log.id}`}
          key={log.id}
          className="group outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
        >
          <Card className="h-full border-l-2 border-l-primary hover:shadow-sm transition-shadow duration-200">
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

            <CardContent className="pb-2">
              <div className="flex flex-wrap gap-1 mb-3">
                {log.tags.slice(0, 3).map((tag, idx) => (
                  <Badge
                    variant="secondary"
                    key={idx}
                    className="text-xs capitalize font-normal"
                  >
                    {tag}
                  </Badge>
                ))}
                {log.tags.length > 3 && (
                  <Badge variant="outline" className="text-xs font-normal">
                    +{log.tags.length - 3}
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
    </ul>
  );
}
