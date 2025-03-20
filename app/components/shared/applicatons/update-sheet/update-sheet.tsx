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
interface Props {
  className?: string;
  handleOpenChange: () => void;
  open: boolean;
}

export const UpdateSheet: React.FC<Props> = ({ handleOpenChange, open }) => {
  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger></SheetTrigger>
      <SheetContent
        className="bg-gray-200 shadow-md gap-0"
        aria-describedby={undefined}
        side="right"
      >
        <DialogTitle className="hidden"></DialogTitle>
        <SheetHeader className=" flex justify-between items-center p-5 bg-[#1a4876] shadow-[0px_0px_3px_rgba(0,0,0,0.25)]">
          <div className="flex items-center gap-4">
            <div className="text-[18px] text-white">ID</div>
            <div className="text-[18px] text-white">Text</div>
          </div>
          <SheetClose className="cursor-pointer">
            <XIcon className="size-5 text-white" />
            <span className="sr-only">Close</span>
          </SheetClose>
        </SheetHeader>
        <div className="flex">
          <div className="px-8 flex-grow pt-14 border border-r-gray-300">
            <DescriptionBlock text="abcv" name="Описание" className="mb-13" />
            <TextArea
              name="Добавление комментария"
              className="w-full h-[130px]"
            />
            <Button text="Сохранить" className="mt-19 w-[160px] h-9 mb-12" />
            <CommentsList className="pb-[20px]"/>
          </div>
          <UpdateSheetSidebar className="pl-7 pr-13  mt-6 "/>
        </div>
      </SheetContent>
    </Sheet>
  );
};

