import { Spacing } from "@/components/Spacing";
import { getProjectFeatured } from "@/lib/api/projects";
import { getProfile } from "@/lib/api/user";
import type { Metadata } from "next";
import AboutMe from "./_home/AboutMe";
import FAQ from "./_home/FAQ";
import Hero from "./_home/Hero";
import Process from "./_home/Process";
import Projects from "./_home/Projects";
import Services from "./_home/Services";
import WhyMe from "./_home/WhyMe";

export const metadata: Metadata = {
  title: "Accueil | Brian Coupama - Développeur Web Freelance à La Réunion",
  description:
    "Développeur web freelance à La Réunion. Création de sites internet performants, applications web et solutions sur mesure pour les entreprises et indépendants.",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Accueil",
    description:
      "Développeur web freelance à La Réunion. Création de sites internet performants, applications web et solutions sur mesure pour les entreprises et indépendants.",
  },
};

export const revalidate = 60;

export default async function Home() {
  const profile = await getProfile();
  const projects = await getProjectFeatured();

  return (
    <>
      {/* HERO */}
      <Hero />
      {/* SPACING */}
      <Spacing size="sm" />
      {/* ABOUT ME */}
      <AboutMe profile={profile} />
      {/* SPACING */}
      <Spacing size="sm" />
      {/* WHY ME */}
      <WhyMe />
      {/* SPACING */}
      <Spacing size="sm" />
      {/* PROJECTS */}
      <Projects projects={projects} />
      {/* SPACING */}
      <Spacing size="sm" />
      {/* SERVICES */}
      <Services />
      {/* SPACING */}
      <Spacing size="sm" />
      {/* PROCESS */}
      <Process />
      {/* SPACING */}
      <Spacing size="sm" />
      {/* FAQ */}
      <FAQ />
      {/* SPACING */}
      <Spacing size="sm" />
    </>
  );
}
