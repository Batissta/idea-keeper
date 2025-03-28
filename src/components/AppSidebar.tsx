import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import SideBarScope from "./SidebarScope";
import Link from "next/link";

export function AppSidebar() {
  return (
    <Sidebar className="relative flex flex-col justify-self-start">
      <SidebarHeader className="bg-zinc-950 py-12 px-6 border-none border-transparent">
        <Link
          href={"/"}
          className="text-sm text-purple-600 font-bold bg-gradient-to-br from-purple-100 via-purple-300 to-purple-200 py-1 px-1 text-center rounded-2xl border border-zinc-600 cursor-pointer hover:from-purple-700 hover:via-purple-900 hover:to-purple-700 transition duration-200"
        >
          the editor for developers
        </Link>
      </SidebarHeader>
      <SidebarContent className="bg-zinc-950 border-transparent">
        <SideBarScope />
      </SidebarContent>
      <SidebarFooter className="bg-zinc-950 border-transparent" />
    </Sidebar>
  );
}
