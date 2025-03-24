import { TaskLifetimeItemDTO } from "@/app/types/TaskLifetimeItemDTO";
import { formatDateMonthDD } from "@/lib/format-date";
import DOMPurify from "dompurify";
import Image from "next/image";
import React from "react";
interface Props {
  className?: string;
  comment: TaskLifetimeItemDTO;
}

export const OneComment: React.FC<Props> = ({ className, comment }) => {
  const sanitizedText = DOMPurify.sanitize(comment.comment);
  return (
    <>
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
            {comment.userName}
          </div>
          <span className="text-xs text-gray-500 leading-[1.2]">
            {`${formatDateMonthDD(comment.createdAt)} прокомментировал(-а)`}
          </span>
          
          <p dangerouslySetInnerHTML={{ __html:sanitizedText }} className="p-3 text-[14px] text-[#060606] leading-[1.286] rounded-md bg-gray-200 shadow-sm">
          </p>
        </div>
      </div>
    </div>
    
    </>
  );
};
