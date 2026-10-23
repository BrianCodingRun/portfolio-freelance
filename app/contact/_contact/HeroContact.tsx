import Column from "@/components/Column";
import Row from "@/components/Row";
import Section from "@/components/Section";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";
import Link from "next/link";

export default function HeroContact() {
  return (
    <Section>
      <Column className="items-center gap-0 text-center">
        {/* Surtitre */}
        <Row className="mb-5 flex items-center justify-center gap-3">
          <Separator
            orientation="horizontal"
            className="bg-primary data-horizontal:h-0.5 data-horizontal:w-6 sm:data-horizontal:w-10"
          />

          <span className="text-xs font-semibold uppercase tracking-wider text-primary sm:text-sm">
            Parlons de votre projet
          </span>

          <Separator
            orientation="horizontal"
            className="bg-primary data-horizontal:h-0.5 data-horizontal:w-6 sm:data-horizontal:w-10"
          />
        </Row>

        {/* Titre principal */}
        <Title
          level={1}
          className="text-[clamp(1.35rem,5.5vw,1.875rem)] font-bold leading-tight tracking-tight text-current sm:text-4xl lg:text-5xl 2xl:text-6xl"
        >
          Travaillons <span className="text-primary">ensemble.</span>
        </Title>

        {/* Description */}
        <Subtitle className="mx-auto mt-6 max-w-xl py-0 text-base leading-relaxed text-muted-foreground sm:mt-8 sm:max-w-2xl sm:text-lg lg:text-xl">
          Un projet de site web ou d&apos;application ? Parlons de vos besoins
          et trouvons ensemble la solution adaptée à votre activité.
        </Subtitle>

        {/* Appel à l'action */}
        <Column className="mt-8 flex flex-col items-center gap-3 sm:mt-10">
          <Link
            href="https://calendly.com/nexmyr/premier-echange"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({
                variant: "default",
                size: "lg",
              }),
              "group gap-2",
            )}
          >
            <Calendar className="size-4" aria-hidden="true" />
            Prendre rendez-vous
          </Link>

          <p className="text-center text-xs text-muted-foreground sm:text-sm">
            Un premier échange de 30 minutes via Calendly.
          </p>
        </Column>
      </Column>
    </Section>
  );
}
