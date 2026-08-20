import Column from "@/components/Column";
import FadeUp from "@/components/motion/FadeUp";
import Opacity from "@/components/motion/Opacity";
import Section from "@/components/Section";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { getActivePricings } from "@/lib/api/pricings";
import { generateFaqData } from "@/lib/faq";

export default async function FAQ() {
  const pricings = await getActivePricings();

  const faqData = generateFaqData(pricings);
  return (
    <Section>
      <Column>
        <div className="w-full">
          <FadeUp delay={0.4}>
            <div className="flex items-center gap-2 mb-4">
              <Separator
                orientation="horizontal"
                className="bg-primary data-horizontal:w-8"
              />
              <span className="text-primary uppercase text-sm sm:text-base font-semibold">
                FAQ
              </span>
            </div>
            <Title level={2} className="text-current">
              Questions fréquentes.
            </Title>
            <Subtitle className="text-muted-foreground not-italic py-2">
              Tout ce que vous devez savoir avant de démarrer votre projet web
              avec moi.
            </Subtitle>
          </FadeUp>
        </div>

        <Opacity delay={0.3}>
          <Accordion className="w-full">
            {faqData.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Opacity>
      </Column>
    </Section>
  );
}
