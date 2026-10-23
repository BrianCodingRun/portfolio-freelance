import type { FAQItem } from "@/lib/faq";

import Section from "@/components/Section";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQSectionProps = {
  items: FAQItem[];
  description?: string;
};

export default function FAQSection({
  items,
  description = "Tout ce que vous devez savoir avant de démarrer votre projet web avec moi.",
}: FAQSectionProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <Section>
      <div>
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
            {description}
          </Subtitle>
        </div>
        <Accordion className="md:mx-auto w-full md:max-w-4xl my-4 md:my-8">
          {items.map((item) => (
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
                      md:pr-12
                      md:text-base
                    "
              >
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
