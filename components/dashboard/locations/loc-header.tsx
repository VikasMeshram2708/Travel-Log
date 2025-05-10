"use client";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/store";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function LocHeader() {
  const { addNewLocation } = useStore();
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-medium">Recent Trips</h2>
      {addNewLocation ? (
        <Button
          asChild
          size="sm"
          variant={"outline"}
          className="gap-1 text-sm border border-pink-500 to-yellow-500"
        >
          <Link href="/dashboard/locations/new">
            <Plus className="h-4 w-4" />
            <span>Add trip</span>
          </Link>
        </Button>
      ) : (
        ""
      )}
    </div>
  );
}
