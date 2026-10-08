import { whyMeData } from "@/app/data/whyMeData";
import Column from "@/components/Column";
import FadeUp from "@/components/motion/FadeUp";
import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";
import Section from "@/components/Section";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
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
                  className="bg-primary data-horizontal:w-10 data-horizontal:h-0.5"
                />
                <span className="text-primary font-semibold uppercase text-sm sm:text-base">
                  Pourquoi me choisir
                </span>
                <Separator
                  orientation="horizontal"
                  className="bg-primary data-horizontal:w-10 data-horizontal:h-0.5"
                />
              </div>
              <Title
                level={2}
                className="max-sm:text-lg 2xl:text-3xl text-5xl font-bold text-neutral-800 dark:text-zinc-200 leading-snug"
              >
                Des atouts <span className="text-primary">concrets.</span>
              </Title>
              <Subtitle className="max-sm:text-base 2xl:text-lg text-xl leading-relaxed sm:max-w-lg sm:mx-auto">
                Au-delà des compétences techniques, voici ce qui fait la
                différence quand on travaille ensemble.
              </Subtitle>
            </div>
          </FadeUp>
        </div>

        <StaggerContainer className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {whyMeData.map((item, i) => (
            <StaggerItem key={item.id} className={cn("h-full", item.className)}>
              <WhyMeCard item={item} index={i} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Column>
    </Section>
  );
}
