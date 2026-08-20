"use client";

import Section from "@/components/Section";
import { buttonVariants } from "@/components/ui/button";
import {
  fade,
  heroBadge,
  heroDescription,
  heroStagger,
  heroTitle,
  lineXVariant,
  wordVariant,
} from "@/lib/motion/variants";
import { cn } from "@/lib/utils";
import profile from "@/public/assets/avatar/profile.webp";
import { motion } from "framer-motion";
import { Calendar, Construction, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaDocker, FaSymfony, FaWordpress } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiPrestashop } from "react-icons/si";

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
    name: "Prestashop",
    icon: (
      <SiPrestashop className="w-4 h-4" aria-label="Icone du CMS Prestashop" />
    ),
  },
  {
    name: "Docker",
    icon: <FaDocker className="w-4 h-4" aria-label="Icone Docker" />,
  },
];

export default function Hero() {
  const firstText = "Offrez un boost de performance à ";
  const secondText = "votre entreprise.";

  return (
    <Section className="md:w-11/12 flex flex-col sm:items-start">
      {/* Grille de fond */}
      <div className="bg-grid absolute pointer-events-none inset-0 -inset-y-2 -z-30" />
      <div className="flex max-sm:flex-col max-sm:items-start max-sm:space-x-0 items-center justify-between gap-6 space-x-6 md:py-12 py-6">
        <div className="flex flex-col gap-3 md:gap-6">
          {/* ── IDENTITÉ ── */}
          <div className="flex md:flex-row flex-col md:items-center items-start gap-2">
            <div className="flex flex-col">
              <div className="overflow-hidden flex items-center gap-2">
                <motion.div
                  variants={lineXVariant}
                  initial="hidden"
                  animate="visible"
                  className="hidden sm:block bg-primary w-6 h-px origin-left"
                />
                <motion.p
                  variants={heroBadge}
                  initial="hidden"
                  animate="visible"
                  className="text-xs md:text-sm text-primary font-normal"
                >
                  Bonjour, je suis
                </motion.p>
              </div>
              <div className="overflow-hidden space-y-2">
                <motion.span
                  variants={heroTitle}
                  initial="hidden"
                  animate="visible"
                  className="origin-bottom-left text-lg md:text-2xl font-medium text-foreground leading-tight"
                >
                  <div className="uppercase font-bold">
                    <span className="text-current font-display font-normal">
                      B
                    </span>
                    rian{" "}
                    <div className="text-primary inline">
                      <span className="font-display font-normal ">C</span>
                      oupama
                    </div>
                  </div>
                </motion.span>
                <motion.h1
                  variants={heroTitle}
                  initial="hidden"
                  animate="visible"
                  className="text-2xl md:text-5xl font-medium leading-tight tracking-tighter"
                >
                  Développeur web freelance <br />à{" "}
                  <span className="text-primary">
                    Saint-Joseph, La Réunion.
                  </span>
                </motion.h1>
              </div>
            </div>
          </div>
          {/* AVATAR (UNIQUEMENT PRESENT SUR MOBILE) */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
              ease: "easeIn",
            }}
            className="flex md:hidden items-center gap-2.5 border border-white/10 bg-card/90 p-2.5"
          >
            <div className="h-12 w-12 shrink-0 overflow-hidden">
              <Image
                src={profile.src}
                alt="Brian Coupama"
                width={48}
                height={48}
                className="h-full w-full object-cover object-[-2px_-5px]"
              />
            </div>
            <div>
              <p className="text-primary text-sm font-medium">
                Expertise locale
              </p>
              <p className="text-xs text-white/60">
                {" "}
                <MapPin className="w-3.5 h-3.5 inline mb-1" /> Basé à
                Saint-Joseph
              </p>
            </div>
          </motion.div>
          {/* ── ACCROCHE PRINCIPALE ── */}
          <div>
            <motion.h2
              variants={heroStagger}
              initial="hidden"
              animate="visible"
              className="text-xl md:text-2xl font-semibold italic leading-tight"
            >
              {firstText.split(" ").map((word, index, array) => (
                <React.Fragment key={index}>
                  <motion.span variants={wordVariant} className="inline-block">
                    {word}
                  </motion.span>

                  {index < array.length - 1 && " "}
                </React.Fragment>
              ))}
              <span className="text-primary">
                {secondText.split(" ").map((word, index, array) => (
                  <React.Fragment key={index}>
                    <motion.span
                      variants={wordVariant}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>

                    {index < array.length - 1 && " "}
                  </React.Fragment>
                ))}
              </span>
            </motion.h2>
            <motion.p
              variants={heroDescription}
              initial="hidden"
              animate="visible"
              className="hidden md:block mt-3 sm:text-sm md:text-lg text-muted-foreground font-light leading-snug md:leading-snug max-w-2xl"
            >
              Basé dans le Sud Sauvage, {"j'accompagne"} les entreprises locales
              dans la création de sites internet performants, optimisés pour le
              SEO et conçus pour attirer de vrais clients.
            </motion.p>
            <motion.p
              variants={heroDescription}
              initial="hidden"
              animate="visible"
              className="md:hidden mt-3 text-sm md:text-lg text-muted-foreground font-light leading-snug md:leading-snug max-w-2xl"
            >
              Sites internet performants, optimisés SEO, conçus pour attirer de
              vrais clients.
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
                className="inline-flex items-center bg-card gap-1 text-sm font-medium px-3 py-1 border border-border text-muted-foreground"
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
              Prendre un rendez-vous
            </motion.a>
            <motion.a
              variants={fade}
              href="/projects"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "font-medium shadow-none w-full sm:w-auto justify-center border-primary text-primary",
              )}
            >
              <Construction className="w-3.5 h-3.5" />
              Voir mes réalisations
            </motion.a>
          </motion.div>
          {/* ── BADGES TECHNOS MOBILE ── */}
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="visible"
            className="md:hidden grid grid-cols-3 gap-1"
          >
            {techs.slice(0, 3).map((tech, index) => (
              <motion.span
                variants={fade}
                key={index}
                className="inline-flex items-center bg-card gap-1 text-xs font-medium px-3 py-1 border border-border text-muted-foreground"
              >
                {tech.icon} {tech.name}
              </motion.span>
            ))}
          </motion.div>
        </div>
        <div className="hidden md:block relative max-sm:w-full">
          {/* GRAPHIC ELEMENT TOP RIGHT */}
          <motion.div
            initial={{
              scaleY: 0,
              top: "-16px",
              right: "-16px",
            }}
            animate={{
              scaleY: 1,
              top: "-8px",
              right: "-8px",
            }}
            transition={{
              duration: 0.2,
              delay: 0.4,
              ease: "linear",
              top: {
                duration: 0.2,
                delay: 1,
                ease: "easeOut",
              },
              right: {
                duration: 0.2,
                delay: 1,
                ease: "easeOut",
              },
            }}
            className="absolute bg-primary -top-4 -right-4 w-0.5 h-12 origin-bottom"
          />
          <motion.div
            initial={{
              scaleX: 0,
              top: "-16px",
              right: "-16px",
            }}
            animate={{
              scaleX: 1,
              top: "-8px",
              right: "-8px",
            }}
            transition={{
              duration: 0.2,
              ease: "linear",
              delay: 0.6,
              top: {
                duration: 0.2,
                delay: 1,
                ease: "easeOut",
              },
              right: {
                duration: 0.2,
                delay: 1,
                ease: "easeOut",
              },
            }}
            className="absolute bg-primary -top-4 -right-4 w-12 h-0.5 origin-top-right"
          />
          {/* GRAPHIC ELEMENT BOTTOM LEFT */}
          <motion.div
            initial={{
              scaleY: 0,
              bottom: "-16px",
              left: "-16px",
            }}
            animate={{
              scaleY: 1,
              bottom: "-8px",
              left: "-8px",
            }}
            transition={{
              duration: 0.2,
              delay: 0.4,
              ease: "linear",
              bottom: {
                duration: 0.2,
                delay: 1,
                ease: "easeOut",
              },
              left: {
                duration: 0.2,
                delay: 1,
                ease: "easeOut",
              },
            }}
            className="absolute -bottom-4 -left-4 w-0.5 h-12 bg-primary origin-top"
          />
          <motion.div
            initial={{
              scaleX: 0,
              bottom: "-16px",
              left: "-16px",
            }}
            animate={{
              scaleX: 1,
              bottom: "-8px",
              left: "-8px",
            }}
            transition={{
              duration: 0.2,
              ease: "linear",
              delay: 0.6,
              bottom: {
                duration: 0.2,
                delay: 1,
                ease: "easeOut",
              },
              left: {
                duration: 0.2,
                delay: 1,
                ease: "easeOut",
              },
            }}
            className="absolute -bottom-2 -left-2 w-12 h-0.5 bg-primary origin-bottom-left"
          />
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
              ease: "easeIn",
            }}
            className="p-4 border border-primary/20"
          >
            <Image
              src={profile.src}
              alt="Brian Coupama développeur web freelance à La Réunion"
              width={320}
              height={320}
              className="w-full h-64 md:w-80 md:h-80 object-cover object-[center_-6px]"
              loading="eager"
            />
            <div className="bg-neutral-900 p-4 space-y-1">
              <p className="text-primary uppercase text-sm font-medium">
                Expertise locale
              </p>
              <span className="inline-flex items-center gap-0.5 text-sm">
                <MapPin className="w-3.5 h-3.5" /> Basé à Saint-Joseph, La
                Réunion
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
