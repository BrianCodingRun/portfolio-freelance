import Section from "@/components/Section";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  description:
    "Conditions Générales de Vente applicables aux prestations de développement web et mobile proposées par Brian Coupama, développeur freelance à La Réunion.",
  alternates: {
    canonical: "/cgv",
  },
  openGraph: {
    title: "Conditions Générales de Vente",
    description:
      "Conditions Générales de Vente applicables aux prestations de développement web et mobile proposées par Brian Coupama, développeur freelance à La Réunion.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const LAST_UPDATE = "28 avril 2026";

const sections = [
  { id: "objet", label: "Objet" },
  { id: "prestations", label: "Prestations" },
  { id: "devis", label: "Devis & commande" },
  { id: "tarifs", label: "Tarifs & paiement" },
  { id: "delais", label: "Délais de réalisation" },
  { id: "obligations", label: "Obligations des parties" },
  { id: "propriete", label: "Propriété intellectuelle" },
  { id: "confidentialite", label: "Confidentialité" },
  { id: "responsabilite", label: "Responsabilité" },
  { id: "resiliation", label: "Résiliation" },
  { id: "litiges", label: "Litiges" },
  { id: "maintenance", label: "Forfaits de maintenance" },
];

export default function CGVPage() {
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
            Conditions Générales de Vente
          </h1>
          <p className="text-sm text-muted-foreground">
            Dernière mise à jour :{" "}
            <span className="text-foreground font-medium">{LAST_UPDATE}</span>
          </p>
          <div className="mt-4 p-4 border border-primary/20 bg-primary/5">
            <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
              Les présentes Conditions Générales de Vente (CGV) {"s'appliquent"}{" "}
              à toutes les prestations de services conclues entre{" "}
              <span className="text-foreground font-medium">Coupama Brian</span>
              , développeur web freelance domicilié à Saint-Joseph, La Réunion
              (97480), ci-après désigné le{" "}
              <span className="text-foreground font-medium">
                « Prestataire »
              </span>
              , et tout client professionnel ou particulier, ci-après désigné le{" "}
              <span className="text-foreground font-medium">« Client »</span>.
            </p>
          </div>
        </div>

        {/* Navigation rapide */}
        <nav className="flex flex-wrap gap-2">
          {sections.map((s) => (
            <Link
              key={s.id}
              href={`#${s.id}`}
              className="text-sm font-medium px-3 py-1.5 border border-border text-muted-foreground hover:border-primary/40 hover:text-primary transition-all duration-200"
            >
              {s.label}
            </Link>
          ))}
        </nav>

        <Separator />

        {/* Article 1 — Objet */}
        <div id="objet" className="flex flex-col gap-4 scroll-mt-20">
          <SectionTitle index="01">Objet</SectionTitle>
          <Prose>
            Les présentes CGV ont pour objet de définir les droits et
            obligations des parties dans le cadre de la réalisation de
            prestations de services informatiques, notamment la conception, le
            développement et la mise en ligne de sites internet,{" "}
            {"d'applications"} web et mobiles, ainsi que toute prestation annexe
            (maintenance, conseil, formation).
          </Prose>
          <Prose>
            Toute commande implique {"l'acceptation"} sans réserve des présentes
            CGV. Le Client déclare en avoir pris connaissance avant toute
            passation de commande.
          </Prose>
        </div>

        <Separator />

        {/* Article 2 — Prestations */}
        <div id="prestations" className="flex flex-col gap-4 scroll-mt-20">
          <SectionTitle index="02">Prestations proposées</SectionTitle>
          <Prose>
            Le Prestataire propose notamment les services suivants :
          </Prose>
          <ul className="flex flex-col gap-2 pl-4">
            {[
              "Conception et développement de sites vitrines, e-commerce et applications web sur mesure",
              "Développement frontend (React, Next.js, TypeScript, Tailwind CSS)",
              "Développement backend (Node.js, Symfony, API REST, MongoDB, MySQL)",
              "Déploiement et mise en ligne (VPS, hébergement, nom de domaine)",
              "Maintenance corrective et évolutive",
              "Conseil et accompagnement en stratégie digitale",
              "Formation à la gestion du site livré",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>
          <Prose>
            {
              "Chaque prestation fait l'objet d'un devis détaillé avant tout démarrage. Les prestations non expressément mentionnées dans le devis sont exclues du périmètre et feront l'objet d'un avenant tarifaire."
            }
          </Prose>
        </div>

        <Separator />

        {/* Article 3 — Devis & commande */}
        <div id="devis" className="flex flex-col gap-4 scroll-mt-20">
          <SectionTitle index="03">Devis & commande</SectionTitle>
          <Prose>
            {
              "Toute prestation débute par l'établissement d'un devis gratuit, transmis au Client par email. Ce devis précise la nature des travaux, le délai de réalisation estimé et le montant HT de la prestation."
            }
          </Prose>
          <Prose>
            Le devis est valable{" "}
            <span className="text-foreground font-medium">30 jours</span> à
            compter de sa date {"d'émission"}. Passé ce délai, le Prestataire se
            réserve le droit de le réévaluer.
          </Prose>
          <Prose>
            La commande est considérée comme ferme et définitive à réception :
          </Prose>
          <ul className="flex flex-col gap-2 pl-4">
            {[
              "Du devis signé (ou de l'accord écrit par email)",
              "Du versement de l'acompte prévu au devis",
              "Des éléments nécessaires au démarrage du projet (cahier des charges, accès, contenus)",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Separator />

        {/* Article 4 — Tarifs & paiement */}
        <div id="tarifs" className="flex flex-col gap-4 scroll-mt-20">
          <SectionTitle index="04">Tarifs & paiement</SectionTitle>
          <Prose>
            Les tarifs sont exprimés en euros hors taxes (HT). Le Prestataire
            bénéficie de la franchise de TVA conformément à {"l'article"} 293B
            du CGI — la mention <em>{'"TVA non applicable"'}</em> figure sur
            toutes les factures.
          </Prose>

          <SubTitle>Modalités de paiement</SubTitle>
          <ul className="flex flex-col gap-2 pl-4">
            {[
              "Acompte de 30 % à la commande (démarrage des travaux)",
              "Solde de 70 % à la livraison, avant mise en ligne",
              "Pour les projets supérieurs à 2 000 €, un échéancier intermédiaire peut être convenu",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>

          <SubTitle>Moyens de paiement acceptés</SubTitle>
          <Prose>
            Virement bancaire. Les coordonnées bancaires sont transmises avec
            chaque facture.
          </Prose>

          <SubTitle>Retard de paiement</SubTitle>
          <Prose>
            {
              "Toute facture impayée à échéance entraîne de plein droit l'application de pénalités de retard au taux légal en vigueur, ainsi qu'une indemnité forfaitaire de recouvrement de 40 € conformément à l'article L441-10 du Code de commerce. Le Prestataire se réserve le droit de suspendre les travaux en cours en cas de non-paiement."
            }
          </Prose>
        </div>

        <Separator />

        {/* Article 5 — Délais */}
        <div id="delais" className="flex flex-col gap-4 scroll-mt-20">
          <SectionTitle index="05">Délais de réalisation</SectionTitle>
          <Prose>
            Les délais de réalisation sont indiqués à titre estimatif dans le
            devis. Ils sont conditionnés à la transmission en temps et en heure
            par le Client de {"l'ensemble"} des éléments nécessaires (contenus,
            retours, validations).
          </Prose>
          <Prose>
            Tout retard imputable au Client (absence de retour supérieure à{" "}
            <span className="text-foreground font-medium">7 jours ouvrés</span>)
            entraîne automatiquement un report du délai de livraison équivalent
            à la durée du retard. Le Prestataire ne pourra être tenu responsable
            des délais non respectés pour cette raison.
          </Prose>
          <Prose>
            Toute modification substantielle du cahier des charges en cours de
            projet fera {"l'objet d'un avenant précisant l'impact"} sur les
            délais et le tarif.
          </Prose>
        </div>

        <Separator />

        {/* Article 6 — Obligations des parties */}
        <div id="obligations" className="flex flex-col gap-4 scroll-mt-20">
          <SectionTitle index="06">Obligations des parties</SectionTitle>

          <SubTitle>Obligations du Prestataire</SubTitle>
          <ul className="flex flex-col gap-2 pl-4">
            {[
              "Réaliser les prestations convenues avec soin et diligence",
              "Informer le Client de l'avancement des travaux",
              "Respecter la confidentialité des informations transmises",
              "Livrer un travail conforme aux spécifications du devis",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>

          <SubTitle>Obligations du Client</SubTitle>
          <ul className="flex flex-col gap-2 pl-4">
            {[
              "Fournir en temps utile tous les éléments nécessaires à la réalisation (textes, images, accès)",
              "Répondre aux demandes de validation dans les délais convenus",
              "Régler les factures aux échéances prévues",
              "S'assurer de disposer des droits sur les contenus transmis au Prestataire",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Separator />

        {/* Article 7 — Propriété intellectuelle */}
        <div id="propriete" className="flex flex-col gap-4 scroll-mt-20">
          <SectionTitle index="07">Propriété intellectuelle</SectionTitle>
          <Prose>
            {
              "Le Prestataire conserve la pleine propriété intellectuelle de l'ensemble des créations réalisées jusqu'au paiement intégral de la prestation. À réception du solde, les droits d'exploitation sont cédés au Client pour une utilisation dans le cadre défini par le devis."
            }
          </Prose>
          <Prose>
            Le Prestataire se réserve le droit de mentionner la réalisation dans
            son portfolio et ses supports de communication, sauf demande
            expresse de confidentialité du Client formulée par écrit.
          </Prose>
          <Prose>
            Les outils, frameworks et bibliothèques open source utilisés dans le
            cadre du projet restent soumis à leurs licences respectives. Le
            Client est seul responsable de {"l'utilisation des contenus qu'il"}{" "}
            fournit (textes, images, logos) et garantit en disposer des droits
            nécessaires.
          </Prose>
        </div>

        <Separator />

        {/* Article 8 — Confidentialité */}
        <div id="confidentialite" className="flex flex-col gap-4 scroll-mt-20">
          <SectionTitle index="08">Confidentialité</SectionTitle>
          <Prose>
            Le Prestataire {"s'engage"} à garder strictement confidentiels tous
            les documents, informations et données transmis par le Client dans
            le cadre de la prestation, et à ne pas les divulguer à des tiers
            sans autorisation écrite préalable.
          </Prose>
          <Prose>
            Cette obligation de confidentialité demeure valable pendant toute la
            durée de la prestation et pendant une période de{" "}
            <span className="text-foreground font-medium">3 ans</span> après son
            achèvement.
          </Prose>
        </div>

        <Separator />

        {/* Article 9 — Responsabilité */}
        <div id="responsabilite" className="flex flex-col gap-4 scroll-mt-20">
          <SectionTitle index="09">Responsabilité</SectionTitle>
          <Prose>
            Le Prestataire est soumis à une obligation de moyens. Sa
            responsabilité ne pourra être engagée {"qu'en"} cas de faute
            prouvée. En tout état de cause, la responsabilité du Prestataire est
            limitée au montant de la prestation concernée.
          </Prose>
          <Prose>
            {
              "Le Prestataire ne saurait être tenu responsable des dommages indirects tels que perte de chiffre d'affaires, perte de données ou atteinte à l'image, résultant de l'utilisation ou de l'impossibilité d'utilisation des livrables."
            }
          </Prose>
          <Prose>
            Il appartient au Client de sauvegarder régulièrement ses données. Le
            Prestataire ne pourra être tenu responsable de la perte de données
            survenue en dehors des phases de développement actif.
          </Prose>
        </div>

        <Separator />

        {/* Article 10 — Résiliation */}
        <div id="resiliation" className="flex flex-col gap-4 scroll-mt-20">
          <SectionTitle index="10">Résiliation</SectionTitle>
          <Prose>
            {
              "En cas de résiliation à l'initiative du Client, les travaux réalisés jusqu'à la date de résiliation sont facturés au prorata de l'avancement. L'acompte versé reste acquis au Prestataire."
            }
          </Prose>
          <Prose>
            En cas de manquement grave du Prestataire à ses obligations, le
            Client peut résilier le contrat par lettre recommandée avec accusé
            de réception, après mise en demeure restée sans effet pendant{" "}
            <span className="text-foreground font-medium">15 jours</span>. Dans
            ce cas, seules les prestations effectivement réalisées sont dues.
          </Prose>
        </div>

        <Separator />

        {/* Article 11 — Litiges */}
        <div id="litiges" className="flex flex-col gap-4 scroll-mt-20">
          <SectionTitle index="11">Litiges & droit applicable</SectionTitle>
          <Prose>
            Les présentes CGV sont soumises au droit français. En cas de litige,
            les parties {"s'engagent"} à rechercher une solution amiable avant
            tout recours judiciaire.
          </Prose>
          <Prose>
            À défaut {"d'accord"} amiable dans un délai de{" "}
            <span className="text-foreground font-medium">30 jours</span>, tout
            litige relatif à {"l'interprétation"} ou à {"l'exécution"} des
            présentes sera soumis à la compétence exclusive des tribunaux du
            ressort de Saint-Denis de La Réunion.
          </Prose>
          <Prose>
            Pour toute question relative aux présentes CGV, vous pouvez nous
            contacter à {"l'adresse"} :{" "}
            <a
              href="mailto:dev.contact@briancoupama.re"
              className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              dev.contact@briancoupama.re
            </a>
          </Prose>
        </div>

        <Separator />

        {/* Article 12 — Forfaits de maintenance */}
        <div id="maintenance" className="flex flex-col gap-4 scroll-mt-20">
          <SectionTitle index="12">Forfaits de maintenance</SectionTitle>
          <Prose>
            Les forfaits de maintenance proposés par le Prestataire{" "}
            {"s'appliquent"} exclusivement aux sites et applications réalisés
            par ses soins.
          </Prose>

          <SubTitle>Souscription</SubTitle>
          <Prose>
            La souscription à un forfait de maintenance est formalisée par un
            accord écrit (email ou devis signé) précisant le forfait choisi et
            sa date de démarrage. Le forfait prend effet à compter de la date de
            livraison du projet ou à toute autre date convenue entre les
            parties.
          </Prose>

          <SubTitle>Facturation</SubTitle>
          <Prose>
            Les forfaits de maintenance sont facturés mensuellement, à terme
            échu, par virement bancaire. Toute période entamée est due
            intégralement.
          </Prose>

          <SubTitle>Sans engagement</SubTitle>
          <Prose>
            Les forfaits de maintenance sont proposés sans engagement de durée
            minimale. Le Client peut résilier à tout moment par email adressé à{" "}
            <a
              href="mailto:dev.contact@briancoupama.re"
              className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              dev.contact@briancoupama.re
            </a>
            , sous réserve {"d'un"} préavis de{" "}
            <span className="text-foreground font-medium">
              15 jours calendaires
            </span>{" "}
            avant la prochaine échéance de facturation. Toute demande de
            résiliation reçue moins de 15 jours avant {"l'échéance"} entraîne la
            facturation du mois suivant.
          </Prose>

          <SubTitle>Suspension et résiliation par le Prestataire</SubTitle>
          <Prose>
            En cas de facture impayée après relance restée sans réponse sous{" "}
            <span className="text-foreground font-medium">7 jours ouvrés</span>,
            le Prestataire se réserve le droit de suspendre immédiatement les
            prestations de maintenance sans mise en demeure préalable. La
            résiliation définitive pourra intervenir après{" "}
            <span className="text-foreground font-medium">
              30 jours {"d'impayé"}
            </span>
            .
          </Prose>

          <SubTitle>Contenu des forfaits</SubTitle>
          <Prose>
            Le détail des prestations incluses dans chaque forfait est précisé
            sur le site du Prestataire. Toute intervention dépassant le volume{" "}
            {"d'heures"} inclus dans le forfait souscrit fera {"l'objet"}{" "}
            {"d'un"} devis complémentaire au tarif horaire en vigueur.
          </Prose>
        </div>

        <Separator />

        {/* Liens utiles */}
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="text-xs font-medium px-3 py-2 border border-border text-muted-foreground hover:border-primary/40 hover:text-primary transition-all duration-200"
          >
            Me contacter
          </Link>
          <Link
            href="/legal"
            className="inline-flex items-center gap-1 text-xs font-medium px-3 py-2 border border-border text-muted-foreground hover:border-primary/40 hover:text-primary transition-all duration-200"
          >
            Mentions légales <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </Section>
  );
}

function SectionTitle({
  children,
  index,
}: {
  children: React.ReactNode;
  index: string;
}) {
  return (
    <div className="relative pb-2">
      <h2 className="text-xl lg:text-2xl font-semibold text-foreground flex items-center gap-3">
        <span className="text-xs lg:text-sm font-mono font-medium text-primary bg-primary/10 border border-primary/20 px-2 py-0.5">
          Art. {index}
        </span>
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
