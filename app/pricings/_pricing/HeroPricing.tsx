import ScrollToSection from "@/app/_home/components/ScrollToSection";
import FadeUp from "@/components/motion/FadeUp";
import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";
import Section from "@/components/Section";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BadgeEuro, Mail } from "lucide-react";
import Link from "next/link";

export default function HeroPricing() {
  return (
    <Section>
      <StaggerContainer className="py-6 max-w-2xl mx-auto text-center space-y-6">
        <StaggerItem>
          <Badge className="text-sm p-3">Votre besoin, ma solution.</Badge>
        </StaggerItem>
        <StaggerItem>
          <Title level={1} className="text-current md:text-5xl">
            Des solutions web sur mesure pour propulser{" "}
            <span className="text-primary">votre activité</span>
          </Title>
        </StaggerItem>
        <StaggerItem>
          <Subtitle className="py-0">
            Alliant rigueur technique et design centré sur {"l'"}utilisateur
            pour transformer vos idées en expériences numériques performantes et
            mémorables.
          </Subtitle>
        </StaggerItem>
        <FadeUp delay={0.02}>
          <div className="flex gap-2 flex-col sm:flex-row w-full sm:w-auto items-center justify-center">
            <ScrollToSection id="pricings" size="lg">
              <BadgeEuro />
              Voir les tarifs
            </ScrollToSection>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "font-medium shadow-none w-full sm:w-auto justify-center border-primary text-primary",
              )}
            >
              <Mail />
              Me contacter
            </Link>
          </div>
        </FadeUp>
      </StaggerContainer>
    </Section>
  );
}
