"use client";
import { Activity, Archive } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const SideBarScope = () => {
  return (
    <nav className={`bg-zinc-950 grow flex flex-col justify-between py-8`}>
      <ul className="mx-8 flex flex-col gap-4">
        <li className="flex flex-row-reverse gap-4 items-center text-zinc-300 justify-end hover:text-violet-700 cursor-pointer duration-200">
          See your activity
          <Activity width={20} height={20} />
        </li>
        <li className="flex flex-row-reverse gap-4 items-center text-zinc-300 justify-end hover:text-violet-700 cursor-pointer duration-200">
          See your archives
          <Archive width={20} height={20} />
        </li>
        <li className="flex flex-row-reverse gap-4 items-center text-zinc-300 justify-end hover:text-violet-700 cursor-pointer duration-200">
          See your activity
          <Activity width={20} height={20} />
        </li>
      </ul>
      <Link
        href={"/account"}
        className="mx-8 py-2 flex items-center justify-start h-fit gap-4 cursor-pointer"
      >
        <Avatar className="duration-200 shadow-sm">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="text-zinc-300 duration-200">Username</p>
      </Link>
    </nav>
  );
};

export default SideBarScope;
