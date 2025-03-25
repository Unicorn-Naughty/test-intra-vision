import { cn } from "@/lib/utils";
import React from "react";
import { ReusesTopBar } from "./reuses-top-bar";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Container: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={cn("flex flex-col w-full", className)}>
      <ReusesTopBar className="mb-7" />
      <div className="flex-grow mb-[20px] mt-[100px]">{children}</div>
      {/* <ReusesBottomBar className="mt-16" /> */}
    </div>
  );
};
