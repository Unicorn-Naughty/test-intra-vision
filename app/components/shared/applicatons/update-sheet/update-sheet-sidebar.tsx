import React from "react";
import { UpdateSheetItem } from "../../reuses-components/update-sheet-item";
interface Props {
  className?: string;
}

export const UpdateSheetSidebar: React.FC<Props> = ({ className }) => {
  const testItems = [
    {
      name: "Заявитель",
      text: "anv",
    },
    {
      name: "Создана",
      text: "anv",
    },
    {
      name: "Исполнитель",
      text: "anv",
    },
    {
      name: "Приоритет",
      text: "anv",
    },
    {
      name: "Срок",
      text: "anv",
    },
    {
      name: "Теги",
      text: "anv",
    },
  ];

  return (
    <div className={className}>
      <div className="mb-9">Status Components</div>
      <div className="flex flex-col gap-8">
        {testItems.map((item, i) => (
          <UpdateSheetItem text={item.text} name={item.name} key={i} />
        ))}
      </div>
    </div>
  );
};
