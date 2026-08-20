import FadeUp from "@/components/motion/FadeUp";
import Opacity from "@/components/motion/Opacity";
import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";
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

export default async function FaqPricingPage() {
  const pricings = await getActivePricings();

  const faqData = generateFaqData(pricings);
  return (
    <Section>
      <StaggerContainer className="py-6 mx-auto text-center space-y-6">
        <StaggerItem>
          <div className="w-full">
            <FadeUp delay={0.4}>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Separator
                  orientation="horizontal"
                  className="bg-primary data-horizontal:w-8"
                />
                <span className="text-primary uppercase text-sm font-display">
                  FAQ
                </span>
                <Separator
                  orientation="horizontal"
                  className="bg-primary data-horizontal:w-8"
                />
              </div>
              <Title level={2} className="text-current">
                Questions fréquentes.
              </Title>
              <Subtitle className="text-muted-foreground not-italic py-2 max-w-md mx-auto">
                Tout ce que vous devez savoir avant de me confier votre projet.
              </Subtitle>
            </FadeUp>
          </div>
        </StaggerItem>

        <Opacity delay={0.3}>
          <Accordion className="max-w-4xl w-full mx-auto">
            {faqData.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-left text-sm sm:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Opacity>
      </StaggerContainer>
    </Section>
  );
}
