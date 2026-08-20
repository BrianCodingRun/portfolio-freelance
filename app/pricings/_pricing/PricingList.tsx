import Section from "@/components/Section";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";
import { Separator } from "@/components/ui/separator";
import type { Pricing } from "@/types/pricing";
import PricingTabs from "./PricingTabs";

export default function PricingList({ pricings }: { pricings: Pricing[] }) {
  return (
    <Section id="pricings" className="md:max-w-6xl">
      <StaggerContainer className="py-6 mx-auto text-center space-y-6">
        <StaggerItem>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Separator
              orientation="horizontal"
              className="bg-primary data-horizontal:w-8"
            />
            <span className="text-primary uppercase text-sm sm:text-base font-semibold">
              Ce que je propose ?
            </span>
            <Separator
              orientation="horizontal"
              className="bg-primary data-horizontal:w-8"
            />
          </div>
        </StaggerItem>
        <StaggerItem>
          <Title level={2} className="text-current md:text-3xl">
            Des tarifs qui {"s'adapte"} à votre besoin
          </Title>
        </StaggerItem>
        <StaggerItem>
          <Subtitle className="py-0 max-w-md mx-auto">
            Choisissez le forfait qui correspond à {"l'envergure"} de votre
            projet.
          </Subtitle>
        </StaggerItem>
        <PricingTabs pricings={pricings} />
      </StaggerContainer>
      <p className="mt-12 text-sm text-muted-foreground text-center">
        * TVA non applicable — art. 293B du CGI
      </p>
      <p className="mt-1 text-sm text-muted-foreground text-center">
        Paiement en 2 fois : 30 % à la signature, 70 % à la livraison par
        virement bancaire.
      </p>
    </Section>
  );
}
