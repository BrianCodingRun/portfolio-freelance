"use client";

import LinkIcon from "@/components/LinkIcon";
import FadeUp from "@/components/motion/FadeUp";
import Opacity from "@/components/motion/Opacity";
import Section from "@/components/Section";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

export default function Contact() {
  return (
    <Section>
      <div className="w-full flex flex-col gap-8">
        {/* Header */}
        <FadeUp delay={0.4}>
          <div className="w-full md:w-5/6 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Separator orientation="horizontal" className="bg-primary w-8" />
              <span className="text-primary uppercase text-sm font-display">
                Mes moyens de contact
              </span>
            </div>
            <Title level={2} className="text-current">
              Travaillons ensemble.
            </Title>
            <Subtitle className="text-muted-foreground not-italic py-2">
              Je suis toujours ravi de discuter de nouvelles opportunités,
              collaborations ou simplement de répondre à vos questions.
            </Subtitle>
          </div>
        </FadeUp>

        {/* CTA Email — mis en avant */}
        <Opacity delay={0.2}>
          <Link
            href="mailto:dev.contact@briancoupama.re"
            className="inline-flex items-center gap-3 px-6 py-4 rounded-md border
            w-full md:w-fit transition-all duration-200 group bg-card border-primary/25"
          >
            <div className="w-4 h-4 rounded-lg flex items-center justify-center shrink-0 bg-primary/10 text-primary">
              <FaEnvelope className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">
                Envoyer un email
              </span>
              <span
                className="text-sm font-medium text-primary"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                }}
              >
                dev.contact@briancoupama.re
              </span>
            </div>
          </Link>
        </Opacity>

        {/* Séparateur + réseaux */}
        <Opacity delay={0.2}>
          <div className="flex justify-center">
            <Separator orientation="horizontal" className="md:hidden w-12" />
          </div>
          <div className="flex flex-col gap-3 items-center md:items-start">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Me retrouver sur
            </p>
            <div className="flex gap-4">
              <LinkIcon
                icon={<FaLinkedin />}
                link="https://www.linkedin.com/in/brian-coupama/"
                subscriber="112"
              />
              <LinkIcon
                icon={<FaInstagram />}
                link="https://www.instagram.com/briandevrun/"
                subscriber="26"
              />
              <LinkIcon
                icon={<FaXTwitter />}
                link="https://x.com/CoupamaBrian"
                subscriber="24"
              />
            </div>
          </div>
        </Opacity>
      </div>
    </Section>
  );
}
