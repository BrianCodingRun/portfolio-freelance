"use client";

import Section from "@/components/Section";
import { Separator } from "@/components/ui/separator";
import type { JourneyChapter, JourneyConclusion } from "@/types/journey";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const PLACEHOLDER_GRADIENTS = [
  "from-primary via-accent to-background",
  "from-accent via-primary to-background",
  "from-primary via-accent to-background",
  "from-accent via-primary to-background",
  "from-primary via-accent to-background",
];

export default function TimelineJourney({
  chapters,
  conclusion,
}: {
  chapters: JourneyChapter[];
  conclusion: JourneyConclusion;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeNodes, setActiveNodes] = useState<number[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (!containerRef.current) return;

    const containerHeight = containerRef.current.scrollHeight;
    const activeLineHeight = progress * containerHeight;

    const active: number[] = [];

    nodeRefs.current.forEach((node, i) => {
      if (!node || !containerRef.current) return;

      const nodeRect = node.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      const nodeCenter = nodeRect.top - containerRect.top + nodeRect.height / 2;

      if (activeLineHeight >= nodeCenter) {
        active.push(i);
      }
    });

    setActiveNodes(active);
  });

  return (
    <Section className="md:max-w-7xl">
      <div ref={containerRef} className="relative mx-auto max-w-5xl px-6">
        {/* Center line */}
        <motion.div
          initial={{
            scaleY: 0,
          }}
          animate={{
            scaleY: 1,
          }}
          transition={{
            delay: 0.4,
            duration: 8,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
          }}
          style={{
            transformOrigin: "top",
          }}
          className="absolute left-1/2 top-0 h-full w-0.5 z-10 -translate-x-1/2 bg-border hidden sm:block"
        />
        <motion.div
          style={{ height }}
          className="absolute z-10 left-1/2 top-0 w-0.5 -translate-x-1/2 bg-primary hidden sm:block"
        />
        <ol className="space-y-16 sm:space-y-24">
          {chapters.map((chapter, index) => {
            const isEven = index % 2 === 0;
            const gradient =
              PLACEHOLDER_GRADIENTS[index % PLACEHOLDER_GRADIENTS.length];
            const isActive = activeNodes.includes(index);

            return (
              <motion.li
                className="relative"
                key={chapter.slug}
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  delay: 0.6,
                  duration: 0.5,
                }}
              >
                {/* Timeline node */}
                <motion.div
                  ref={(el) => {
                    nodeRefs.current[index] = el;
                  }}
                  animate={{
                    scale: isActive ? 1 : 0.8,
                    backgroundColor: isActive
                      ? "var(--primary)"
                      : "var(--background)",
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="hidden sm:block absolute top-1/2 z-20 h-4 w-4 border-2 border-primary bg-background -translate-y-1/2"
                  style={{
                    left: "calc(50% - 8px)",
                  }}
                />
                <Link
                  href={`/journey/${chapter.slug}`}
                  className={`group grid items-center gap-6 sm:grid-cols-2 ${
                    isEven ? "" : "sm:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* Image — real photo if provided, gradient placeholder otherwise */}
                  <div
                    className={`relative aspect-[4/3] overflow-hidden ring-1 ring-border transition duration-300 group-hover:ring-primary/50 ${
                      chapter.image ? "" : `bg-gradient-to-br ${gradient}`
                    }`}
                  >
                    {chapter.image ? (
                      <Image
                        src={chapter.image}
                        alt={chapter.title}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    ) : (
                      <span className="absolute bottom-3 right-4 text-xs text-muted-foreground">
                        {String(chapter.number).padStart(2, "0")}
                      </span>
                    )}
                  </div>

                  {/* Text content */}
                  <div className={isEven ? "sm:pl-8" : "sm:pr-8"}>
                    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em]">
                      <span>
                        Chapitre {String(chapter.number).padStart(2, "0")}
                      </span>
                      <Separator
                        orientation="horizontal"
                        className="data-horizontal:w-3"
                      />
                      <span>{chapter.year}</span>
                    </div>
                    <h2 className="mt-3 text-3xl text-primary font-semibold">
                      {chapter.title}
                    </h2>
                    <p className="mt-3">{chapter.teaser}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-wide md:group-hover:text-primary">
                      Lire le chapitre
                      <span
                        aria-hidden
                        className="transition-transform group-hover:translate-x-1"
                      >
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </span>
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </ol>
      </div>

      {/* NOW marker */}
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
          skewY: 4,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          skewY: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: "easeInOut",
        }}
        viewport={{
          once: true,
          amount: 0.6,
        }}
        style={{
          transformOrigin: "left",
        }}
        className="relative mt-24 flex flex-col items-center justify-center gap-4 space-y-6 text-center min-h-[80vh] mb-14"
      >
        <h2 className="font-display text-xl md:text-5xl text-primary">
          {conclusion.title}
        </h2>
        <article className="px-6">
          <div className="text-muted-foreground space-y-2">
            {conclusion.body.map((paragraph, index) => (
              <p key={index} className="md:max-w-2xl text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </motion.div>
    </Section>
  );
}
