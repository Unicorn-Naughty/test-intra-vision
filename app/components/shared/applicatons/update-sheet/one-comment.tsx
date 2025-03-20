import Image from "next/image";
import React from "react";
interface Props {
  className?: string;
}

export const OneComment: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex  mb-5 gap-3">
        <Image
          src={"/avatar/12.jpg"}
          alt="avatar"
          width={50}
          height={50}
          className="rounded-[50%] mt-[-10px] w-[50px] h-[50px]"
        />
        <div>
          <div className="text-gray-600 text-sm leading-[1.2]">
            Иванов Александр
          </div>
          <span className="text-xs text-gray-500 leading-[1.2]">
            12 августа, 10:00 прокомментирировал
          </span>
          <p className="p-3 text-[14px] text-[#060606] leading-[1.286] rounded-md bg-gray-200 shadow-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            perferendis cum ducimus! Incidunt itaque facere fuga non sequi,
            rerum aliquam quia velit similique voluptas consectetur ipsam,
            adipisci, omnis officia aliquid.
          </p>
        </div>
      </div>
    </div>
  );
};


  