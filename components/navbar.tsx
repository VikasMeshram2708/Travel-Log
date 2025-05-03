import Link from "next/link";
import { Button } from "./ui/button";
import {
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { LogOut } from "lucide-react";

export async function Navbar() {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    return (
      <nav className="bg-background w-full border-b shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <h1 className="text-xl sm:text-2xl font-semibold">Travel Log</h1>
          </Link>
          <div className="flex items-center gap-x-4">
            <Link href="/api/auth/login">
              <Button variant={"ghost"}>Login</Button>
            </Link>
            <Link href="/api/auth/register">
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
  return (
    <nav className="bg-background w-full border-b shadow">
      <div
        className="max-w-7xl
       mx-auto px-6 py-4 flex items-center justify-between"
      >
        <Link href="/">
          <h1 className="text-xl sm:text-2xl font-semibold">Travel Log</h1>
        </Link>
        <LogoutLink className="flex items-center gap-x-1">
          <LogOut />
          Logout
        </LogoutLink>
      </div>
    </nav>
  );
}
