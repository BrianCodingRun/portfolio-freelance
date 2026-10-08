"use client";

import Opacity from "@/components/motion/Opacity";
import Section from "@/components/Section";
import { Badge } from "@/components/ui/badge";
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

export default function Hero() {
  return (
    <Section className="relative flex xl:max-w-7xl max-sm:flex-col max-sm:items-start max-sm:space-x-0 items-center justify-between gap-6 md:py-12 py-6">
      <div className="flex flex-col gap-2 md:gap-4">
        {/* ── IDENTITÉ ── */}
        <div className="flex md:flex-row flex-col md:items-center items-start gap-2">
          <div className="flex flex-col gap-2">
            <div className="overflow-hidden">
              <motion.p variants={heroBadge} initial="hidden" animate="visible">
                <Badge
                  variant="outline"
                  className="hidden md:block text-sm py-0"
                >
                  Sites • Applications • Accompagnement & Suivi — La Réunion
                </Badge>
                <Badge
                  variant="outline"
                  className="md:hidden block text-sm py-0"
                >
                  Accompagnement & Suivi — La Réunion
                </Badge>
              </motion.p>
            </div>
            <div className="space-y-2">
              <motion.h1
                variants={heroTitleBlur}
                initial="hidden"
                animate="visible"
                className="max-sm:text-2xl tracking-wider max-sm:max-w-xs md:text-5xl uppercase font-extrabold text-neutral-800 dark:text-zinc-300"
              >
                Du site vitrine{" "}
                <span className="text-primary">d’exception</span> à
                l’application sur-mesure.
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
            className="text-lg leading-snug text-muted-foreground max-w-xl"
          >
            Un interlocuteur unique du premier échange à la mise en ligne, pour
            un site qui vous ressemble, conçu pour générer des demandes, pas
            juste des visites.
          </motion.p>
        </div>

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
              buttonVariants({ variant: "default" }),
              "group border-none w-full sm:w-auto justify-center shadow-none",
            )}
          >
            <Calendar className="w-3.5 h-3.5" aria-hidden />
            Parlons-en
          </motion.a>
          <motion.a
            variants={fade}
            href="/projects"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "shadow-none w-full sm:w-auto justify-center border-accent-foreground text-primary",
            )}
          >
            <Construction className="w-3.5 h-3.5" />
            Découvrir mes projets
          </motion.a>
        </motion.div>
      </div>
      <div className="hidden md:block max-sm:w-full">
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
                  nexmyr.com
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
      </div>
      <Logo className="absolute hidden md:block -right-28 -bottom-32 w-125 h-125 opacity-4 dark:opacity-2 -z-10" />
    </Section>
  );
}
