"use client";
import { oneTaskStore } from "@/app/store/one-task-store";
import { taskStore } from "@/app/store/tasks-store";
import { XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../ui/buttons-custom/button";
import { CommentsList } from "./comments-list";
import { UpdateSheetSidebar } from "./update-sheet-sidebar";
import { DescriptionBlock } from "../../reuses-components/description-block";
import { TextArea } from "../../reuses-components/text-area";
import Cookies from "js-cookie";
import { useClickAway } from "react-use";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
  postId: number;
  handleOpenChange: () => void;
}

export const SheetCustomUpdate: React.FC<Props> = ({
  handleOpenChange,
  open,
  postId,
}) => {
  const tasksStore = taskStore((state) => state);
  const oneTaskStoreLocale = oneTaskStore((state) => state);
  const ref = React.useRef(null);
  useClickAway(ref, () => {
    handleOpenChange();
  });
  const [textAreaText, setTextAreaText] = React.useState("");
  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaText(e.target.value);
  };
  React.useEffect(() => {
    const id = Cookies.get("tenantGuid");
    if (open && id) {
      oneTaskStoreLocale.fetchOneTask(id, postId);
    }
  }, [open, postId]);

  const handleComment = () => {
    if (oneTaskStoreLocale.task) {
      const id = Cookies.get("tenantGuid");
      const body = {
        id: oneTaskStoreLocale.task.id,
        name: oneTaskStoreLocale.task.name,
        description: oneTaskStoreLocale.task.description,
        comment: textAreaText,
        price: oneTaskStoreLocale.task.price,
        taskTypeId: oneTaskStoreLocale.task.taskTypeId,
        statusId: oneTaskStoreLocale.task.statusId,
        priorityId: oneTaskStoreLocale.task.priorityId,
        serviceId: oneTaskStoreLocale.task.serviceId,
        resolutionDatePlan: oneTaskStoreLocale.task.resolutionDatePlan,
        initiatorId: oneTaskStoreLocale.task.initiatorId,
        executorId: oneTaskStoreLocale.task.executorId,
        executorGroupId: oneTaskStoreLocale.task.executorGroupId,
      };
      if (id) {
        if (body.comment.length > 0) {
          tasksStore.updateTaskComments(id, body);
          setTextAreaText("");
        } else {
          alert("Символов меньше 1");
        }
      }
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={ref}
          className={cn("absolute right-0 top-[72px] w-3/5 ")}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "0%" }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gray-200 shadow-md gap-0 h-[calc(100vh-72px)] overflow-hidden overflow-y-auto">
            <div className="flex justify-between items-center p-5 bg-[#1a4876] shadow-[0px_0px_3px_rgba(0,0,0,0.25)]">
              <div className="flex items-center gap-4 text-[18px] text-white">
                <div className="whitespace-nowrap">
                  № {oneTaskStoreLocale.task.id.toLocaleString("ru-RU")}
                </div>
                <div className="">{oneTaskStoreLocale.task.name}</div>
              </div>
              <button onClick={handleOpenChange} className="cursor-pointer">
                <XIcon className="size-5 text-white" />
                <span className="sr-only">Close</span>
              </button>
            </div>
            <div className="flex">
              <div className="px-8 flex-grow pt-14 border border-r-gray-300">
                <DescriptionBlock
                  text={oneTaskStoreLocale.task.description}
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

                <CommentsList
                  className="pb-[20px] "
                  id={oneTaskStoreLocale.task.id}
                />
              </div>
              <UpdateSheetSidebar
                task={oneTaskStoreLocale.task}
                className="pl-7 pr-13 mt-6"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};