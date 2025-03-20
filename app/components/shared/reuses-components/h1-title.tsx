import { cn } from "@/lib/utils";
import React from "react";
interface Props {
  className?: string;
  text: string
}

export const H1Title: React.FC<Props> = ({ className,text }) => {
  return <h1 className={cn("ml-5 mt-4 text-[30px]", className)}>{text}</h1>;
};
