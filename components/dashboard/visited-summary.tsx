import React, { Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import prisma from "@/lib/prisma";
import ImageUpload from "./image-upload";

export default async function VisitedSummary() {
  const [count, places] = await Promise.all([
    prisma.travelLog.count({
      where: {
        userId: "157026ff-d8d3-47ee-8120-1c20018528f4",
      },
    }),
    prisma.travelLog.findMany({
      where: {
        userId: "157026ff-d8d3-47ee-8120-1c20018528f4",
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 10,
    }),
  ]);
  return (
    <div className="">
      <h2 className="py-5 text-lg sm:text-xl font-bold">Your Memories</h2>
      <Suspense fallback={<p>Loading...</p>}>
        {count > 10 ? (
          <ul className="space-y-4">
            {places.map((place) => (
              <Card key={place?.id}>
                <CardHeader>
                  <CardTitle>Your Memories at {place?.location}</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center gap-4">
                  {place?.mediaFiles?.map((elem, idx) => (
                    <Image
                      key={idx}
                      src={elem}
                      alt={place?.location ?? ""}
                      width={125}
                      height={125}
                      className="object-cover rounded-lg"
                    />
                  ))}
                </CardContent>
              </Card>
            ))}
          </ul>
        ) : (
          <>
            <p>Upload Your Memories here...</p>
            <ImageUpload />
          </>
        )}
      </Suspense>
    </div>
  );
}
