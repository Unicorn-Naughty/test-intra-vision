import React from "react";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "../../ui/sheet";
import { Button } from "../../ui/buttons-custom/button";
import { DialogTitle } from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
interface Props {
  className?: string;
}

export const CreateSheet: React.FC<Props> = ({ className }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button text="Создать заявку" className="w-[180px] h-10 ml-65" />
      </SheetTrigger>
      <SheetContent className="h-full overflow-auto" side="right">
        <DialogTitle className="hidden"></DialogTitle>
        <SheetHeader className="flex justify-between items-center p-5 bg-[#1a4876] shadow-[0px_0px_3px_rgba(0,0,0,0.25)]">
          <div className="text-[18px] text-white">Новая заявка</div>
          <SheetClose className="cursor-pointer">
            <XIcon className="size-5 text-white" />
            <span className="sr-only">Close</span>
          </SheetClose>
        </SheetHeader>
        <div className="h-[3000px]">aaa</div>
        <div className="h-[3000px]">aaa</div>
      </SheetContent>
    </Sheet>
  );
};


  