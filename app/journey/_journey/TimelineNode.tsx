"use client";

import { motion } from "framer-motion";

type TimelineNodeProps = {
  active: boolean;
  top: number;
};

export default function TimelineNode({ active, top }: TimelineNodeProps) {
  return (
    <motion.div
      animate={{
        scale: active ? 1.15 : 1,
        backgroundColor: active ? "var(--primary)" : "var(--background)",
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        absolute
        left-1/2
        z-50
        h-4
        w-4
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        border-2
        border-primary
        hidden
        sm:block
      "
      style={{
        top,
      }}
    />
  );
}
