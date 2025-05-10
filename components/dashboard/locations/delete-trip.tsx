"use client";
import { DeleteTripLog } from "@/app/dal/actions";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { notFound } from "next/navigation";
import React, { useRef } from "react";

export default function DeleteTrip({ tripId }: { tripId: string }) {
  if (!tripId) return notFound();
  const closeRef = useRef<HTMLButtonElement | null>(null);
  async function handleDelete() {
    try {
      const result = await DeleteTripLog({ tripId });
      if (!result.success) {
        alert(result.message ?? "Failed");
        return;
      }
      alert("Deleted");
      return;
    } catch (e) {
      console.error(e);
      alert((e as Error).message ?? "Something went wrong. Try again later");
      return;
    } finally {
      closeRef.current?.click();
    }
  }
  return (
    <>
      <Button onClick={handleDelete} type="button" variant={"destructive"}>
        Confirm
      </Button>
      <DialogClose ref={closeRef}>Close</DialogClose>
    </>
  );
}
