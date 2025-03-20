import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import React from "react";
import Cookies from "js-cookie";
import { taskStore } from "@/app/store/tasks-store";
import { TaskDTO } from "@/app/types/TaskDTO";
import { usersStore } from "@/app/store/users-store";
import { UserDTO } from "@/app/types/UserDTO";
interface Props {
  className?: string;
  task: TaskDTO | null;
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UsersComponent: React.FC<Props> = ({
  task,
  open,
  onOpenChange,
}) => {
  const user = {
    executorId: task?.executorId,
    executorName: task?.executorName,
  };

  const [userChecked, setUser] = React.useState(user);
  const store = usersStore((state) => state.users);
  const tasksStore = taskStore((state) => state);
  const filtredUsers = store.filter(
    (usersFiltred) => usersFiltred.id !== userChecked.executorId
  );
  const handleChangeExecutor = (item: UserDTO) => {
    setUser({
      executorId: item.id,
      executorName: item.name,
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
        statusId: task.statusId,
        priorityId: task.priorityId,
        serviceId: task.serviceId,
        resolutionDatePlan: task.resolutionDatePlan,
        initiatorId: task.initiatorId,
        executorId: item.id,
        executorGroupId: task.executorGroupId,
      };
      if (id) {
        tasksStore.updateTaskExecutor(id, body);
      }
    }
  };

  return (
    <DropdownMenu open={open} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild>
        <button className="text-left cursor-pointer">
          <div>
            <div className={`text-[14px] text-[#a09fa8] leading-[1.714]`}>
              Исполнитель
            </div>
            <div className="text-sm  text-[rgb(3,3,3)] leading-[1.714] whitespace-nowrap">
              {userChecked.executorName}
            </div>
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full p-2">
        {filtredUsers.map((item, i) => (
          <div className="cursor-pointer" onClick={() => handleChangeExecutor(item)} key={i}>
            {item.name}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
