"use client";
import LocDetailsForm from "@/components/maps/loc-details-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useStore } from "@/store/store";

import { PlusIcon } from "lucide-react";

export default function AddNewBtn() {
  const { openDialog } = useStore();
  return (
    <>
      <Dialog open={openDialog}>
        <DialogTrigger asChild>
          <div className="relative mt-4 inline-block rounded-lg p-[2px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            <Button
              type="button"
              className="cursor-pointer bg-background hover:bg-muted text-foreground rounded-md px-6 py-2 font-semibold transition-colors duration-300 w-full"
            >
              <PlusIcon className="mr-2" />
              New Memory
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold">
              Create a New Travel Memory
            </DialogTitle>
          </DialogHeader>
          <LocDetailsForm />
        </DialogContent>
      </Dialog>
    </>
  );
}
