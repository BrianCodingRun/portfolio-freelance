import { cn } from "@/lib/utils";
import React from "react";

interface SubtitleProps extends React.PropsWithChildren {
  className?: string;
}

export default function Subtitle(props: SubtitleProps) {
  return (
    <p
      className={cn(
        "text-muted-foreground text-base sm:text-lg py-4 md:leading-6",
        props.className,
      )}
    >
      {props.children}
    </p>
  );
}
