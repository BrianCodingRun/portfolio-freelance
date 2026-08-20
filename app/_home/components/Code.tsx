import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const Code = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 bg-card border border-primary text-primary py-1 px-2 text-xs hover:bg-accent hover:text-accent-foreground transition-colors",
        className,
      )}
      {...props}
    />
  );
};
