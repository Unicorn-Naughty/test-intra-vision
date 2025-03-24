"use client";
import React from "react";
import { CreateSheet } from "./create-sheet";
import { UpdateSheet } from "./update-sheet/update-sheet";
import { TaskDTO } from "@/app/types/TaskDTO";
import { cn } from "@/lib/utils";
import { tableHeaderths } from "@/app/constants/tableHeaderths";
import { prioritiesStore } from "@/app/store/priotrities-store";

interface Props {
  className?: string;
  tasks: TaskDTO[];
  loading: boolean;
}

export const ApplicationContent: React.FC<Props> = ({
  className,
  tasks,
  loading,
}) => {
  const prioStore = prioritiesStore((state) => state);
  const [openUpdateSheet, setOpenUpdateSheet] = React.useState(false);
  const [selectedTask, setSelectedTask] = React.useState(0);

  const handleOpenUpdateSheet = (task: TaskDTO) => {
    setSelectedTask(task.id);
    setOpenUpdateSheet(true);
  };
  console.log(prioStore.priorities);

  const getPriorityColor = (priorityId: number) => {
    const neededColor = prioStore.priorities.find(
      (item) => item.id === priorityId
    )?.rgb;
    return neededColor ? neededColor : "";
  };

  return (
    <div className={className}>
      {loading ? (
        <div className="text-center text-[30px]">Загрузка</div>
      ) : (
        <>
          <CreateSheet />
          <table className="w-full text-[16px] text-gray-800">
            <thead className="">
              <tr className="text-left ">
                {tableHeaderths.map((item, i) => (
                  <th
                    className={cn(
                      "border-b-2 px-6 py-3 relative",
                      item.className
                    )}
                    key={i}
                  >
                    {item.name}
                    <span className="absolute bottom-[12px]  right-0 w-[1px] h-[22px] bg-gray-300"></span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, i) => (
                <tr
                  key={i}
                  onClick={() => handleOpenUpdateSheet(task)}
                  className="text-left "
                >
                  <td className="border-b px-6 py-3 pl-10 relative">
                    {task.id.toLocaleString()}
                    <span style={{backgroundColor: getPriorityColor(task.priorityId)}} className="absolute w-[5px] h-[calc(100%-2px)] bottom-0 left-[3px] "></span>
                  </td>
                  <td className="border-b px-6 py-3">
                    {task.name.length > 75
                      ? `${task.name.slice(0, 74)}...`
                      : task.name}
                  </td>
                  <td className={cn(`border-b px-6 py-3 `)}>
                    <span
                      className="text-white rounded-[15px] py-1 px-2 max-w-[340px] whitespace-nowrap"
                      style={{ backgroundColor: task.statusRgb }}
                    >
                      {task.statusName}
                    </span>
                  </td>
                  <td className="border-b px-6 py-3">{task.executorName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      <UpdateSheet
        open={openUpdateSheet}
        handleOpenChange={() => setOpenUpdateSheet(false)}
        postId={Number(selectedTask)}
      />
    </div>
  );
};
