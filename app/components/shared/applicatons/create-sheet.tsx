"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../../ui/sheet";
import { Button } from "../../ui/buttons-custom/button";
import { DialogTitle } from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Cookies from "js-cookie";
import { taskStore } from "@/app/store/tasks-store";
import { UpdateSheet } from "./update-sheet/update-sheet"; // Import UpdateSheet component

interface Props {
  className?: string;
}

export const CreateSheet: React.FC<Props> = () => {
  const tasksStore = taskStore((state) => state);
  const [value, setValue] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const [isCreateSheetOpen, setIsCreateSheetOpen] = React.useState(false);
  const [isUpdateSheetOpen, setIsUpdateSheetOpen] = React.useState(false);
  const [createdTask, setCreatedTask] = React.useState(1);

  const handleCreate = async () => {
    const id = Cookies.get("tenantGuid");
    if (id) {
      const newTask = await tasksStore.createTask(id, {
        name: value,
        description: value2,
      });
      setCreatedTask(newTask);
      setValue("");
      setValue2("");
      setIsCreateSheetOpen(false);
      setIsUpdateSheetOpen(true);
    }
  };
  const handleOpenChange = () => setIsUpdateSheetOpen(!isUpdateSheetOpen);
  return (
    <>
      <Sheet open={isCreateSheetOpen} onOpenChange={setIsCreateSheetOpen}>
        <SheetTrigger asChild>
          <Button
            text="Создать заявку"
            className="w-[180px] h-10 ml-65"
            onClick={() => setIsCreateSheetOpen(true)}
          />
        </SheetTrigger>
        <SheetContent className="bg-gray-200 shadow-md " side="right">
          <DialogTitle className="hidden"></DialogTitle>
          <SheetHeader className="mb-14 flex justify-between items-center p-5 bg-[#1a4876] shadow-[0px_0px_3px_rgba(0,0,0,0.25)]">
            <div className="text-[18px] text-white">Новая заявка</div>
            <SheetClose
              className="cursor-pointer"
              onClick={() => setIsCreateSheetOpen(false)}
            >
              <XIcon className="size-5 text-white" />
              <span className="sr-only">Close</span>
            </SheetClose>
          </SheetHeader>
          <div className="px-11">
            <div className="">
              <div className="mb-4 text-[14px] text-gray-500 leading-[1.714]">
                Название
              </div>
              <textarea
                value={value}
                onChange={(e) => setValue(e.target.value)}
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
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
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
        </SheetContent>
      </Sheet>

      {createdTask && (
        <UpdateSheet
          open={isUpdateSheetOpen}
          handleOpenChange={handleOpenChange}
          postId={createdTask}
        />
      )}
    </>
  );
};
