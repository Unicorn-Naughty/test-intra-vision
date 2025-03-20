import { cn } from "@/lib/utils";
import React from "react";
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  className?: string;
  text: string;
}
export const Button: React.FC<ButtonProps> = ({
  className,
  text,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        "rounded-[22px] bg-[#008cf0] cursor-pointer text-white transition hover:opacity-80",
        className
      )}
    >
      {text}
    </button>
  );
};
