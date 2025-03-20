"use client";
import React from "react";
import { UpdateSheetItem } from "../../reuses-components/update-sheet-item";
import { TaskDTO } from "@/app/types/TaskDTO";
import { formatInfoInSideBar } from "@/lib/format-info-in-sidebat-from-server";
import { StatusesComponent } from "./statuses-component";
import { UsersComponent } from "./users-component";
interface Props {
  className?: string;
  task: TaskDTO | null;
}

export const UpdateSheetSidebar: React.FC<Props> = ({ className, task }) => {
  const [statuseComponentOpen, setStatusesComponentOpen] =
    React.useState(false);
  const [usersComponentOpen, setUsersComponentOpen] = React.useState(false);
  const items = formatInfoInSideBar(task);

  return (
    <div className={className}>
      <StatusesComponent
        open={statuseComponentOpen}
        onOpenChange={setStatusesComponentOpen}
        task={task}
      />
      <div className="flex flex-col gap-8">
        {items.map((item, i) =>
          item.name === "Исполнитель" ? (
            <UsersComponent
              task={task}
              open={usersComponentOpen}
              onOpenChange={setUsersComponentOpen}
              key={i}
            />
          ) : (
            <UpdateSheetItem text={item.text} name={item.name} key={i} />
          )
        )}
      </div>
    </div>
  );
};
