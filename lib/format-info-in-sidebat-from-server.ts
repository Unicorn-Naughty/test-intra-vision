import { TaskDTO } from "@/app/types/TaskDTO";
import { formateDate } from "./format-date";

export const formatInfoInSideBar = (task: TaskDTO | null) => {
    return [
        {
          name: "Заявитель",
          text: `${task?.initiatorName}`,
        },
        {
          name: "Создана",
          text: `${task?.initiatorName}`,
        },
        {
          name: "Исполнитель",
          text: `${task?.executorName}`,
        },
        {
          name: "Приоритет",
          text: `${task?.priorityName}`,
        },
        {
          name: "Срок",
          text: `${formateDate(task!.resolutionDatePlan)} г.`,
        },
        {
          name: "Теги",
          text: `${task?.tags.map((item) => item.name)}`,
        },
      ];
}