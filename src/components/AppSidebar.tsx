import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import SideBarScope from "./SidebarScope";

export function AppSidebar() {
  return (
    <Sidebar className="relative flex flex-col justify-self-start">
      <SidebarHeader className="bg-zinc-950 py-12 px-6 border-none border-transparent">
        <h2 className="text-sm text-zinc-200 bg-zinc-800 py-1 px-1 text-center rounded-2xl border border-zinc-600">
          the editor for developers
        </h2>
      </SidebarHeader>
      <SidebarContent className="bg-zinc-950 border-transparent">
        <SideBarScope />
      </SidebarContent>
      <SidebarFooter className="bg-zinc-950 border-transparent" />
    </Sidebar>
  );
}
