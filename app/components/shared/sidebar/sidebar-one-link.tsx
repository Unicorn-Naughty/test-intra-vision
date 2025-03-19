import { TSidebarLink } from "@/app/constants/sidebar-nav";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props {
  className?: string;
  sideBarLink: TSidebarLink;
  path: string
}

export const SidebarOneLink: React.FC<Props> = ({ sideBarLink,path }) => {

  
  return (
    <li className={cn("px-3 py-3 transition",path === sideBarLink.path && "bg-[#002c49] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.15)]")}>
      <Link className="flex flex-col items-center justify-center " href={sideBarLink.path}>
        <Image
          src={sideBarLink.img}
          alt={sideBarLink.title}
          width={sideBarLink.w}
          height={sideBarLink.h}
        />
        <span className="text-white text-[12px] leading-1.2">{sideBarLink.title}</span>
      </Link>
    </li>
  );
};




