import { cn } from "@/lib/utils";
import * as React from "react";

export default function FullSection(
  props: React.PropsWithChildren<{ className?: string; id?: string }>
) {
  return (
    <section
      className={cn(
        "max-w-4xl md:max-w-7xl w-full px-6 md:px-8 mx-auto",
        props.className
      )}
      id={props.id}
    >
      {props.children}
    </section>
  );
}
