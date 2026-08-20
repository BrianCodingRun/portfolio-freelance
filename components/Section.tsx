import { cn } from "@/lib/utils";
import * as React from "react";

export default function Section(
  props: React.PropsWithChildren<{ className?: string; id?: string }>,
) {
  return (
    <section
      className={cn(
        "max-w-3xl xl:max-w-6xl w-full px-6 md:px-8 mx-auto",
        props.className,
      )}
      id={props.id}
    >
      {props.children}
    </section>
  );
}
