"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  animationKey: string;
  className?: string;
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

export default function DynamicStagger({
  children,
  animationKey,
  className,
}: Props) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={animationKey}
        variants={container}
        initial="hidden"
        animate="show"
        exit="hidden"
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
