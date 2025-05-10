import DashBreadcrumb from "@/components/dashboard/dash-breadcrumb";
import DashSidebar from "@/components/dashboard/dash-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <DashSidebar />
      <main className="p-2 w-full flex flex-col relative min-h-screen gap-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <DashBreadcrumb />
        </div>

        <div className="flex-1 p-5">{children}</div>
      </main>
    </SidebarProvider>
  );
}
