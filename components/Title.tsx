import { cn } from "@/lib/utils";
import React, { JSX } from "react";

interface TitleProps extends React.PropsWithChildren {
  level: 1 | 2 | 3 | 4 | 5 | 6; // Niveau du titre
  className?: string;
}

export default function Title({ level, className, children }: TitleProps) {
  // Génère h1, h2, ..., h6
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  if (level === 1) {
    return (
      <Tag
        className={cn("text-3xl md:text-4xl font-bold text-primary", className)}
      >
        {children}
      </Tag>
    );
  } else if (level === 2) {
    return (
      <Tag
        className={cn("text-2xl md:text-3xl font-bold text-primary", className)}
      >
        {children}
      </Tag>
    );
  } else if (level === 3) {
    return (
      <Tag
        className={cn("text-xl md:text-2xl font-bold text-primary", className)}
      >
        {children}
      </Tag>
    );
  } else if (level === 4) {
    return (
      <Tag
        className={cn("text-lg md:text-xl font-bold text-primar", className)}
      >
        {children}
      </Tag>
    );
  } else if (level === 5) {
    return (
      <Tag
        className={cn("text-base md:text-lg font-bold text-primary", className)}
      >
        {children}
      </Tag>
    );
  } else if (level === 6) {
    return (
      <Tag
        className={cn("text-sm md:text-base font-bold text-primary", className)}
      >
        {children}
      </Tag>
    );
  }
}
