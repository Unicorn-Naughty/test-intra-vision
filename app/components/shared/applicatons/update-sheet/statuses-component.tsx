import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import React from "react";
import { ChevronDown } from "lucide-react";
import Cookies from "js-cookie";
import { statusesStore } from "@/app/store/statuses-store";
import { Status } from "@/app/types/StatusesDTO";
import { taskStore } from "@/app/store/tasks-store";
import { TaskDTO } from "@/app/types/TaskDTO";
interface Props {
  className?: string;
  task: TaskDTO | null;
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}

export const StatusesComponent: React.FC<Props> = ({
  task,
  open,
  onOpenChange,
}) => {
  const status = {
    rgb: task?.statusRgb,
    statusId: task?.statusId,
    statusName: task?.statusName,
  };

  const [statusCheked, setStatus] = React.useState(status);
  const store = statusesStore((state) => state.statuses);
  const tasksStore = taskStore((state) => state);
  const filtredStatuses = store.filter(
    (statusFiltred) => statusFiltred.id !== statusCheked.statusId
  );
  const handleChangeStatus = (item: Status) => {
    setStatus({
      rgb: item.rgb,
      statusId: item.id,
      statusName: item.name,
    });
    onOpenChange(false);
    if (task) {
      const id = Cookies.get("tenantGuid");
      const body = {
        id: task.id,
        name: task.name,
        description: task.description,
        price: task.price,
        taskTypeId: task.taskTypeId,
        statusId: item.id,
        priorityId: task.priorityId,
        serviceId: task.serviceId,
        resolutionDatePlan: task.resolutionDatePlan,
        initiatorId: task.initiatorId,
        executorId: task.executorId,
        executorGroupId: task.executorGroupId,
      };
      if (id) {
        tasksStore.updateTaskStatus(id, body);
      }
    }
  };

  return (
    <DropdownMenu open={open} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-1 mb-10 w-[130px] h-[50px]">
          <div className="flex items-center gap-1">
            <span
              style={{ backgroundColor: statusCheked.rgb }}
              className={`w-[10px] h-[10px]  rounded-[50%]`}
            ></span>
            <span>{statusCheked.statusName}</span>
          </div>
          <ChevronDown />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {filtredStatuses.map((item, i) => (
          <div className="cursor-pointer"  onClick={() => handleChangeStatus(item)} key={i}>
            {item.name}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
