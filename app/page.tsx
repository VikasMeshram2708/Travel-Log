import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="border shadow-lg flex flex-col space-y-4 items-center h-96 justify-center p-5 rounded-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold">
            Lorem ipsum dolor sit amet.
          </h2>
          <p className="text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, sequi.
          </p>
          <div className="flex items-center gap-x-4">
            <Link href="/dashboard">
              <Button variant={"outline"} className="cursor-pointer">
                Get Started
                <ArrowRight />
              </Button>
            </Link>
            <Link href="/">
              <Button>Explore</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
