import { cn } from "@/lib/utils";
import React from "react";

type ColumnProps = React.PropsWithChildren<{
  className?: string;
}>;

export default function Column(props: ColumnProps) {
  return (
    <div className={cn("flex flex-col gap-2", props.className)}>
      {props.children}
    </div>
  );
}
