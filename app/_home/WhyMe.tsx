import { whyMeData } from "@/app/data/whyMeData";
import Column from "@/components/Column";
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
          <div className="text-center md:mb-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Separator
                orientation="horizontal"
                className="bg-primary data-horizontal:w-10 data-horizontal:h-0.5"
              />
              <span className="max-sm:text-xs 2xl:text-lg text-base text-primary uppercase tracking-widest font-semibold">
                Pourquoi me choisir
              </span>
              <Separator
                orientation="horizontal"
                className="bg-primary data-horizontal:w-10 data-horizontal:h-0.5"
              />
            </div>
            <Title
              level={2}
              className="max-sm:text-3xl 2xl:text-3xl text-5xl font-bold text-neutral-800 dark:text-zinc-200 md:leading-snug leading-tight sm:max-w-xl mx-auto"
            >
              Des atouts <span className="text-primary">concrets.</span>
            </Title>
            <Subtitle className="max-sm:text-lg 2xl:text-xl text-xl leading-relaxed sm:max-w-lg sm:mx-auto">
              Au-delà des compétences techniques, voici ce qui fait la
              différence quand on travaille ensemble.
            </Subtitle>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {whyMeData.map((item, i) => (
            <div key={item.id} className={cn("h-full", item.className)}>
              <WhyMeCard item={item} index={i} />
            </div>
          ))}
        </div>
      </Column>
    </Section>
  );
}
