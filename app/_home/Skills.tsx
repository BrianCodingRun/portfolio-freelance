import {
  categoryLabels,
  skillsData,
  type SkillCategory,
} from "@/app/data/skillsData";
import FadeUp from "@/components/motion/FadeUp";
import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";
import Section from "@/components/Section";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { Separator } from "@/components/ui/separator";
import SkillCard from "./components/SkillCard";

const CATEGORIES: SkillCategory[] = ["frontend", "backend", "outils"];

export default function Skills() {
  return (
    <Section id="skills">
      <div className="w-full flex flex-col">
        {/* Header centré */}
        <FadeUp delay={0.4}>
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Separator orientation="horizontal" className="bg-primary w-8" />
              <span className="text-primary uppercase text-sm font-display">
                Ma stack technique
              </span>
              <Separator orientation="horizontal" className="bg-primary w-8" />
            </div>
            <Title level={2} className="text-current">
              Avec quoi je travaille.
            </Title>
            <Subtitle className="py-2 max-w-lg mx-auto">
              {
                "Les outils que j'utilise au quotidien pour livrer des projets fiables, rapides et maintenables."
              }
            </Subtitle>
          </div>
        </FadeUp>

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
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 gap-3">
                  {skills.map((skill) => (
                    <StaggerItem key={skill.id}>
                      <SkillCard {...skill} />
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
