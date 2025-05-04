"use client";
import React, { FormEvent, useRef, useState } from "react";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { toast } from "sonner";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button, buttonVariants } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { AlertCircle } from "lucide-react";

export default function PlacesActionBtn({
  tripId,
  tripName,
}: {
  tripId: string;
  tripName: string;
}) {
  const defaultName = tripName;
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const [locName, setLocName] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleDelete(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!locName.trim()) {
      toast.error("Name is required");
      return;
    }

    if (defaultName.trim().toLowerCase() === locName.trim().toLowerCase()) {
      setLoading(true);
      try {
        const response = await fetch("/api/trip", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ tripId }),
        });

        const json = await response.json();

        if (!response.ok) {
          toast.error(json?.message ?? "Failed");
          return;
        }

        toast.success("Memory removed");
        setLocName("");
        closeBtnRef.current?.click();
      } catch (e) {
        const err = e as unknown as Error;
        toast.error(err?.message ?? "Something went wrong. Deletion failed");
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Invalid name");
    }
  }

  return (
    <>
      <DropdownMenuItem asChild>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="destructive" className="w-full" size="sm">
              Delete
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <AlertCircle color="red" />
                Are you sure
              </DialogTitle>
              <DialogDescription>
                Please type{" "}
                <span className="text-sm font-bold text-red-500 capitalize">
                  {defaultName}
                </span>{" "}
                as it is.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleDelete} className="space-y-2">
              <Label htmlFor="confirm">
                <Input
                  name="confirm"
                  value={locName}
                  onChange={(e) => setLocName(e.target.value)}
                  type="text"
                  disabled={loading}
                  placeholder="Type title here as it is"
                />
              </Label>
              <Button disabled={loading || locName.length === 0} type="submit">
                {loading ? (
                  <span className="flex items-center gap-1">
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Confirm"
                )}
              </Button>
            </form>
            <DialogFooter className="flex items-center gap-3">
              <DialogClose
                ref={closeBtnRef}
                className={buttonVariants({ variant: "destructive" })}
              >
                Close
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => toast.info("Coming Soon!")}>
        Edit
      </DropdownMenuItem>
    </>
  );
}
