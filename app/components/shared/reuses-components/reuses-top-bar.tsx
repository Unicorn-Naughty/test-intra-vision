import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
interface Props {
  className?: string;
}

export const ReusesTopBar: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        `bg-[#d1e0ed]  shadow-[0px_0px_7px_rgba(0,0,0,0.2)]  p-4`,
        className
      )}
    >
      <label className="relative max-w-[680px]">
        <input
          className="border border-solid border-[#42aaff] outline-none w-[680px] pl-2 pr-10 h-10 rounded-[22px]   bg-white shadow-[0px_0px_7px_ rgba(0,140,240,0.15),inset_0px_1px_7px_rgba(0,0,0,0.11)]"
          type="text"
        />
        <Image
          className="absolute top-0 right-[15px]"
          src={"/applications-icons/noun_Search_449332.png"}
          alt="search icon"
          width={19}
          height={19}
        />
      </label>
    </div>
  );
};

