import { whyMeData } from "@/app/data/whyMeData";
import Column from "@/components/Column";
import FadeUp from "@/components/motion/FadeUp";
import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";
import Section from "@/components/Section";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { Separator } from "@/components/ui/separator";
import WhyMeCard from "./components/WhyMeCard";

export default function WhyMe() {
  return (
    <Section>
      <Column>
        <div className="w-full">
          <FadeUp delay={0.4}>
            <div className="text-center mb-5 md:mb-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Separator
                  orientation="horizontal"
                  className="bg-primary data-horizontal:w-10"
                />
                <span className="text-primary font-semibold uppercase text-sm sm:text-base">
                  Pourquoi me choisir
                </span>
                <Separator
                  orientation="horizontal"
                  className="bg-primary data-horizontal:w-10"
                />
              </div>
              <Title level={2} className="text-current">
                Des atouts concrets.
              </Title>
              <Subtitle className="py-2 sm:max-w-lg sm:mx-auto">
                Au-delà des compétences techniques, voici ce qui fait la
                différence quand on travaille ensemble.
              </Subtitle>
            </div>
          </FadeUp>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {whyMeData.map((item) => (
            <StaggerItem key={item.id}>
              <WhyMeCard item={item} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Column>
    </Section>
  );
}
