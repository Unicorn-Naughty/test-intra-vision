import { taskStore } from "@/app/store/tasks-store";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../ui/buttons-custom/button";
import Cookies from "js-cookie";
import { useClickAway } from "react-use";
import { SheetCustomUpdate } from "./update-sheet/sheet-custom-update";
interface Props {
  className?: string;
  open: boolean;
  setIsCreateSheetOpen: (item: boolean) => void;
}

export const SheetCustom: React.FC<Props> = ({
  setIsCreateSheetOpen,
  open,
}) => {
  const tasksStore = taskStore((state) => state);
  const [taskNameValue, setTaskNameValue] = React.useState("");
  const [descriptionValue, setDescriptionValue] = React.useState("");
  const [isUpdateSheetOpen, setIsUpdateSheetOpen] = React.useState(false);
  const [createdTask, setCreatedTask] = React.useState(1);

  const handleCreate = async () => {
    const id = Cookies.get("tenantGuid");
    if (id) {
      const newTask = await tasksStore.createTask(id, {
        name: taskNameValue,
        description: descriptionValue,
      });
      setCreatedTask(newTask);
      setTaskNameValue("");
      setDescriptionValue("");
      setIsCreateSheetOpen(false);
      setIsUpdateSheetOpen(true);
    }
  };

  const handleOpenChange = () => setIsUpdateSheetOpen(!isUpdateSheetOpen);
  const ref = React.useRef(null);
  useClickAway(ref, () => {
    setIsCreateSheetOpen(false);
  });
  return (
    <>
      <div
        ref={ref}
        className={cn(
          "absolute right-0 top-[72px] w-3/5  transition-opacity duration-600",
          open ? " opacity-100 " : "  opacity-0"
        )}
      >
        <div className="bg-gray-200 shadow-md h-[calc(100vh-72px)]">
          <div className="mb-14 flex justify-between items-center p-5 bg-[#1a4876] shadow-[0px_0px_3px_rgba(0,0,0,0.25)]">
            <div className="text-[18px] text-white">Новая заявка</div>
            <button
              className="cursor-pointer"
              onClick={() => setIsCreateSheetOpen(false)}
            >
              <XIcon className="size-5 text-white" />
              <span className="sr-only">Close</span>
            </button>
          </div>
          <div className="px-11 ">
            <div className="">
              <div className="mb-4 text-[14px] text-gray-500 leading-[1.714]">
                Название
              </div>
              <textarea
                value={taskNameValue}
                onChange={(e) => setTaskNameValue(e.target.value)}
                className={cn(
                  "py-2 px-4 border border-gray-300 rounded bg-gray-100 resize-none w-[620px] h-[80px]"
                )}
              ></textarea>
            </div>
            <div className="">
              <div className="mb-4 text-[14px] text-gray-500 leading-[1.714]">
                Описание
              </div>
              <textarea
                value={descriptionValue}
                onChange={(e) => setDescriptionValue(e.target.value)}
                className={cn(
                  "py-2 px-4 border border-gray-300 rounded bg-gray-100 resize-none w-[620px] h-[130px]"
                )}
              ></textarea>
            </div>
            <Button
              onClick={handleCreate}
              type="button"
              text="Сохранить"
              className="mt-19 w-[160px] h-9"
            />
          </div>
        </div>
      </div>

      {createdTask && (
        <SheetCustomUpdate
          open={isUpdateSheetOpen}
          handleOpenChange={handleOpenChange}
          postId={createdTask}
        />
      )}
    </>
  );
};
