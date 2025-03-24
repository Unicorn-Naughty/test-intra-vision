import React from "react";
import { OneComment } from "./one-comment";

import { taskStore } from "@/app/store/tasks-store";
interface Props {
  className?: string;
  id: number
}

export const CommentsList: React.FC<Props> = ({ className, id }) => {
  const comments = taskStore((state) =>
    state.tasks.find((task) => task.id === id)
  )?.lifetimeItems;
  return (
    <>
      {comments ? (
        <div className={className}>
          {comments.map((comment, i) => (
            <OneComment comment={comment} key={i} />
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};
