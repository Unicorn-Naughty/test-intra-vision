import { cn } from "@/lib/utils";
import React from "react";
interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  name: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
}

export const TextArea: React.FC<TextareaProps> = ({
  className,
  name,
  value,
  onChange,
}) => {
  return (
    <div>
      <textarea
        placeholder={name}
        value={value}
        onChange={onChange}
        className={cn(
          "py-2 px-4 focus:outline-none focus:border-amber-400 placeholder:text-[14px] placeholder:text-gray-500 placeholder:leading-[1.714] rounded resize-none",
          className
        )}
      ></textarea>
    </div>
  );
};
