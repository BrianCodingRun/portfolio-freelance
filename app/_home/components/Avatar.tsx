import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type AvatarProps = React.PropsWithChildren<{
  src: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  className?: string;
  grayscale?: boolean;
}>;

const SIZE_MAP: Record<
  NonNullable<AvatarProps["size"]>,
  { px: number; tw: string }
> = {
  xs: { px: 64, tw: "w-20 h-20" },
  sm: { px: 72, tw: "w-32 h-32" },
  md: { px: 96, tw: "w-40 h-40" },
  lg: { px: 108, tw: "w-48 h-48" },
  xl: { px: 116, tw: "w-56 h-56" },
  "2xl": { px: 124, tw: "w-64 h-64" },
  "3xl": { px: 132, tw: "w-72 h-72" },
  "4xl": { px: 140, tw: "w-80 h-80" },
};

const DEFAULT_SIZE = { px: 148, tw: "w-96 h-96" };

export default function Avatar({
  src,
  size,
  className,
  grayscale,
}: AvatarProps) {
  const { px, tw } = size ? SIZE_MAP[size] : DEFAULT_SIZE;

  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src={src}
        alt="Avatar"
        width={px}
        height={px}
        className={cn("object-cover", tw, grayscale ? "grayscale" : "")}
      />
    </div>
  );
}
