"use client";

import Opacity from "@/components/motion/Opacity";
import Section from "@/components/Section";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  fade,
  heroBadge,
  heroDescription,
  heroStagger,
  heroTitleBlur,
  lineXVariant,
} from "@/lib/motion/variants";
import { cn } from "@/lib/utils";
import Logo from "@/public/assets/nexmyr_logo_fond_sombre.svg";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Construction,
  Lock,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { FaDocker, FaSymfony, FaWordpress } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

const techs = [
  {
    name: "Next.js",
    icon: (
      <RiNextjsFill
        className="w-4 h-4"
        aria-label="Icone du framework react 'Next.js'"
      />
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <SiTypescript
        className="w-4 h-4"
        aria-label="Icone de librarie typescript"
      />
    ),
  },
  {
    name: "Symfony",
    icon: (
      <FaSymfony
        className="w-4 h-4"
        aria-label="Icone du framework PHP 'Symfony'"
      />
    ),
  },
  {
    name: "Wordpress",
    icon: (
      <FaWordpress className="w-4 h-4" aria-label="Icone du CMS Wordpress" />
    ),
  },
  {
    name: "Docker",
    icon: <FaDocker className="w-4 h-4" aria-label="Icone Docker" />,
  },
];

export default function Hero() {
  return (
    <Section className="flex xl:max-w-7xl max-sm:flex-col max-sm:items-start max-sm:space-x-0 items-center justify-between gap-6 space-x-6 md:py-12 py-6">
      <div className="flex flex-col gap-2 md:gap-4">
        {/* ── IDENTITÉ ── */}
        <div className="flex md:flex-row flex-col md:items-center items-start gap-2">
          <div className="flex flex-col gap-2">
            <div className="overflow-hidden flex items-center gap-2">
              <motion.div
                variants={lineXVariant}
                initial="hidden"
                animate="visible"
                className="bg-primary w-7 h-0.5 origin-left"
              />
              <motion.p
                variants={heroBadge}
                initial="hidden"
                animate="visible"
                className="text-xs md:text-base text-primary"
              >
                <span className="font-medium">Nexmyr</span> • Île de La Réunion
              </motion.p>
            </div>
            <div className="overflow-hidden space-y-2">
              <motion.h1
                variants={heroTitleBlur}
                initial="hidden"
                animate="visible"
                className="text-3xl md:[word-spacing:-0.8rem] md:text-[42px] font-medium leading-tight tracking-tighter font-mono text-neutral-800 dark:text-zinc-300"
              >
                Du site vitrine à {"l'"}application sur-mesure, je donne vie à
                vos ambitions.
              </motion.h1>
            </div>
          </div>
        </div>
        {/* ── ACCROCHE PRINCIPALE ── */}
        <div>
          <motion.p
            variants={heroDescription}
            initial="hidden"
            animate="visible"
            className="text-lg text-muted-foreground max-w-xl"
          >
            Un interlocuteur unique du premier échange à la mise en ligne, pour
            un site qui vous ressemble, conçu pour générer des demandes, pas
            juste des visites.
          </motion.p>
        </div>

        {/* ── BADGES TECHNOS ── */}
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="hidden md:flex flex-wrap gap-2"
        >
          {techs.map((tech, index) => (
            <motion.span
              variants={fade}
              key={index}
              className="inline-flex items-center bg-muted gap-1 text-sm font-medium px-3 py-1 border border-muted-foreground text-muted-foreground"
            >
              {tech.icon} {tech.name}
            </motion.span>
          ))}
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row w-full justify-start gap-2 sm:w-auto"
        >
          <motion.a
            variants={fade}
            href="https://calendly.com/briancoupama/30min"
            target="_blank"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "group border-none font-semibold w-full sm:w-auto justify-center shadow-none",
            )}
          >
            <Calendar className="w-3.5 h-3.5" aria-hidden />
            Parlons-en
          </motion.a>
          <motion.a
            variants={fade}
            href="/projects"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "font-medium shadow-none w-full sm:w-auto justify-center border-accent-foreground text-primary",
            )}
          >
            <Construction className="w-3.5 h-3.5" />
            Découvrir mes projets
          </motion.a>
        </motion.div>
        {/* ── BADGES TECHNOS MOBILE ── */}
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="md:hidden flex flex-wrap justify-center w-full gap-1"
        >
          {techs.map((tech, index) => (
            <motion.span
              variants={fade}
              key={index}
              className="inline-flex w-min h-min items-center bg-muted gap-1 text-xs font-medium px-3 py-1 border border-muted-foreground text-muted-foreground"
            >
              {tech.icon} {tech.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
      <div className="hidden md:block relative max-sm:w-full">
        <Opacity duration={1.2}>
          <Card className="w-xl border border-accent-foreground/25 bg-accent">
            <CardHeader className="flex items-center gap-2">
              <span className="w-3 h-3 bg-muted-foreground/50" />
              <span className="w-3 h-3 bg-muted-foreground/75" />
              <span className="w-3 h-3 bg-muted-foreground" />
              <Separator
                orientation="vertical"
                className="bg-muted-foreground data-vertical:w-0.5"
              />
              <div className="flex items-center gap-1">
                <Lock className="w-3 h-3" />
                <span className="text-xs text-primary font-semibold">
                  nexmyr.re
                </span>
              </div>
            </CardHeader>
            <Separator className="bg-muted-foreground/25" />
            <CardContent className="space-y-5">
              {/* Barre d'onglets */}
              <div className="flex items-center gap-2">
                <span className="w-20 h-4 bg-primary" />
                <span className="w-14 h-4 bg-muted-foreground/40" />
                <span className="w-14 h-4 bg-muted-foreground/40" />
              </div>
              <Separator className="bg-muted-foreground/25" />

              {/* KPI avec tendances */}
              <div className="grid grid-cols-3 gap-3">
                <div className="border border-muted-foreground/25 p-3 space-y-1.5">
                  <span className="block w-10 h-2 bg-muted-foreground/40" />
                  <span className="block w-14 h-5 bg-primary" />
                  <div className="flex items-center gap-1 text-primary">
                    <TrendingUp className="w-3 h-3" />
                    <span className="text-[10px] font-medium">+12%</span>
                  </div>
                </div>
                <div className="border border-muted-foreground/25 p-3 space-y-1.5">
                  <span className="block w-10 h-2 bg-muted-foreground/40" />
                  <span className="block w-14 h-5 bg-neutral-800 dark:bg-zinc-200" />
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <TrendingUp className="w-3 h-3" />
                    <span className="text-[10px] font-medium">+4%</span>
                  </div>
                </div>
                <div className="border border-muted-foreground/25 p-3 space-y-1.5">
                  <span className="block w-10 h-2 bg-muted-foreground/40" />
                  <span className="block w-14 h-5 bg-muted-foreground" />
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <TrendingDown className="w-3 h-3" />
                    <span className="text-[10px] font-medium">-2%</span>
                  </div>
                </div>
              </div>

              {/* Graphique en barres + sparkline superposée */}
              <div className="relative flex items-end gap-2 h-20 border-b border-muted-foreground/20 pb-1">
                <span className="w-6 h-8 bg-muted-foreground/30" />
                <span className="w-6 h-12 bg-muted-foreground/50" />
                <span className="w-6 h-20 bg-primary" />
                <span className="w-6 h-10 bg-muted-foreground/40" />
                <span className="w-6 h-16 bg-muted-foreground/60" />
                <span className="w-6 h-6 bg-muted-foreground/30" />
                <span className="w-6 h-14 bg-primary/70" />
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 220 80"
                  preserveAspectRatio="none"
                >
                  <polyline
                    points="10,50 40,35 70,15 100,45 130,25 160,60 190,30"
                    fill="none"
                    className="stroke-primary"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>

              {/* Barres de progression */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-16 h-2 bg-muted-foreground/40" />
                  <div className="flex-1 h-1.5 bg-muted-foreground/15">
                    <div className="h-full w-4/5 bg-primary" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-16 h-2 bg-muted-foreground/40" />
                  <div className="flex-1 h-1.5 bg-muted-foreground/15">
                    <div className="h-full w-1/2 bg-muted-foreground" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-16 h-2 bg-muted-foreground/40" />
                  <div className="flex-1 h-1.5 bg-muted-foreground/15">
                    <div className="h-full w-1/3 bg-muted-foreground/60" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex gap-2 w-full">
                <div className="flex items-center justify-between border border-muted-foreground/25 h-10 px-3">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="w-24 h-2 bg-muted-foreground/40" />
                  </div>
                  <span className="w-10 h-2 bg-muted-foreground/30" />
                </div>
                <div className="flex items-center justify-between border border-muted-foreground/25 h-10 px-3">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                    <span className="w-20 h-2 bg-muted-foreground/40" />
                  </div>
                  <span className="w-10 h-2 bg-muted-foreground/30" />
                </div>
                <div className="flex items-center justify-between border border-muted-foreground/25 h-10 px-3">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60" />
                    <span className="w-28 h-2 bg-muted-foreground/40" />
                  </div>
                  <span className="w-10 h-2 bg-muted-foreground/30" />
                </div>
              </div>
            </CardFooter>
          </Card>
          <div className="flex items-center gap-4 py-4 text-muted-foreground">
            <p className="uppercase text-xs">Discussion</p>
            <ArrowRight className="size-3" />
            <p className="uppercase text-xs">Conception</p>
            <ArrowRight className="size-3" />
            <p className="uppercase text-xs">Code</p>
            <ArrowRight className="size-3" />
            <p className="uppercase text-xs">Livraison</p>
          </div>
        </Opacity>
        <Logo className="absolute -right-36 -bottom-32 w-12 h-12 md:w-125 md:h-125 opacity-4 dark:opacity-2 -z-10" />
      </div>
    </Section>
  );
}
