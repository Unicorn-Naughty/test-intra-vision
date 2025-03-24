import Image from "next/image";
import React from "react";
interface Props {
  className?: string;
  name: string;
  text: string;
}

export const UpdateSheetItem: React.FC<Props> = ({ className, text, name }) => {
  const formatTags = (name: string) => {
    if (name === "Теги") {
      const arr = text.split(",");

      return arr
        .sort((a, b) => a.length - b.length)
        .map((item, i) => (
          <div
            className="border border-gray-400 px-2 bg-white rounded-[15px] w-full"
            key={i}
          >
            {item}
          </div>
        ));
    }
    return text;
  };
  return (
    <div className={className}>
      <div className={`text-[14px] text-[#a09fa8] leading-[1.714]`}>{name}</div>
      <div className="text-sm inline-flex  text-[rgb(3,3,3)] leading-[1.714] whitespace-nowrap items-center gap-1">
        {name === "Срок" ? <>
        <Image alt="calendar-img" src={'updateModal/noun_Calendar_24186.svg'} width={18} height={15}/>
        <div className="ml-1">{formatTags(name)}</div>
        </> : formatTags(name)}
      </div>
    </div>
  );
};
