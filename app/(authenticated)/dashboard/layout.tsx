import DashSidebar from "@/components/dashboard/dash-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <DashSidebar />
      <main className="w-screen flex flex-col h-screen relative">
        <div className="flex-1 p-5">{children}</div>
      </main>
    </SidebarProvider>
  );
}
