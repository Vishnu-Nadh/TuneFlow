"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";
import { Song } from "../../types";
import { twMerge } from "tailwind-merge";
import usePlayer from "@/actions/usePlayer";

interface SidebarProps {
  children: React.ReactNode;
  songs: Song[];
}

const Sidebar: React.FC<SidebarProps> = ({ children, songs }) => {
  const pathname = usePathname();
  const player = usePlayer();
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  );

  return (
    <nav className={twMerge(`flex h-screen`, player.activeId && "h-[calc(100vh-80px)]")}>
      <div className="hidden md:flex flex-col p-2 pr-0 gap-y-2 h-full w-[300px]">
        <Box>
          <div className="flex flex-col gap-y-4 py-4">
            {routes.map((route) => (
              <SidebarItem key={route.label} {...route} />
            ))}
          </div>
        </Box>
        <Box className="h-full overflow-y-auto">
          <Library songs={songs} />
        </Box>
      </div>
      <main className="h-full w-full flex overflow-y-auto p-2 overflow-hidden">{children}</main>
    </nav>
  );
};

export default Sidebar;
