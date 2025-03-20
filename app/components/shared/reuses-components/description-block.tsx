
import React from "react";
interface Props {
  className?: string;
  name: string;
  text: string;
}

export const DescriptionBlock: React.FC<Props> = ({
  className,
  name,
  text,
}) => {
  return (
    <div className={className}>
      <div className="mb-2 text-[14px] text-gray-500 leading-[1.714]">
        {name}
      </div>
      <div className="text-[14px] text-gray-800 leading-5">{text}</div>
    </div>
  );
};


  