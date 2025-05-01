import Link from "next/link";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="bg-background w-full border-b shadow">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-xl sm:text-2xl font-semibold">Travel Log</h1>
        </Link>
        <div className="flex items-center gap-x-4">
          <Button variant={"ghost"}>Login</Button>
          <Button>Register</Button>
        </div>
      </div>
    </nav>
  );
}
