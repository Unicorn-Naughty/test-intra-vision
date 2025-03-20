'use client'
import React from "react";
import { CreateSheet } from "./create-sheet";
import { UpdateSheet } from "./update-sheet/update-sheet";

interface Props {
  className?: string;
}

export const ApplicationContent: React.FC<Props> = ({ className }) => {

  const [openUpdateSheet, setOpenUpdateSheet] = React.useState(false);

  const handleOpenUpdateSheet = ()=> setOpenUpdateSheet(!openUpdateSheet)

  return (
    <div className={className}>
      <CreateSheet />
      <table className="w-full text-[16px] text-gray-800">
        <thead>
          <tr className="text-left">
            <th className="border-b-2 p-2 w-[100px] pl-10 ">ID</th>
            <th className="border-b-2 p-2 w-[420px]">Название</th>
            <th className="border-b-2 p-2 w-[120px]">Статус</th>
            <th className="border-b-2 p-2">Исполнитель</th>
          </tr>
        </thead>
        <tbody onClick={handleOpenUpdateSheet}>
          <tr className="text-left">
            <td  className="border-b p-2 pl-10">5000</td>
            <td className="border-b p-2">Example Task</td>
            <td className="border-b p-2">In Progress</td>
            <td className="border-b p-2">John Doe</td>
          </tr>
        </tbody>
      </table>
      <UpdateSheet open={openUpdateSheet} handleOpenChange={handleOpenUpdateSheet}/>
    </div>
  );
};
