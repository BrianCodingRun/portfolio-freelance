"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const texts = [
  "Boutique en ligne",
  "Application mobile",
  "Site vitrine",
  "Application web",
];
const COPIES = 4;
const SECONDS_PER_ITEM = 8;

export default function InfiniteMarquee() {
  const reduceMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);

  return (
    <div className="w-full overflow-hidden max-sm:py-8 md:py-16">
      <div
        className="-mx-4 -rotate-3 bg-primary py-2"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          className="flex w-max whitespace-nowrap max-sm:text-base md:text-2xl text-primary-foreground will-change-transform"
          animate={
            reduceMotion || paused ? undefined : { x: `-${100 / COPIES}%` }
          }
          transition={{
            duration: texts.length * SECONDS_PER_ITEM,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {Array.from({ length: COPIES }).map((_, i) => (
            <ul key={i} aria-hidden={i > 0} className="flex shrink-0">
              {texts.map((text) => (
                <li
                  key={text}
                  className="flex list-none items-center gap-6 pr-6 font-mono font-semibold uppercase"
                >
                  <span>{text}</span>
                  <span aria-hidden className="text-current">
                    ✦
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
