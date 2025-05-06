import Link from "next/link";
import { Button } from "./ui/button";
import {
  getKindeServerSession,
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export async function Navbar() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();
  if (!(await isAuthenticated())) {
    return (
      <nav className="bg-background w-full border-b shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <h1 className="text-xl sm:text-2xl font-semibold">Travel Log</h1>
          </Link>
          <div className="flex items-center gap-x-4">
            <LoginLink postLoginRedirectURL="/dashboard">
              <Button variant={"ghost"}>Login</Button>
            </LoginLink>
            <RegisterLink>
              <Button>Register</Button>
            </RegisterLink>
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

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              src="https://picsum.photos/200/"
              alt={user?.given_name as string}
              width={25}
              height={25}
              className="w-full h-full rounded-full"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <span>
                <Link href="/dashboard">Dashboard</Link>
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>
                <Link href="/dashboard/profile">Profile</Link>
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogoutLink className="flex items-center gap-x-1">
                <LogOut />
                Logout
              </LogoutLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
