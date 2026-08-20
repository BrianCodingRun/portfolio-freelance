"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
};

const item = {
  hidden: {
    opacity: 0,
    y: 2,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function StaggerItem({
  children,
  className,
  delay = 0.2,
  duration = 0.75,
}: Props) {
  return (
    <motion.div
      variants={item}
      transition={{
        delay,
        duration,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
