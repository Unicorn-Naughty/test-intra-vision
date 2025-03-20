import React from "react";
interface Props {
  className?: string;
  name: string;
  text: string;
}

export const UpdateSheetItem: React.FC<Props> = ({ className, text, name }) => {
  return (
    <div className={className}>
      <div className={`text-[14px] text-[#a09fa8] leading-[1.714]`}>{name}</div>
      <div className="text-sm text-[rgb(3,3,3)] leading-[1.714]">{text}</div>
    </div>
  );
};
