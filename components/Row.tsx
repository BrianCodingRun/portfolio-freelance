import { cn } from "@/lib/utils";
import React from "react";

type RowProps = React.PropsWithChildren<{
  className?: string;
}>;

export default function Row(props: RowProps) {
  return (
    <div
      className={cn("flex items-center justify-center gap-4", props.className)}
    >
      {props.children}
    </div>
  );
}
