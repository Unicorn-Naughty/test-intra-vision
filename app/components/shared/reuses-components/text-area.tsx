import { cn } from "@/lib/utils";
import React from "react";
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{
  className?: string;
  name: string;
}

export const TextArea: React.FC<TextareaProps> = ({ className, name }) => {
  return (
    <div>
      <div className="mb-4 text-[14px] text-gray-500 leading-[1.714]">
        {name}
      </div>
      <textarea
        className={cn(
          "py-2 px-4 border border-gray-300 rounded bg-gray-100 resize-none",
          className
        )}
      ></textarea>
    </div>
  );
};
