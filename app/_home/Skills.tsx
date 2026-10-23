import {
  categoryLabels,
  skillsData,
  type SkillCategory,
} from "@/app/data/skillsData";
import Column from "@/components/Column";
import Section from "@/components/Section";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { Separator } from "@/components/ui/separator";
import SkillCard from "./components/SkillCard";

const CATEGORIES: SkillCategory[] = ["frontend", "backend", "outils"];

export default function Skills() {
  return (
    <Section id="skills">
      <Column>
        {/* Header centré */}
        <div className="text-center md:mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Separator
              orientation="horizontal"
              className="bg-primary data-horizontal:w-10 data-horizontal:h-0.5"
            />
            <span className="max-sm:text-xs 2xl:text-lg text-base text-primary uppercase tracking-widest font-semibold">
              Ma stack technique
            </span>
            <Separator
              orientation="horizontal"
              className="bg-primary data-horizontal:w-10 data-horizontal:h-0.5"
            />
          </div>
          <Title
            level={2}
            className="max-sm:text-3xl 2xl:text-3xl text-5xl font-bold text-neutral-800 dark:text-zinc-200 md:leading-snug leading-tight md:max-w-lg md:mx-auto"
          >
            Avec quoi je <span className="text-primary">travaille.</span>
          </Title>
          <Subtitle className="max-sm:text-lg 2xl:text-xl text-xl leading-relaxed sm:max-w-lg sm:mx-auto">
            {
              "Les outils que j'utilise au quotidien pour livrer des projets fiables, rapides et maintenables."
            }
          </Subtitle>
        </div>

        {/* Skills par catégorie */}
        <div className="flex flex-col gap-8 mt-6">
          {CATEGORIES.map((category) => {
            const skills = skillsData.filter((s) => s.category === category);
            if (!skills.length) return null;

            return (
              <div key={category}>
                {/* Label catégorie */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {categoryLabels[category]}
                  </span>
                  <span className="flex-1 h-px bg-border" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 gap-2">
                  {skills.map((skill) => (
                    <SkillCard key={skill.id} {...skill} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Column>
    </Section>
  );
}
