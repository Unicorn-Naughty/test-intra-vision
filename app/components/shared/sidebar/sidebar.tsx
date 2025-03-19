"use client";
import { sidebarNavConstants } from "@/app/constants/sidebar-nav";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { SidebarOneLink } from "./sidebar-one-link";
import { usePathname } from "next/navigation";
interface Props {
  className?: string;
}

export const Sidebar: React.FC<Props> = ({ className }) => {
  const path = usePathname();

  return (
    <header
      className={cn(
        "bg-[#002137] flex flex-col items-center gap-10 py-5 min-w-[95px]",
        className
      )}
    >
      <div>
        <Image
          alt="logo"
          src={"/sidebar-icons/logo.png"}
          width={52}
          height={44}
        />
      </div>
      <nav>
        <ul className="flex flex-col gap-2">
          {sidebarNavConstants.map((sideBarLink, i) => (
            <SidebarOneLink path={path} key={i} sideBarLink={sideBarLink} />
          ))}
        </ul>
      </nav>
    </header>
  );
};
