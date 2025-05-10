import { Button } from "@/components/ui/button";
import Fill from "./fill";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function NewMemoryForm() {
  return (
    <div className="">
      {/* Locations Details Filling Form */}
      <div className="space-y-4">
        <Button asChild variant={"outline"}>
          <Link href="/dashboard/locations">
            <ChevronLeft />
            Go Back
          </Link>
        </Button>
        <Fill />
      </div>
    </div>
  );
}
