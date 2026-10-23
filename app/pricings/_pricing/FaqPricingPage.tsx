import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import Section from "@/components/Section";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { buttonVariants } from "@/components/ui/button";
import { getActivePricings } from "@/lib/api/pricings";
import { generateFaqData } from "@/lib/faq";
import { cn } from "@/lib/utils";

export default async function FaqPricingPage() {
  const pricings = await getActivePricings();
  const faqData = generateFaqData(pricings);

  return (
    <Section>
      <div>
        {/* En-tête */}
        <div className="mx-auto max-w-2xl space-y-3 md:space-y-5 md:text-center">
          <p className="text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Questions fréquentes
          </p>

          <Title
            level={2}
            className="text-3xl text-foreground font-semibold tracking-tight md:text-5xl"
          >
            Des réponses à vos <span className="text-primary">questions.</span>
          </Title>

          <Subtitle className="md:mx-auto py-0 max-w-xs md:max-w-lg text-muted-foreground not-italic">
            Tout ce qu&apos;il faut savoir avant de démarrer votre projet.
          </Subtitle>
        </div>

        {/* Questions */}
        <Accordion className="md:mx-auto w-full md:max-w-4xl my-4 md:my-8">
          {faqData.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border-border"
            >
              <AccordionTrigger className="py-4 text-left text-base font-medium leading-relaxed hover:no-underline md:py-5 md:text-lg [&>svg]:text-primary cursor-pointer">
                {item.question}
              </AccordionTrigger>

              <AccordionContent
                className="
                      pb-6
                      pr-4
                      text-left
                      text-sm
                      leading-relaxed
                      text-muted-foreground
                      md:pb-7
                      md:pr-8
                      md:text-base
                    "
              >
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact */}
        <section className="mx-auto w-full max-w-4xl border bg-card p-4 md:p-8 text-center space-y-4 my-6 md:my-12">
          <span className="block uppercase text-xs">
            Passons à {"l'"}action
          </span>
          <h2 className="text-2xl font-semibold">Un projet en tête ?</h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Un site web, une application ou une idée à concrétiser ? Échangeons
            sur vos besoins et donnons vie à votre projet.
          </p>
          <Link
            href="https://calendly.com/nexmyr/premier-echange"
            target="_blank"
            className={cn(buttonVariants({ variant: "default" }), "mt-4")}
          >
            Réservez un RDV ici
            <ArrowUpRight aria-hidden="true" className="size-5" />
          </Link>
        </section>
      </div>
    </Section>
  );
}
