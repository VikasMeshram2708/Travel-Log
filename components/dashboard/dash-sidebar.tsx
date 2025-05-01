import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { dashData } from "@/data";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";

export default function DashSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard Page</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <ul className="space-y-4">
                {dashData?.map((item) => (
                  <Link href={item?.href} key={item?.title}>
                    <Card>
                      <CardContent className="flex items-center gap-x-4">
                        {item?.icon}
                        <p className="capitalize">{item?.title}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </ul>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
