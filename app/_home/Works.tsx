import Section from "@/components/Section";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { Code } from "./components/Code";

export default function Works() {
  return (
    <Section>
      <div className="w-full flex flex-col md:flex-row gap-2 md:gap-4">
        <div className="w-full md:w-5/6">
          {/* TITLE */}
          <h2 className="text-2xl font-bold text-primary mb-4">
            Working experiences
          </h2>
          <div className="flex flex-col gap-2 md:items-start">
            {worksData.map((work, index) => (
              <div
                className="flex flex-row items-center gap-2 p-2 bg-card rounded-lg"
                key={index}
              >
                <div className="rounded-lg border bg-card text-card-foreground p-2">
                  <BriefcaseBusiness className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm">
                    {work.title} avec{" "}
                    <Code
                      className="text-muted-foreground"
                      style={{ fontFamily: "var(--font-geist-mono)" }}
                    >
                      {work.enterprise}
                    </Code>
                  </h3>
                  <p
                    className="text-xs text-muted-foreground"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    {work.start_date} - {work.end_date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-5/6">
          {/* TITLE */}
          <h2 className="text-2xl font-bold text-primary mb-4">Educations</h2>
          <div className="flex flex-col gap-2 md:items-start">
            {educationsData.map((educ, index) => (
              <div
                className="flex flex-row items-center gap-2 p-2 bg-card rounded-lg"
                key={index}
              >
                <div className="rounded-lg border bg-card text-card-foreground p-2">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm">
                    {educ.title} à{" "}
                    <Code
                      className="text-muted-foreground"
                      style={{ fontFamily: "var(--font-geist-mono)" }}
                    >
                      {educ.school}
                    </Code>
                  </h3>
                  <p
                    className="text-xs text-muted-foreground"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    {educ.start_date} - {educ.end_date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

const worksData = [
  {
    id: 1,
    title: "Développeur Web",
    enterprise: "Etienne Vaytilingom",
    type: "Stage",
    description:
      "J'ai développé pendant mon stage une plateforme d'émargement réalisé avec ReactJS et NodeJS, c'est à travers de ce stage que j'ai développé de nouvelles compétences avec NodeJS et notamment la mise en place d'un middleware d'authentification.",
    start_date: "Septembre 2023",
    end_date: "Novembre 2023",
  },
  {
    id: 2,
    title: "Développeur Wordpress",
    enterprise: "Cor&Tech",
    type: "Stage",
    description:
      "J'ai eu le plaisir durant ce stage de collabarer avec Cor&Tech sur 2 projets client.",
    start_date: "Août 2022",
    end_date: "Septembre 2022",
  },
  {
    id: 3,
    title: "Développeur Wordpress",
    enterprise: "Image Digitale",
    type: "Stage",
    description:
      "J'ai eu le plaisir durant ce stage de collabarer avec Image Digitale pour la refonte du site du gérant de la société.",
    start_date: "Octobre 2021",
    end_date: "Novembre 2021",
  },
];

const educationsData = [
  {
    id: 1,
    title: "TP Développeur Web",
    school: "IFR de Saint Pierre",
    description:
      "Préparation du titre professionnel de niveau 5 (Bac+2) de Développeur Web et Web Mobile.",
    start_date: "Mars 2023",
    end_date: "Décembre 2023",
  },
  {
    id: 2,
    title: "Applications Mobile",
    school: "IFR de Saint Pierre",
    description:
      "Formation de découverte sur la programmation mobile, j'ai pu découvrir les bases du développement web et mobile, ainsi que les bases de la programmation orienté objet. J'ai pu développer des applications mobiles avec Android Studio et des sites internet avec HTML, CSS et JavaScript.",
    start_date: "Juin 2022",
    end_date: "Septembre 2022",
  },
  {
    id: 3,
    title: "PMD",
    school: "IFR du Port",
    description:
      "Formation de découverte sur les métiers du digital et de l'innovation, j'ai pu découvrir les bases du développement web et mobile, ainsi que les bases de la programmation J'ai pu développer des sites internet avec HTML, CSS et JavaScript.",
    start_date: "Août 2021",
    end_date: "Novembre 2021",
  },
];
