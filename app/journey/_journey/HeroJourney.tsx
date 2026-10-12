"use client";

import { Badge } from "@/components/ui/badge";
import { heroDescription, heroTitleBlur } from "@/lib/motion/variants";
import { motion } from "framer-motion";

export default function HeroJourney() {
  return (
    <header className="mx-auto max-w-6xl md:max-w-3xl md:px-6 space-y-4 md:pt-6 md:pb-12 md:my-8 my-4 text-center">
      <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-primary font-semibold">
        2011 — 2026
      </span>
      <motion.h1
        variants={heroTitleBlur}
        initial="hidden"
        animate="visible"
        className="text-3xl md:text-6xl font-extrabold text-neutral-800 dark:text-zinc-300"
      >
        Qui se cache derrière <span className="text-primary">Nexmyr ?</span>
        <Badge variant="outline" className="hidden md:inline-flex text-sm">
          Brian Coupama • Développeur & Fondateur de Nexmyr
        </Badge>
      </motion.h1>
      <motion.p
        variants={heroDescription}
        initial="hidden"
        animate="visible"
        className="mt-6 md:text-lg md:text-balance text-muted-foreground"
      >
        Cinq moments, une trajectoire pas toujours linéaire, d’un système
        scolaire quitté tôt jusqu’au lancement de mon activité de développeur
        web freelance.
      </motion.p>
    </header>
  );
}
