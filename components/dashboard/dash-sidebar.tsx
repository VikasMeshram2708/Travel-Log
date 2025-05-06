import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { dashData } from "@/data";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { LogOut } from "lucide-react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { cn } from "@/lib/utils";

export default function DashSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg sm:text-xl md:text-2xl font-semibold">
            <Link href="/">Travel Logs</Link>
          </SidebarGroupLabel>
          <SidebarGroupContent className="py-5">
            <SidebarMenu>
              {dashData.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.href}>
                      {item?.icon}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarFooter>
          <LogoutLink
            className={cn(buttonVariants({ variant: "destructive" }), "")}
          >
            <LogOut />
            Logout
          </LogoutLink>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}
