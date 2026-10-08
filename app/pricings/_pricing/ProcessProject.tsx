"use client";

import FadeUp from "@/components/motion/FadeUp";
import Section from "@/components/Section";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { SquareCheckBig } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

interface stepsType {
  title: string;
  description: string;
  perk: string;
  image: string;
  link?: {
    label: string;
    url: string;
  };
}

const steps: stepsType[] = [
  {
    title: "Phase de discussion",
    description:
      "Nous échangeons sur vos besoins, vos objectifs et les fonctionnalités nécessaires pour votre projet.",
    perk: "Gratuit & sans engagement",
    image: "/images/process/step-1.webp",
    link: {
      label: "Parlez moi de votre projet",
      url: "mailto:contact@nexmyr.com",
    },
  },
  {
    title: "Proposition et devis",
    description:
      "Je vous propose une solution adaptée avec un devis clair et détaillé.",
    perk: "Sous 48h",
    image: "/images/process/step-2.webp",
  },
  {
    title: "Développement",
    description:
      "Je réalise votre site ou application avec des points réguliers pour suivre l'avancement.",
    perk: "Points hebdomadaires",
    image: "/images/process/step-3.webp",
    link: {
      label: "Découvrir mes projets",
      url: "/projects",
    },
  },
  {
    title: "Mise en ligne",
    description:
      "Votre projet est livré, optimisé et prêt à accueillir vos premiers utilisateurs.",
    perk: "Support inclus",
    image: "/images/process/step-4.webp",
    link: {
      label: "Mes offres de maintenance",
      url: "#pricings",
    },
  },
];

export default function ProcessProject() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const next = Math.min(steps.length - 1, Math.floor(p * steps.length));
    setActive((prev) => (prev === next ? prev : next));
  });

  const fade = {
    initial: { opacity: 0, y: reduceMotion ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: reduceMotion ? 0 : -16 },
    transition: { duration: 0.325, ease: "easeOut" as const },
  };

  return (
    <Section className="xl:max-w-7xl">
      {/* ── Desktop : sticky scroll ── */}
      <div
        ref={trackRef}
        className="relative hidden lg:block"
        style={{ height: `${steps.length * 50}vh` }}
      >
        <div className="sticky top-0 flex h-screen items-center">
          <div className="mx-auto grid w-full grid-cols-2 items-center gap-16">
            {/* Texte */}
            <div className="relative">
              <p className="mb-8 text-sm uppercase tracking-widest text-muted-foreground">
                Un process structuré en quatre étapes !
              </p>

              <AnimatePresence mode="wait">
                <motion.div key={active} {...fade}>
                  <p className="mb-3 text-sm uppercase text-muted-foreground">
                    Étape {String(active + 1).padStart(2, "0")}.
                  </p>
                  <h3 className="mb-6 text-6xl font-medium text-neutral-800 dark:text-zinc-200">
                    {steps[active].title}
                  </h3>
                  <p className="mb-8 max-w-md text-lg text-muted-foreground">
                    {steps[active].description}
                  </p>
                  {steps[active].link && (
                    <Link
                      href={steps[active].link.url}
                      className={cn(
                        buttonVariants({ variant: "default" }),
                        "mb-2",
                      )}
                    >
                      {steps[active].link.label}
                    </Link>
                  )}
                  <p className="flex items-center gap-2 text-sm">
                    <SquareCheckBig className="size-4" />
                    {steps[active].perk}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Indicateur de progression */}
              <div className="mt-12 flex gap-2">
                {steps.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 w-12 rounded-full transition-colors duration-300 ${
                      i <= active ? "bg-primary" : "bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Image : fondu croisé */}
            <div className="relative aspect-4/3 overflow-hidden border">
              {steps.map((step, i) => (
                <motion.div
                  key={step.image}
                  className="absolute inset-0"
                  animate={{ opacity: i === active ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile / tablette : liste classique ── */}
      <div className="mx-auto grid max-w-2xl gap-6 py-16 lg:hidden">
        <FadeUp delay={0.4}>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Separator
                orientation="horizontal"
                className="bg-primary data-horizontal:w-10 data-horizontal:h-0.5"
              />
              <span className="text-primary uppercase text-sm sm:text-base font-semibold">
                Comment ca marche ?
              </span>
              <Separator
                orientation="horizontal"
                className="bg-primary data-horizontal:w-10 data-horizontal:h-0.5"
              />
            </div>
            <Title
              level={2}
              className="max-sm:text-lg 2xl:text-3xl text-5xl font-bold text-neutral-800 dark:text-zinc-200 leading-snug"
            >
              Comment je structure votre projet ?
            </Title>
            <Subtitle className="text-muted-foreground not-italic py-2 max-w-lg mx-auto">
              Un processus simple et transparent pour transformer votre idée en
              projet concret.
            </Subtitle>
          </div>
        </FadeUp>
        {steps.map((step, i) => (
          <div key={step.title} className="border p-6">
            <div className="relative mb-4 aspect-4/3 overflow-hidden">
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover"
              />
            </div>
            <p className="mb-2 text-sm uppercase text-muted-foreground">
              Étape {String(i + 1).padStart(2, "0")}.
            </p>
            <h3 className="mb-3 text-2xl font-medium">{step.title}</h3>
            <p className="mb-4 text-muted-foreground">{step.description}</p>
            <p className="flex items-center gap-2 text-sm">
              <SquareCheckBig className="size-4" />
              {step.perk}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
