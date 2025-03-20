"use client";
import React from "react";
import { CreateSheet } from "./create-sheet";
import { UpdateSheet } from "./update-sheet/update-sheet";
import { TaskDTO } from "@/app/types/TaskDTO";
import { cn } from "@/lib/utils";

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
  const [openUpdateSheet, setOpenUpdateSheet] = React.useState(false);
  const [selectedTask, setSelectedTask] = React.useState<TaskDTO | null>(null);

  const handleOpenUpdateSheet = (task: TaskDTO) => {
    setSelectedTask(task);
    setOpenUpdateSheet(true);
  };

  return (
    <div className={className}>
      {loading ? (
        <div className="text-center text-[30px]">Загрузка</div>
      ) : (
        <>
          <CreateSheet />
          <table className="w-full text-[16px] text-gray-800">
            <thead>
              <tr className="text-left">
                <th className="border-b-2 px-6 py-3 w-[100px] pl-10 ">ID</th>
                <th className="border-b-2 px-6 py-3 w-[420px]">Название</th>
                <th className="border-b-2 px-6 py-3 w-[120px]">Статус</th>
                <th className="border-b-2 px-6 py-3">Исполнитель</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr
                  key={task.id}
                  onClick={() => handleOpenUpdateSheet(task)}
                  className="text-left"
                >
                  <td className="border-b px-6 py-3 pl-10">
                    {task.id.toLocaleString()}
                  </td>
                  <td className="border-b px-6 py-3">{task.name}</td>
                  <td className={cn(`border-b px-6 py-3 `)}>
                    <span
                      className="text-white rounded-[15px] py-1 px-2"
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
        task={selectedTask}
      />
    </div>
  );
};
