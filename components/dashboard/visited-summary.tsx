import { imageGallery } from "@/data";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";

export default function VisitedSummary() {
  return (
    <div className="">
      <h2 className="py-5 text-lg sm:text-xl font-bold">Your Memories</h2>
      <ul className="space-y-4">
        {imageGallery.map((memory) => (
          <Card key={memory?.title}>
            <CardHeader>
              <CardTitle>Your Memories at {memory?.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
              {memory?.imageUrls?.map((elem, idx) => (
                <Image
                  key={idx}
                  src={elem}
                  alt={memory?.title}
                  width={125}
                  height={125}
                  className="object-cover rounded-lg"
                />
              ))}
            </CardContent>
          </Card>
        ))}
      </ul>
    </div>
  );
}
