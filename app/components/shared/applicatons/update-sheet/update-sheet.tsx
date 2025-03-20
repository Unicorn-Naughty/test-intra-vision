import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../../../ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { Button } from "../../../ui/buttons-custom/button";
import { TextArea } from "../../reuses-components/text-area";
import { DescriptionBlock } from "../../reuses-components/description-block";
import { UpdateSheetSidebar } from "./update-sheet-sidebar";
import { CommentsList } from "./comments-list";
import { TaskDTO } from "@/app/types/TaskDTO";
import Cookies from "js-cookie";
import { taskStore } from "@/app/store/tasks-store";
interface Props {
  className?: string;
  handleOpenChange: () => void;
  open: boolean;
  task: TaskDTO | null;
}

export const UpdateSheet: React.FC<Props> = ({
  handleOpenChange,
  open,
  task,
}) => {
  const tasksStore = taskStore((state) => state);
  const [textAreaText, setTextAreaText] = React.useState("");
  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaText(e.target.value);
  };
  const handleComment = () => {
    if (task) {
      const id = Cookies.get("tenantGuid");
      const body = {
        id: task.id,
        name: task.name,
        description: task.description,
        comment: textAreaText,
        price: task.price,
        taskTypeId: task.taskTypeId,
        statusId: task.statusId,
        priorityId: task.priorityId,
        serviceId: task.serviceId,
        resolutionDatePlan: task.resolutionDatePlan,
        initiatorId: task.initiatorId,
        executorId: task.executorId,
        executorGroupId: task.executorGroupId,
      };
      if (id) {
        if (body.comment.length > 0) {
          tasksStore.updateTaskComments(id, body);
          setTextAreaText("");
        } else {
          alert("Символов меньше 1")
        }
      }
    }
  };

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild></SheetTrigger>
      <SheetContent
        className="bg-gray-200 shadow-md gap-0"
        aria-describedby={undefined}
        side="right"
      >
        <DialogTitle className="hidden"></DialogTitle>
        <SheetHeader className=" flex justify-between items-center p-5 bg-[#1a4876] shadow-[0px_0px_3px_rgba(0,0,0,0.25)]">
          <div className="flex items-center gap-4 text-[18px] text-white">
            <div className="">{task?.id}</div>
            <div className="">{task?.name}</div>
          </div>
          <SheetClose className="cursor-pointer">
            <XIcon className="size-5 text-white" />
            <span className="sr-only">Close</span>
          </SheetClose>
        </SheetHeader>
        <div className="flex">
          <div className="px-8 flex-grow pt-14 border border-r-gray-300">
            <DescriptionBlock
              text={task ? task.description : ""}
              name="Описание"
              className="mb-13"
            />
            <TextArea
              value={textAreaText}
              onChange={(e) => handleTextArea(e)}
              name="Добавление комментария"
              className="w-full h-[130px]"
            />
            <Button
              type="button"
              onClick={handleComment}
              text="Сохранить"
              className="mt-19 w-[160px] h-9 mb-12"
            />

            <CommentsList className="pb-[20px]" id={task?.id} />
          </div>
          <UpdateSheetSidebar
            task={task ? task : null}
            className="pl-7 pr-13  mt-6 "
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};
