import React from "react";
import { OneComment } from "./one-comment";
interface Props {
  className?: string;
}

export const CommentsList: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      {Array.from({ length: 3 }).map((_, i) => (
        <OneComment key={i} />
      ))}
    </div>
  );
};
