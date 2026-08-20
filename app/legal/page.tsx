import Section from "@/components/Section";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site portfolio.briancoupama.re — Informations légales, propriété intellectuelle, confidentialité et conditions d'utilisation.",
  alternates: {
    canonical: "/legal",
  },
  openGraph: {
    title: "Mentions légales",
    description:
      "Mentions légales du site portfolio.briancoupama.re — Informations légales, propriété intellectuelle, confidentialité et conditions d'utilisation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const LAST_UPDATE = "3 mai 2026";

const sections = [
  { id: "identite", label: "Identité" },
  { id: "conditions", label: "Conditions d'utilisation" },
  { id: "informations", label: "Informations" },
  { id: "interactivite", label: "Interactivité" },
  { id: "propriete", label: "Propriété intellectuelle" },
  { id: "liens", label: "Liens" },
  { id: "confidentialite", label: "Confidentialité" },
  { id: "cgv", label: "CGV" },
];

export default function MentionsLegales() {
  return (
    <Section className="py-12">
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-12">
        {/* En-tête */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Separator
              orientation="horizontal"
              className="bg-primary data-horizontal:w-8"
            />
            <span className="text-primary uppercase text-sm">Légal</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Mentions légales
          </h1>
          <p className="text-sm text-muted-foreground">
            Dernière mise à jour :{" "}
            <span className="text-foreground font-medium">{LAST_UPDATE}</span>
          </p>
        </div>

        {/* Navigation rapide */}
        <nav className="flex flex-wrap gap-2">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-sm font-medium px-3 py-1.5 border border-border text-muted-foreground hover:border-primary/40 hover:text-primary transition-all duration-200"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <Separator />

        {/* Section : Identité */}
        <div id="identite" className="flex flex-col gap-4 scroll-mt-20">
          <SectionTitle>Identité</SectionTitle>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {[
              {
                label: "Nom du site",
                value: "Coupama Brian | Développeur Web Freelance à La Réunion",
              },
              {
                label: "Adresse",
                value: "https://portfolio.briancoupama.re",
              },
              { label: "Propriétaire", value: "Coupama Brian" },
              { label: "Responsable de publication", value: "Coupama Brian" },
              { label: "Conception & réalisation", value: "Coupama Brian" },
              { label: "Animation", value: "Coupama Brian" },
              { label: "SIRET", value: "10422444900017" },
              {
                label: "Forme juridique",
                value: "Micro-entreprise (Entrepreneur Individuel)",
              },
              {
                label: "Activité",
                value: "Programmation informatique (APE 6201Z)",
              },
              {
                label: "Siège social",
                value: "47 rue Vivienne, 75002 Paris",
              },
              {
                label: "Email",
                value: "dev.contact@briancoupama.re",
              },
              {
                label: "Téléphone",
                value: "0692 38 58 46",
              },
              {
                label: "TVA",
                value: "TVA non applicable — art. 293 B du CGI",
              },
            ].map((item) => (
              <div key={item.label}>
                <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-0.5">
                  {item.label}
                </dt>
                <dd className="text-sm text-foreground">{item.value}</dd>
              </div>
            ))}
            <div className="sm:col-span-2">
              <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-0.5">
                Hébergement
              </dt>
              <dd className="text-sm text-foreground">
                Hostinger —{" "}
                <Link
                  href="https://www.hostinger.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
                >
                  www.hostinger.fr
                </Link>
                , dont le siège se situe au 61 Lordou Vironos, Larnaca, CY,
                6023.
              </dd>
            </div>
          </dl>
        </div>

        <Separator />

        {/* Section : Conditions d'utilisation */}
        <div id="conditions" className="flex flex-col gap-4 scroll-mt-20">
          <SectionTitle>{"Conditions d'utilisation"}</SectionTitle>
          <Prose>
            {
              "L'utilisation du présent site implique l'acceptation pleine et entière des conditions générales d'utilisation décrites ci-après. Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout moment."
            }
          </Prose>
        </div>

        <Separator />

        {/* Section : Informations */}
        <div id="informations" className="flex flex-col gap-4 scroll-mt-20">
          <SectionTitle>Informations</SectionTitle>
          <Prose>
            {
              "Les informations et documents du site sont présentés à titre indicatif, sans caractère exhaustif, et ne peuvent engager la responsabilité du propriétaire du site. Le propriétaire du site ne peut être tenu responsable des dommages directs et indirects consécutifs à l'accès au site."
            }
          </Prose>
        </div>

        <Separator />

        {/* Section : Interactivité */}
        <div id="interactivite" className="flex flex-col gap-4 scroll-mt-20">
          <SectionTitle>Interactivité</SectionTitle>
          <Prose>
            Les utilisateurs du site peuvent y déposer du contenu, apparaissant
            sur le site dans des espaces dédiés (notamment via les
            commentaires). Le contenu déposé reste sous la responsabilité de
            leurs auteurs, qui en assument pleinement {"l'entière"}
            responsabilité juridique.
          </Prose>
          <Prose>
            Le propriétaire du site se réserve néanmoins le droit de retirer
            sans préavis et sans justification tout contenu déposé par les
            utilisateurs qui ne satisferait pas à la charte déontologique du
            site ou à la législation en vigueur.
          </Prose>
        </div>

        <Separator />

        {/* Section : Propriété intellectuelle */}
        <div id="propriete" className="flex flex-col gap-4 scroll-mt-20">
          <SectionTitle>Propriété intellectuelle</SectionTitle>
          <Prose>
            Sauf mention contraire, tous les éléments accessibles sur le site
            (textes, images, graphismes, logo, icônes, sons, logiciels, etc.)
            restent la propriété exclusive de leurs auteurs, en ce qui concerne
            les droits de propriété intellectuelle ou les droits
            {"d'usage"}.
          </Prose>
          <Prose>
            Toute reproduction, représentation, modification, publication,
            adaptation de tout ou partie des éléments du site, quel que soit le
            moyen ou le procédé utilisé, est interdite, sauf autorisation écrite
            préalable de {"l'auteur"}.
          </Prose>
          <Prose>
            {
              "Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient est considérée comme constitutive d'une contrefaçon et passible de poursuites. Les marques et logos reproduits sur le site sont déposés par les sociétés qui en sont propriétaires."
            }
          </Prose>
        </div>

        <Separator />

        {/* Section : Liens */}
        <div id="liens" className="flex flex-col gap-4 scroll-mt-20">
          <SectionTitle>Liens</SectionTitle>

          <SubTitle>Liens sortants</SubTitle>
          <Prose>
            Le propriétaire du site décline toute responsabilité et {"n'est"}{" "}
            pas engagé par le référencement via des liens hypertextes, de
            ressources tierces présentes sur le réseau Internet, tant en ce qui
            concerne leur contenu que leur pertinence.
          </Prose>

          <SubTitle>Liens entrants</SubTitle>
          <Prose>
            {
              "Le propriétaire du site autorise les liens hypertextes vers l'une des pages de ce site, à condition que ceux-ci ouvrent une nouvelle fenêtre et soient présentés de manière non équivoque afin d'éviter"
            }
            :
          </Prose>
          <ul className="flex flex-col gap-2 pl-4">
            {[
              "Tout risque de confusion entre le site citant et le propriétaire du site.",
              "Toute présentation tendancieuse, ou contraire aux lois en vigueur.",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>
          <Prose>
            {
              "Le propriétaire du site se réserve le droit de demander la suppression d'un lien s'il estime que le site source ne respecte pas les règles ainsi définies."
            }
          </Prose>
        </div>

        <Separator />

        {/* Section : Confidentialité */}
        <div id="confidentialite" className="flex flex-col gap-4 scroll-mt-20">
          <SectionTitle>Confidentialité</SectionTitle>
          <Prose>
            {
              'Ce site collecte des données analytiques de navigation (pages visitées, durée de session, appareil, navigateur, localisation approximative et adresse IP) uniquement avec votre consentement explicite. Ces données sont utilisées exclusivement à des fins statistiques internes et ne sont ni revendues ni partagées avec des tiers. Vous pouvez retirer votre consentement à tout moment via le bouton "Confidentialité" en bas de page.'
            }
          </Prose>
          <Prose>
            {
              "Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, d'opposition et de suppression de vos données. Pour exercer ces droits, contactez-nous à"
            }{" "}
            <a
              href="mailto:dev.contact@briancoupama.re"
              className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              dev.contact@briancoupama.re
            </a>
            .
          </Prose>
        </div>
        <Separator />
        <div id="cgv" className="flex flex-col gap-4 scroll-mt-20">
          <SectionTitle>Conditions Générales de Vente</SectionTitle>
          <Prose>
            Les Conditions Générales de Vente applicables à nos prestations sont
            consultables sur la page dédiée :{" "}
            <Link
              href="/cgv"
              className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              Voir les CGV
            </Link>
            .
          </Prose>
        </div>
      </div>
    </Section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative pb-2">
      <h2 className="text-xl lg:text-2xl font-semibold text-foreground">
        {children}
      </h2>
      <div className="absolute bottom-0 left-0 w-10 h-0.5 bg-primary rounded-full" />
    </div>
  );
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm lg:text-base font-semibold text-foreground">
      {children}
    </h3>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
      {children}
    </p>
  );
}
