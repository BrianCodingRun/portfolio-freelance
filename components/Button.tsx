import { cn } from "@/lib/utils";
import React from "react";

type ButtonProps = React.PropsWithChildren<{
  className?: string;
  width?: number;
  height?: number;
  radius: number;
  ariaLabel: string;
  onClick?: () => void;
}>;

export default function Button(props: ButtonProps) {
  return (
    <button
      className={cn(
        `flex justify-center items-center border-2 border-black dark:border-white`,
        props.className,
      )}
      style={{
        width: `${props.width ? props.width + "px" : "100%"}`,
        height: `${props.height ? props.height + "px" : "100%"}`,
        borderRadius: `${props.radius}px`,
      }}
      onClick={props.onClick}
      aria-label={props.ariaLabel}
    >
      {props.children}
    </button>
  );
}
