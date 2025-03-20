import { cn } from "@/lib/utils";
import React from "react";
interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
}

export const TextArea: React.FC<TextareaProps> = ({
  className,
  name,
  value,
  onChange,
}) => {
  return (
    <div>
      <div className="mb-4 text-[14px] text-gray-500 leading-[1.714]">
        {name}
      </div>
      <textarea
        value={value}
        onChange={onChange}
        className={cn(
          "py-2 px-4 border border-gray-300 rounded bg-gray-100 resize-none",
          className
        )}
      ></textarea>
    </div>
  );
};
