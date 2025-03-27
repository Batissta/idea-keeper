import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="bg-zinc-950 max-h-dvh overflow-hidden flex justify-stretch w-screen">
      <AppSidebar />
      <main>{children}</main>
      <div className="bg-zinc-950 w-8 h-screen"></div>
    </SidebarProvider>
  );
}
