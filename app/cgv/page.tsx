import Section from "@/components/Section";
import { Separator } from "@/components/ui/separator";
import { buildMetadata } from "@/lib/metadata";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Conditions Générales de Vente",
  description:
    "Conditions Générales de Vente applicables aux prestations de développement web et mobile proposées par Nexmyr (Brian Coupama), développeur freelance à La Réunion.",
  path: "/cgv",
});

const LAST_UPDATE = "23 octobre 2026";

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
              className="bg-primary data-horizontal:w-10 data-horizontal:h-0.5"
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
              Les présentes Conditions Générales de Vente (CGV) {"s'"}appliquent
              exclusivement aux prestations de services conclues à des fins
              professionnelles entre{" "}
              <span className="text-foreground font-medium">Coupama Brian</span>
              , exerçant sous le nom commercial{" "}
              <span className="text-foreground font-medium">Nexmyr</span>,
              développeur web indépendant domicilié à {"l'"}adresse indiquée
              dans les{" "}
              <Link
                href="/legal"
                className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                mentions légales
              </Link>
              , ci-après désigné le{" "}
              <span className="text-foreground font-medium">
                « Prestataire »
              </span>{" "}
              , et toute personne physique ou morale agissant dans le cadre de
              son activité professionnelle, ci-après désignée le{" "}
              <span className="text-foreground font-medium">« Client »</span>.
              <br /> <br />
              Les prestations proposées par Nexmyr sont exclusivement destinées
              à une clientèle professionnelle et ne {"s'"}adressent pas aux
              particuliers agissant à des fins personnelles.
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
            Les présentes Conditions Générales de Vente (CGV) définissent les
            droits et obligations du Prestataire et du Client dans le cadre des
            prestations numériques proposées par Nexmyr, notamment la
            conception, le développement, la refonte et la mise en ligne de
            sites internet et {"d'"}applications web ou mobiles, ainsi que les
            prestations de maintenance, de conseil, {"d'"}accompagnement et de
            formation. Les présentes CGV {"s'"}appliquent exclusivement aux
            prestations réalisées pour les besoins professionnels du Client.
          </Prose>
          <Prose>
            Elles sont communiquées au Client avant la conclusion du contrat.{" "}
            {"L'"}acceptation du devis ou de toute autre proposition
            contractuelle faisant expressément référence aux présentes CGV vaut
            acceptation de celles-ci, sous réserve {"qu'"}elles aient été
            préalablement mises à la disposition du Client.
          </Prose>
        </div>

        <Separator />

        {/* Article 2 — Prestations */}
        <div id="prestations" className="flex flex-col gap-4 scroll-mt-20">
          <SectionTitle index="02">Prestations proposées</SectionTitle>
          <Prose>
            Le Prestataire propose notamment les services suivants :
          </Prose>
          <ul className="flex flex-col gap-4 pl-4 pb-6">
            {[
              "Création et refonte de sites internet : conception, développement et mise en ligne de sites vitrines, de sites e-commerce et de solutions web sur mesure.",
              "Développement d'applications web et mobiles : conception et réalisation d'applications adaptées aux besoins et aux objectifs professionnels du Client.",
              "Développement frontend et backend : création d'interfaces utilisateur, développement de fonctionnalités métier, d'API et de systèmes de gestion de données.",
              "Déploiement et mise en ligne : configuration des environnements techniques, hébergement, noms de domaine et mise en production, selon les prestations convenues.",
              "Maintenance corrective et évolutive : suivi technique, mises à jour, résolution d'incidents et réalisation d'évolutions dans les limites de la prestation souscrite.",
              "Conseil et accompagnement : analyse des besoins, recommandations techniques et accompagnement dans la réalisation de projets numériques.",
              "Formation : accompagnement du Client dans la prise en main et l'utilisation des outils ou solutions livrés, lorsque cette prestation est prévue.",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-base text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>
          <Prose>
            {
              "Chaque prestation fait l'objet d'un devis ou d'une proposition contractuelle précisant notamment la nature des travaux, les livrables attendus, les conditions financières et les délais estimés."
            }
          </Prose>
          <Prose>
            {
              "Seules les prestations expressément prévues dans le devis accepté sont incluses dans le périmètre contractuel."
            }
          </Prose>
          <Prose>
            {
              "Toute demande de prestation supplémentaire ou de modification substantielle du périmètre initial fera l'objet d'une évaluation préalable de sa faisabilité et de son éventuel impact sur le prix et les délais."
            }
          </Prose>
          <Prose>
            {
              "Lorsqu'une facturation supplémentaire est nécessaire, un devis complémentaire ou un avenant sera soumis à l'accord du Client avant toute intervention concernée."
            }
          </Prose>
        </div>

        <Separator />

        {/* Article 3 — Devis & commande */}
        <div id="devis" className="flex flex-col gap-4 scroll-mt-20">
          <SectionTitle index="03">Devis & commande</SectionTitle>
          <SubTitle>Établissement du devis</SubTitle>
          <Prose>
            {
              "Toute prestation fait préalablement l'objet d'un devis gratuit, transmis au Client par courrier électronique."
            }
          </Prose>
          <Prose>
            {
              "Ce devis précise notamment la nature des prestations proposées, leur périmètre, les livrables attendus, les délais estimés de réalisation ainsi que les conditions financières applicables."
            }
          </Prose>
          <Prose>
            {
              "Le devis est valable pendant une durée de 30 jours calendaires à compter de sa date d'émission, sauf mention contraire. Passé ce délai, le Prestataire se réserve le droit de le réévaluer et d'émettre une nouvelle proposition."
            }
          </Prose>
          <SubTitle>Acceptation du devis</SubTitle>
          <Prose>
            La commande est considérée comme confirmée dès réception par le
            Prestataire :
          </Prose>
          <ul className="flex flex-col gap-2 pl-4">
            {[
              "Du devis signé par le Client, ou d'un accord écrit explicite par courrier électronique identifiant clairement le devis accepté ;",
              "De l'acceptation des présentes Conditions Générales de Vente, préalablement communiquées au Client.",
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
              "L'acceptation du devis formalise l'engagement contractuel des parties, sous réserve des dispositions légales impératives éventuellement applicables."
            }
          </Prose>
          <SubTitle>Démarrage de la prestation</SubTitle>
          <Prose>Le démarrage effectif des travaux est conditionné :</Prose>
          <ul className="flex flex-col gap-2 pl-4">
            {[
              "Au versement de l'acompte prévu au devis, lorsqu'un acompte est applicable ;",
              "À la transmission par le Client des informations, documents, contenus et accès nécessaires à la réalisation de la prestation ;",
              "À la validation des éléments préalables indispensables au lancement du projet, lorsqu'ils sont prévus.",
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
              "Le Prestataire ne peut être tenu responsable d'un retard de démarrage résultant de l'absence de ces éléments."
            }
          </Prose>
          <Prose>
            {
              "Les délais de réalisation sont calculés à partir de la date de démarrage effectivement convenue entre les parties, sauf disposition contraire expressément prévue au devis."
            }
          </Prose>
          <SubTitle>Modifications après acceptation</SubTitle>
          <Prose>
            {
              "Toute demande de modification du périmètre contractuel après acceptation du devis sera examinée par le Prestataire afin d'en évaluer la faisabilité et les éventuelles conséquences sur le coût et les délais."
            }
          </Prose>
          <Prose>
            {
              "Les modalités de traitement de ces modifications sont précisées à l'article 5 des présentes CGV."
            }
          </Prose>
        </div>

        <Separator />

        {/* Article 4 — Tarifs & paiement */}
        <div id="tarifs" className="flex flex-col gap-4 scroll-mt-20">
          <SectionTitle index="04">Tarifs & paiement</SectionTitle>
          <SubTitle>Tarifs</SubTitle>
          <Prose>
            {
              "Les tarifs sont exprimés en euros hors taxes (HT) et précisés dans le devis accepté par le Client. Le Prestataire bénéficie de la franchise en base de TVA : la mention « TVA non applicable, article 293 B du CGI » figure sur les factures tant que ce régime lui est applicable."
            }
          </Prose>

          <SubTitle>Modalités de paiement</SubTitle>
          <Prose>
            {"Pour les projets, le paiement est réparti comme suit :"}
          </Prose>
          <ul className="flex flex-col gap-2 pl-4">
            {[
              "Un acompte de 30 % du montant total à la commande, dont le règlement conditionne le démarrage des travaux conformément à l'article 3 ;",
              "Le solde de 70 % à la livraison, avant la mise en ligne du projet.",
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
              "Uniquement pour les projets dont le montant total est strictement supérieur à 2 000 € HT, un échéancier personnalisé peut être convenu entre les parties et expressément prévu dans le devis accepté. Cet échéancier précise les montants et les échéances de paiement et se substitue alors à la répartition de 30 % / 70 %. À défaut d'un tel échéancier, cette répartition reste applicable."
            }
          </Prose>
          <Prose>
            {
              "Les forfaits de maintenance sont facturés selon les modalités spécifiques prévues à l'article 12 des présentes CGV."
            }
          </Prose>

          <SubTitle>Moyen de paiement</SubTitle>
          <Prose>
            {
              "Les règlements sont effectués par virement bancaire, aux échéances prévues dans le devis et rappelées sur les factures. Les coordonnées bancaires du Prestataire sont transmises avec chaque facture."
            }
          </Prose>

          <SubTitle>Retard de paiement</SubTitle>
          <Prose>
            {
              "Dans les relations entre professionnels relevant du champ d'application de l'article L. 441-10 du Code de commerce, toute somme non réglée à l'échéance entraîne, dès le lendemain de la date de règlement figurant sur la facture, des pénalités de retard exigibles de plein droit, sans rappel préalable. Leur taux annuel est égal au taux d'intérêt appliqué par la Banque centrale européenne à son opération de refinancement la plus récente, majoré de 10 points de pourcentage. Le taux retenu est celui en vigueur au 1er janvier pour le premier semestre et au 1er juillet pour le second semestre de l'année concernée."
            }
          </Prose>
          <Prose>
            {
              "Sous réserve de son champ d'application et des exceptions légales, une indemnité forfaitaire de 40 € pour frais de recouvrement est également due de plein droit par facture payée en retard, conformément aux articles L. 441-10 et D. 441-5 du Code de commerce. Lorsque les frais de recouvrement exposés sont supérieurs à cette indemnité, une indemnisation complémentaire peut être demandée sur justification."
            }
          </Prose>

          <SubTitle>Suspension des prestations</SubTitle>
          <Prose>
            {
              "En cas de facture impayée à l'échéance, le Prestataire adresse au Client une relance écrite rappelant les sommes dues et l'avertissant de la suspension possible des prestations. À défaut de régularisation dans un délai de 7 jours ouvrés à compter de cette relance, le Prestataire se réserve le droit de suspendre les prestations en cours jusqu'au règlement des sommes exigibles. Les délais de réalisation sont ajustés en conséquence. Pour les forfaits de maintenance, les dispositions spécifiques de l'article 12 s'appliquent."
            }
          </Prose>
        </div>

        <Separator />

        {/* Article 5 — Délais de réalisation et suivi du projet */}
        <div id="delais" className="flex flex-col gap-4 scroll-mt-20">
          <SectionTitle index="05">
            Délais de réalisation et suivi du projet
          </SectionTitle>

          <SubTitle>Délais de réalisation</SubTitle>
          <Prose>
            Les délais de réalisation sont définis à titre estimatif dans le
            devis accepté par le Client, sauf engagement expressément convenu
            sur une date de livraison ferme.
          </Prose>
          <Prose>
            Ils commencent à courir à compter de la date de démarrage effectif
            du projet, conformément aux conditions prévues à {"l'article"} 3 des
            présentes CGV.
          </Prose>
          <Prose>
            Le respect des délais dépend notamment de la transmission, en temps
            utile, des informations, documents, contenus, accès et validations
            nécessaires à la bonne réalisation des prestations.
          </Prose>
          <Prose>
            Le Prestataire {"s'engage"} à informer le Client dans les meilleurs
            délais de toute difficulté susceptible {"d'affecter"} le calendrier
            initial et à lui communiquer, lorsque cela est possible, une
            nouvelle estimation de livraison.
          </Prose>

          <SubTitle>Suivi et validation des étapes</SubTitle>
          <Prose>
            Le Prestataire organise la réalisation du projet par phases, selon
            sa nature et sa complexité.
          </Prose>
          <Prose>
            Des points {"d'avancement"} sont prévus afin de présenter au Client
            les travaux réalisés, de recueillir ses observations et de valider
            ensemble les étapes importantes du projet.
          </Prose>
          <Prose>
            Le Client {"s'engage"} à transmettre ses retours et validations dans
            les délais convenus entre les parties afin de permettre la poursuite
            des travaux dans de bonnes conditions.
          </Prose>
          <Prose>
            Lorsque le projet comprend une phase de maquettage, celle-ci est
            réalisée conformément aux prestations expressément prévues dans le
            devis accepté.
          </Prose>

          <SubTitle>Retards imputables au Client</SubTitle>
          <Prose>
            En cas {"d'absence"} de réponse, de transmission de documents ou de
            validation nécessaire pendant une période supérieure à{" "}
            <span className="text-foreground font-medium">7 jours ouvrés</span>,
            le Prestataire pourra reporter le calendrier de réalisation en
            conséquence.
          </Prose>
          <Prose>
            Ce report tiendra compte de la durée du retard ainsi que des
            éventuelles contraintes de réorganisation du planning du
            Prestataire.
          </Prose>
          <Prose>
            Le Client sera informé de toute modification significative du
            calendrier.
          </Prose>
          <Prose>
            Les retards directement imputables au Client ne pourront être
            reprochés au Prestataire, sous réserve que ce dernier ait lui-même
            respecté ses obligations contractuelles.
          </Prose>

          <SubTitle>Ajustements mineurs en cours de projet</SubTitle>
          <Prose>
            Le Prestataire reconnaît que certains besoins peuvent évoluer au
            cours de la réalisation {"d'un"} projet.
          </Prose>
          <Prose>
            À titre exceptionnel et dans un souci {"d'accompagnement"}, le
            Prestataire peut accepter{" "}
            <span className="text-foreground font-medium">
              {"jusqu'à"} deux ajustements mineurs sur {"l'ensemble"} du projet
            </span>
            , sans facturation supplémentaire.
          </Prose>
          <Prose>
            Ces ajustements sont soumis à une évaluation préalable de leur
            faisabilité technique, de leur complexité et de leur incidence
            éventuelle sur le calendrier de réalisation.
          </Prose>
          <Prose>
            Leur acceptation reste à {"l'appréciation"} du Prestataire et ne
            constitue pas un droit automatique à modification du périmètre
            initial.
          </Prose>
          <Prose>
            Les corrections nécessaires pour assurer la conformité des livrables
            aux spécifications contractuelles ne sont pas comptabilisées parmi
            ces deux ajustements.
          </Prose>

          <SubTitle>Modifications substantielles du projet</SubTitle>
          <Prose>
            Toute demande de modification importante du cahier des charges,{" "}
            {"d'ajout"} de fonctionnalités ou de prestation non prévue
            initialement fera {"l'objet"} {"d'une"} évaluation préalable.
          </Prose>
          <Prose>
            Lorsque cette modification entraîne un coût supplémentaire ou une
            révision des délais, un devis complémentaire ou un avenant précisant
            les nouvelles conditions sera soumis à {"l'accord"} écrit du Client
            avant toute intervention concernée.
          </Prose>
          <Prose>
            En {"l'absence"} {"d'accord"}, le projet se poursuit selon le
            périmètre et les conditions initialement convenus, sous réserve de
            sa faisabilité.
          </Prose>
        </div>

        <Separator />

        {/* Article 6 — Obligations des parties */}
        <div id="obligations" className="flex flex-col gap-4 scroll-mt-20">
          <SectionTitle index="06">Obligations des parties</SectionTitle>

          <SubTitle>Obligations du Prestataire</SubTitle>
          <Prose>
            {
              "Le Prestataire s'engage à réaliser les prestations convenues avec professionnalisme, soin et diligence, conformément aux caractéristiques et aux conditions définies dans le devis accepté par le Client."
            }
          </Prose>
          <Prose>À ce titre, le Prestataire {"s'engage"} notamment à :</Prose>
          <ul className="flex flex-col gap-2 pl-4">
            {[
              "Mettre en œuvre les compétences et les moyens techniques raisonnablement nécessaires à la bonne exécution des prestations ;",
              "Informer régulièrement le Client de l'avancement du projet et des éventuelles difficultés susceptibles d'affecter sa réalisation ;",
              "Respecter les spécifications et les fonctionnalités expressément prévues dans le périmètre contractuel ;",
              "Solliciter les validations nécessaires aux différentes étapes du projet, conformément à l'article 5 des présentes CGV ;",
              "Préserver la confidentialité des informations, documents et accès transmis par le Client, conformément à l'article 8 ;",
              "Prendre des précautions raisonnables pour sécuriser les accès et environnements techniques placés sous sa responsabilité pendant la réalisation des prestations ;",
              "Signaler au Client les anomalies ou difficultés techniques significatives identifiées dans le cadre des interventions convenues.",
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
            Le Prestataire est tenu à une obligation de moyens dans{" "}
            {"l'exécution"} de ses prestations, sous réserve des engagements de
            résultat expressément convenus et des obligations légales
            applicables.
          </Prose>

          <SubTitle>Obligations du Client</SubTitle>
          <Prose>
            {
              "Le Client s'engage à collaborer activement avec le Prestataire afin de permettre la réalisation du projet dans de bonnes conditions."
            }
          </Prose>
          <Prose>À ce titre, le Client {"s'engage"} notamment à :</Prose>
          <ul className="flex flex-col gap-2 pl-4">
            {[
              "Fournir les informations, documents, contenus et accès nécessaires à la réalisation des prestations, dans les délais convenus ;",
              "Transmettre des informations exactes et signaler toute modification susceptible d'avoir une incidence sur le projet ;",
              "Désigner, lorsque cela est nécessaire, un interlocuteur habilité à communiquer les instructions et validations relatives au projet ;",
              "Examiner les livrables présentés et communiquer ses observations ou validations dans les conditions prévues à l'article 5 ;",
              "Régler les factures conformément aux échéances définies dans le devis et à l'article 4 ;",
              "Garantir qu'il dispose des droits et autorisations nécessaires à l'utilisation des textes, images, photographies, logos et autres contenus qu'il transmet au Prestataire ;",
              "Informer le Prestataire des contraintes particulières liées à son activité, notamment des exigences réglementaires ou professionnelles susceptibles d'affecter les fonctionnalités ou les contenus du projet ;",
              "Préserver la confidentialité de ses identifiants et signaler sans délai toute suspicion d'accès non autorisé aux services dont il assure la gestion.",
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
              "Le Client demeure responsable de l'exactitude, de la licéité et de la conformité des contenus et informations qu'il fournit, sous réserve des obligations propres au Prestataire et des prestations expressément convenues."
            }
          </Prose>

          <SubTitle>Collaboration et communication</SubTitle>
          <Prose>
            {
              "Les parties s'engagent à communiquer de bonne foi et à se transmettre les informations nécessaires à la bonne exécution du contrat."
            }
          </Prose>
          <Prose>
            Les échanges et validations peuvent être réalisés par courrier
            électronique ou par tout autre moyen écrit convenu entre les
            parties.
          </Prose>
          <Prose>
            {
              "Toute décision ayant une incidence significative sur le périmètre, le prix ou les délais de réalisation doit faire l'objet d'un accord écrit préalable, conformément aux articles 3 et 5 des présentes CGV."
            }
          </Prose>
          <Prose>
            {
              "En cas de difficulté susceptible de compromettre le bon déroulement du projet, chaque partie s'engage à en informer l'autre dans les meilleurs délais afin de rechercher une solution adaptée."
            }
          </Prose>
        </div>

        <Separator />

        {/* Article 7 — Propriété intellectuelle */}
        <div id="propriete" className="flex flex-col gap-4 scroll-mt-20">
          <SectionTitle index="07">Propriété intellectuelle</SectionTitle>
          <SubTitle>Propriété des créations et condition de paiement</SubTitle>
          <Prose>
            {
              "Les créations originales réalisées par le Prestataire dans le cadre d'une prestation demeurent soumises aux droits de propriété intellectuelle qui leur sont applicables."
            }
          </Prose>
          <Prose>
            {
              "Sous réserve des droits appartenant à des tiers et des dispositions particulières prévues au devis, la cession des droits patrimoniaux d'exploitation expressément définis ci-après prend effet après le règlement intégral des sommes dues au titre de la prestation concernée."
            }
          </Prose>
          <Prose>
            {
              "Jusqu'à ce règlement, le Client ne bénéficie que des autorisations d'utilisation éventuellement accordées par écrit par le Prestataire, notamment pour les besoins de présentation, de vérification ou de validation du projet."
            }
          </Prose>
          <SubTitle>Droits {"d'"}exploitation accordés au Client</SubTitle>
          <Prose>
            {
              "Après paiement intégral, le Prestataire cède au Client, à titre non exclusif, les droits patrimoniaux nécessaires à l'exploitation professionnelle des livrables originaux spécialement créés pour son projet et identifiés dans le devis accepté, dans les conditions suivantes :"
            }
          </Prose>
          <ul className="flex flex-col gap-2 pl-4">
            {[
              "Droit de reproduction : reproduire, héberger, stocker et sauvegarder les livrables sur les supports numériques nécessaires à leur exploitation.",
              "Droit de représentation : diffuser, afficher et rendre accessibles les livrables au public, notamment sur internet et sur les supports numériques correspondant à leur destination.",
              "Droit d'adaptation : modifier, corriger, maintenir et faire évoluer les livrables, directement ou par l'intermédiaire d'un autre professionnel, dans le respect des droits des tiers et des droits moraux applicables.",
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
              "Cette cession est consentie pour une exploitation liée à l'activité professionnelle du Client et aux finalités du projet définies dans le devis, pour le monde entier et pour toute la durée légale de protection des droits patrimoniaux concernés."
            }
          </Prose>
          <Prose>
            {
              "Elle ne comprend pas le droit de commercialiser séparément les créations ou composants sous forme de produits, modèles, bibliothèques ou solutions destinés à être redistribués à des tiers, sauf accord écrit spécifique."
            }
          </Prose>
          <Prose>
            {
              "Toute cession exclusive ou toute exploitation dépassant ce périmètre doit faire l'objet de dispositions expresses et adaptées dans le devis ou dans un accord écrit distinct."
            }
          </Prose>
          <SubTitle>Code source, outils et composants réutilisables</SubTitle>
          <Prose>
            {
              "Lorsque la prestation comprend le développement d'un site internet ou d'une application sur mesure, le Client bénéficie, après paiement intégral, des droits d'exploitation nécessaires à l'utilisation, à la maintenance et à l'évolution des développements spécifiques livrés, dans les conditions définies au présent article."
            }
          </Prose>
          <Prose>
            {
              "La remise des fichiers sources, des accès aux dépôts de code, de la documentation technique ou de tout autre élément permettant la reprise du projet par un tiers n'est incluse que lorsqu'elle est expressément prévue dans le devis accepté."
            }
          </Prose>
          <Prose>
            {
              "Le devis précise, le cas échéant, les éléments remis, leurs modalités de transmission et les éventuelles conditions particulières applicables."
            }
          </Prose>
          <Prose>
            {
              "Le Prestataire conserve ses droits sur les outils, méthodes, savoir-faire, structures techniques génériques, modèles et composants réutilisables développés antérieurement ou indépendamment du projet, ainsi que sur ceux qui ne font pas l'objet d'une cession expresse."
            }
          </Prose>
          <Prose>
            {
              "Lorsque de tels éléments sont intégrés aux livrables, le Prestataire accorde au Client, dans la mesure où il dispose des droits nécessaires, une licence non exclusive permettant leur utilisation, leur fonctionnement et leur maintenance dans le cadre du projet livré, sans droit de commercialisation ou de redistribution séparée."
            }
          </Prose>
          <SubTitle>Logiciels, bibliothèques et ressources de tiers</SubTitle>
          <Prose>
            {
              "Les frameworks, bibliothèques, extensions, logiciels, polices, images et autres ressources appartenant à des tiers demeurent soumis à leurs licences et conditions d'utilisation respectives."
            }
          </Prose>
          <Prose>
            {
              "Leur intégration dans un projet ne constitue pas une cession de leurs droits de propriété intellectuelle au Client."
            }
          </Prose>
          <Prose>
            {
              "Le Prestataire informe le Client, dans la mesure nécessaire à l'exploitation des livrables, des éventuelles licences, restrictions ou obligations particulières liées aux éléments tiers qu'il a sélectionnés et intégrés."
            }
          </Prose>
          <Prose>
            {
              "Les éventuels frais de licence, d'abonnement ou de renouvellement sont à la charge de la partie désignée dans le devis ou dans l'accord conclu entre les parties."
            }
          </Prose>
          <SubTitle>Contenus et éléments fournis par le Client</SubTitle>
          <Prose>
            {
              "Le Client conserve les droits qu'il détient sur les contenus et éléments qu'il transmet au Prestataire, notamment les textes, photographies, vidéos, logos, marques et documents."
            }
          </Prose>
          <Prose>
            {
              "Il garantit disposer des droits et autorisations nécessaires à leur utilisation dans le cadre du projet."
            }
          </Prose>
          <Prose>
            {
              "Le Client autorise le Prestataire à reproduire, adapter techniquement et intégrer ces éléments dans la stricte mesure nécessaire à l'exécution des prestations convenues."
            }
          </Prose>
          <SubTitle>Présentation des réalisations et portfolio</SubTitle>
          <Prose>
            {
              "Sauf engagement de confidentialité contraire ou opposition écrite du Client, le Prestataire peut mentionner sa participation au projet et présenter les réalisations effectivement rendues publiques dans son portfolio, sur son site internet et sur ses supports de communication professionnels."
            }
          </Prose>
          <Prose>
            {
              "Cette présentation peut notamment comprendre le nom commercial du Client, une description générale du projet, des captures d'écran et un lien vers le site ou l'application accessible au public."
            }
          </Prose>
          <Prose>
            {
              "Le Prestataire s'engage à ne pas divulguer d'informations confidentielles, de données personnelles non destinées à être publiques, de codes sources privés ou d'éléments protégés par un engagement de confidentialité."
            }
          </Prose>
          <Prose>
            {
              "Le Client peut demander par écrit le retrait d'une présentation de son projet des supports contrôlés par le Prestataire. Celui-ci procédera au retrait dans un délai raisonnable, sous réserve des obligations légales applicables."
            }
          </Prose>
        </div>

        <Separator />

        {/* Article 8 — Confidentialité */}
        <div id="confidentialite" className="flex flex-col gap-4 scroll-mt-20">
          <SectionTitle index="08">Confidentialité</SectionTitle>
          <SubTitle>Engagement de confidentialité</SubTitle>
          <Prose>
            {
              "Dans le cadre de l'exécution des prestations, le Prestataire et le Client peuvent être amenés à échanger des informations confidentielles de nature commerciale, financière, technique, stratégique ou organisationnelle."
            }
          </Prose>
          <Prose>
            {
              "Chaque partie s'engage à préserver la confidentialité des informations non publiques reçues de l'autre partie, lorsqu'elles sont expressément identifiées comme confidentielles ou lorsque leur nature ou les circonstances de leur communication justifient raisonnablement leur caractère confidentiel."
            }
          </Prose>
          <Prose>
            {
              "Ces informations comprennent notamment les documents internes, données commerciales, informations financières, codes sources non publics, configurations techniques, identifiants, mots de passe, clés d'accès, ainsi que les informations relatives aux projets et aux activités des parties."
            }
          </Prose>
          <SubTitle>Utilisation et protection des informations</SubTitle>
          <Prose>
            {
              "Les informations confidentielles ne peuvent être utilisées que dans la mesure nécessaire à l'exécution des prestations convenues."
            }
          </Prose>
          <Prose>{"Chaque partie s'engage à :"}</Prose>
          <ul className="flex flex-col gap-2 pl-4">
            {[
              "Ne pas divulguer les informations confidentielles de l'autre partie à des personnes non autorisées ;",
              "Prendre des mesures raisonnables pour empêcher leur accès, leur utilisation ou leur divulgation non autorisés ;",
              "Limiter leur communication aux personnes ou intervenants ayant besoin d'en connaître pour l'exécution du contrat, sous réserve qu'ils soient soumis à une obligation de confidentialité appropriée ;",
              "Informer l'autre partie dans les meilleurs délais lorsqu'elle constate un accès ou une divulgation non autorisés concernant des informations confidentielles reçues dans le cadre du contrat.",
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
              "Le recours éventuel à un prestataire technique, un hébergeur ou un autre intervenant nécessaire à l'exécution du projet doit s'effectuer dans le respect des obligations de confidentialité et des règles applicables à la protection des données."
            }
          </Prose>
          <SubTitle>Exceptions à la confidentialité</SubTitle>
          <Prose>
            {
              "Les obligations prévues au présent article ne s'appliquent pas aux informations dont la partie destinataire peut établir :"
            }
          </Prose>
          <ul className="flex flex-col gap-2 pl-4">
            {[
              "Qu'elles étaient déjà accessibles au public au moment de leur communication ou le sont devenues ultérieurement sans manquement de sa part ;",
              "Qu'elle en disposait légitimement avant leur communication ;",
              "Qu'elles lui ont été transmises légalement par un tiers non soumis à une obligation de confidentialité ;",
              "Qu'elles ont été développées indépendamment, sans utilisation des informations confidentielles de l'autre partie ;",
              "Que leur divulgation a été expressément autorisée par écrit par la partie concernée.",
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
              "Une divulgation imposée par la loi, une décision de justice ou une autorité compétente demeure possible dans les limites de cette obligation. Dans la mesure légalement autorisée, la partie concernée en informe préalablement l'autre partie."
            }
          </Prose>
          <SubTitle>Durée de {"l'"}obligation de confidentialité</SubTitle>
          <Prose>
            {
              "Les obligations de confidentialité s'appliquent pendant toute la durée de la relation contractuelle et pendant une période de 3 ans suivant la fin de la prestation ou du contrat concerné, quelle qu'en soit la cause."
            }
          </Prose>
          <Prose>
            {
              "Toutefois, les identifiants, secrets d'authentification, clés d'accès et informations constituant des secrets d'affaires légalement protégés demeurent soumis aux obligations de protection applicables aussi longtemps que leur nature confidentielle ou la loi le justifie."
            }
          </Prose>
          <SubTitle>Restitution et suppression des informations</SubTitle>
          <Prose>
            {
              "À la fin de la prestation, chaque partie peut demander la restitution ou la suppression des documents et informations confidentiels qu'elle a transmis à l'autre partie, dans la mesure où cette opération est techniquement réalisable et compatible avec les obligations légales de conservation."
            }
          </Prose>
          <Prose>
            {
              "Les informations conservées pour satisfaire à une obligation légale, assurer la preuve de l'exécution du contrat ou répondre à une obligation réglementaire restent protégées par les engagements de confidentialité applicables."
            }
          </Prose>
          <SubTitle>Protection des données personnelles</SubTitle>
          <Prose>
            {
              "Lorsque les prestations impliquent le traitement de données à caractère personnel, les parties s'engagent à respecter la réglementation applicable, notamment le Règlement général sur la protection des données (RGPD) et la législation française correspondante."
            }
          </Prose>
          <Prose>
            {
              "Lorsque le Prestataire traite des données personnelles pour le compte du Client, les parties définissent, si nécessaire, leurs rôles et leurs obligations respectives dans un accord ou des clauses spécifiques conformes à l'article 28 du RGPD."
            }
          </Prose>
          <Prose>
            {
              "Les présentes dispositions de confidentialité ne se substituent pas aux obligations légales applicables en matière de protection des données personnelles."
            }
          </Prose>
        </div>

        <Separator />

        {/* Article 9 — Responsabilité */}
        <div id="responsabilite" className="flex flex-col gap-4 scroll-mt-20">
          <SectionTitle index="09">Responsabilité</SectionTitle>
          <SubTitle>Engagements et responsabilité du Prestataire</SubTitle>
          <Prose>
            {
              "Le Prestataire s'engage à exécuter les prestations convenues avec professionnalisme, soin et diligence, conformément aux spécifications et aux conditions définies dans le devis accepté."
            }
          </Prose>
          <Prose>
            {
              "Le Prestataire est soumis à une obligation de moyens dans l'exécution de ses prestations, sous réserve des engagements de résultat expressément convenus et des obligations légales applicables."
            }
          </Prose>
          <Prose>
            {
              "Sa responsabilité peut être engagée en cas de manquement contractuel qui lui est imputable, dans les conditions prévues par la législation applicable."
            }
          </Prose>
          <Prose>
            {
              "Le Prestataire demeure notamment responsable des défauts de conformité des livrables aux spécifications contractuelles, dans la mesure où ces défauts lui sont imputables."
            }
          </Prose>
          <SubTitle>Limitation de responsabilité</SubTitle>
          <Prose>
            {
              "Dans les limites autorisées par la loi, la responsabilité contractuelle du Prestataire est plafonnée au montant total hors taxes de la prestation directement concernée par le dommage, tel que prévu dans le devis accepté."
            }
          </Prose>
          <Prose>
            {
              "Cette limitation ne s'applique pas en cas de faute lourde ou dolosive, ni dans les situations où une limitation de responsabilité est interdite par la loi ou aurait pour effet de priver de sa substance une obligation essentielle du contrat."
            }
          </Prose>
          <Prose>
            {
              "Le Prestataire ne pourra être tenu responsable des préjudices indirects, tels que les pertes de bénéfices, les pertes d'opportunités commerciales ou les atteintes indirectes à l'image, lorsqu'ils ne constituent pas une conséquence directe et certaine d'un manquement qui lui est imputable."
            }
          </Prose>
          <Prose>
            {
              "Cette disposition ne vise pas à exclure l'indemnisation des dommages directs dont le Prestataire serait légalement responsable."
            }
          </Prose>
          <SubTitle>Responsabilité du Client</SubTitle>
          <Prose>
            {
              "Le Client demeure responsable des informations, contenus et instructions qu'il fournit au Prestataire, ainsi que de leur exactitude, de leur licéité et des droits nécessaires à leur utilisation."
            }
          </Prose>
          <Prose>
            {
              "Il lui appartient également de signaler les contraintes particulières de son activité et de procéder aux vérifications et validations relevant de sa responsabilité, conformément aux articles 5 et 6 des présentes CGV."
            }
          </Prose>
          <Prose>
            {
              "Le Prestataire ne saurait être tenu responsable des conséquences directement imputables à des informations erronées, à des contenus non conformes ou à des instructions inappropriées transmis par le Client, sauf manquement du Prestataire à ses propres obligations contractuelles ou légales."
            }
          </Prose>
          <SubTitle>Hébergement et services tiers</SubTitle>
          <Prose>
            {
              "La réalisation et le fonctionnement des projets peuvent nécessiter le recours à des services tiers, notamment des hébergeurs, fournisseurs de noms de domaine, services de paiement, API, extensions ou plateformes externes."
            }
          </Prose>
          <Prose>
            {
              "Le Prestataire ne garantit pas la disponibilité permanente ni l'absence d'incidents affectant les services tiers sur lesquels il n'exerce aucun contrôle."
            }
          </Prose>
          <Prose>
            {
              "Sa responsabilité ne pourra être engagée pour les dysfonctionnements exclusivement imputables à ces tiers, sous réserve de ses propres obligations, notamment lorsqu'il est chargé de sélectionner, configurer, administrer ou maintenir les services concernés."
            }
          </Prose>
          <Prose>
            {
              "Le Prestataire s'engage à informer le Client, dans un délai raisonnable, des incidents significatifs dont il a connaissance et susceptibles d'affecter les prestations placées sous sa responsabilité."
            }
          </Prose>
          <SubTitle>Sécurité et sauvegarde des données</SubTitle>
          <Prose>
            {
              "Le Prestataire met en œuvre les précautions techniques et organisationnelles raisonnablement adaptées aux prestations convenues afin de limiter les risques de dysfonctionnement, d'accès non autorisé ou de perte de données."
            }
          </Prose>
          <Prose>
            {
              "Sauf prestation spécifique prévue au devis ou dans un forfait de maintenance, le Prestataire n'assure pas de service permanent de surveillance, de sauvegarde ou de restauration des données après la livraison du projet."
            }
          </Prose>
          <Prose>
            {
              "Le Client est invité à mettre en place une politique de sauvegarde adaptée à son activité et à vérifier régulièrement le bon fonctionnement des dispositifs dont il a la responsabilité."
            }
          </Prose>
          <Prose>
            {
              "Lorsque des opérations de sauvegarde, de maintenance ou de restauration sont expressément confiées au Prestataire, celui-ci demeure responsable de leur exécution conformément aux engagements contractuels applicables."
            }
          </Prose>
          <Prose>
            {
              "Aucune disposition du présent article ne saurait exclure la responsabilité du Prestataire pour une perte de données directement imputable à un manquement à ses obligations."
            }
          </Prose>
          <SubTitle>Modifications et interventions de tiers</SubTitle>
          <Prose>
            {
              "Après la livraison, le Client peut faire intervenir un autre professionnel sur son site internet ou son application, dans le respect des droits et conditions prévus à l'article 7."
            }
          </Prose>
          <Prose>
            {
              "Le Prestataire ne saurait être tenu responsable des dysfonctionnements directement causés par des modifications, installations ou interventions réalisées par le Client ou par un tiers sans son concours."
            }
          </Prose>
          <Prose>
            {
              "Cette exclusion ne s'applique pas aux anomalies préexistantes imputables au Prestataire ni aux conséquences de ses propres manquements."
            }
          </Prose>
          <SubTitle>Signalement des anomalies</SubTitle>
          <Prose>
            {
              "Le Client s'engage à signaler au Prestataire, dans un délai raisonnable après leur découverte, les anomalies ou dysfonctionnements constatés dans les livrables."
            }
          </Prose>
          <Prose>
            {
              "Les parties collaborent de bonne foi afin d'identifier l'origine des difficultés rencontrées et de déterminer les mesures correctives appropriées."
            }
          </Prose>
          <Prose>
            {
              "Les anomalies résultant d'un défaut de conformité aux spécifications contractuelles et imputables au Prestataire sont traitées sans être considérées comme des demandes d'évolution ou des ajustements mineurs au sens de l'article 5."
            }
          </Prose>
          <Prose>
            {
              "Les demandes portant sur de nouvelles fonctionnalités ou des modifications du périmètre initial restent soumises aux conditions prévues aux articles 2 et 5."
            }
          </Prose>
        </div>

        <Separator />

        {/* Article 10 — Résiliation */}
        <div id="resiliation" className="flex flex-col gap-4 scroll-mt-20">
          <SectionTitle index="10">Résiliation</SectionTitle>

          <SubTitle>Résiliation à l&apos;initiative du Client</SubTitle>
          <Prose>
            Le Client peut demander la résiliation anticipée d&apos;une
            prestation en cours par notification écrite adressée au Prestataire.
          </Prose>
          <Prose>
            En cas de résiliation sans manquement imputable au Prestataire, les
            prestations effectivement réalisées jusqu&apos;à la date de
            résiliation demeurent dues, ainsi que les frais et engagements non
            annulables raisonnablement engagés pour l&apos;exécution du projet,
            sous réserve qu&apos;ils soient justifiés.
          </Prose>
          <Prose>
            Le Prestataire établit un décompte des sommes dues, tenant compte de
            l&apos;avancement réel des travaux, des prestations exécutées et des
            paiements déjà effectués.
          </Prose>
          <Prose>
            L&apos;acompte versé à la commande est imputé sur les sommes dues.
            Si son montant excède les sommes effectivement exigibles, le solde
            est restitué au Client. Dans le cas contraire, un complément peut
            être facturé.
          </Prose>

          <SubTitle>Résiliation pour manquement contractuel</SubTitle>
          <Prose>
            En cas de manquement suffisamment grave de l&apos;une des parties à
            ses obligations contractuelles, l&apos;autre partie peut lui
            adresser une mise en demeure écrite précisant les manquements
            constatés et demandant leur régularisation.
          </Prose>
          <Prose>
            Si cette mise en demeure demeure sans effet pendant un délai de{" "}
            <span className="text-foreground font-medium">
              15 jours calendaires
            </span>{" "}
            à compter de sa réception, la partie lésée peut notifier par écrit
            la résiliation du contrat, sous réserve des dispositions légales
            applicables.
          </Prose>
          <Prose>
            La mise en demeure doit mentionner expressément la possibilité
            d&apos;une résiliation à défaut de régularisation dans le délai
            imparti.
          </Prose>
          <Prose>
            Lorsque la nature ou la gravité du manquement justifie légalement
            une résolution immédiate, les parties conservent les droits que leur
            reconnaît la législation applicable.
          </Prose>

          <SubTitle>Conséquences financières de la résiliation</SubTitle>
          <Prose>
            En cas de résiliation, les parties procèdent à un décompte
            contradictoire des prestations effectivement réalisées, des sommes
            versées et des montants restant éventuellement dus.
          </Prose>
          <Prose>
            Lorsque la résiliation résulte d&apos;un manquement imputable au
            Prestataire, les sommes correspondant aux prestations non réalisées
            ou non conformes ne peuvent être conservées sans justification, sous
            réserve des droits à réparation éventuellement ouverts au Client.
          </Prose>
          <Prose>
            Lorsque la résiliation résulte d&apos;un manquement imputable au
            Client, le Prestataire conserve le droit d&apos;obtenir le paiement
            des prestations exécutées et, le cas échéant, la réparation du
            préjudice directement subi dans les conditions prévues par la loi et
            les présentes CGV.
          </Prose>
          <Prose>
            Les pénalités de retard et les conditions de suspension des
            prestations demeurent régies par l&apos;article 4.
          </Prose>

          <SubTitle>Sort des livrables et des accès</SubTitle>
          <Prose>
            À la cessation du contrat, le Prestataire communique au Client, dans
            un délai raisonnable, les éléments et livrables correspondant aux
            prestations réalisées et payées, dans les limites du périmètre
            contractuel et des modalités de remise convenues.
          </Prose>
          <Prose>
            Les droits de propriété intellectuelle et les conditions de
            transmission des fichiers sources demeurent régis par l&apos;article
            7.
          </Prose>
          <Prose>
            Les parties organisent, lorsque cela est nécessaire, la restitution
            ou la désactivation des accès techniques mis à disposition pour la
            réalisation du projet, dans des conditions raisonnables de sécurité.
          </Prose>
          <Prose>
            Les obligations de confidentialité prévues à l&apos;article 8
            continuent de s&apos;appliquer après la fin du contrat.
          </Prose>

          <SubTitle>
            Dispositions particulières aux forfaits de maintenance
          </SubTitle>
          <Prose>
            Les conditions de résiliation des forfaits de maintenance sont
            définies spécifiquement à l&apos;article 12 des présentes CGV.
          </Prose>
          <Prose>
            Ces dispositions particulières prévalent sur celles du présent
            article lorsqu&apos;elles concernent la durée, le préavis et les
            modalités de cessation d&apos;un forfait de maintenance.
          </Prose>
        </div>

        <Separator />

        {/* Article 11 — Litiges */}
        <div id="litiges" className="flex flex-col gap-4 scroll-mt-20">
          <SectionTitle index="11">Litiges & droit applicable</SectionTitle>

          <SubTitle>Droit applicable</SubTitle>
          <Prose>
            Les présentes Conditions Générales de Vente ainsi que les relations
            contractuelles entre le Prestataire et le Client sont régies par le
            droit français.
          </Prose>
          <Prose>
            Cette disposition s&apos;applique sous réserve des règles
            impératives éventuellement applicables à la situation des parties.
          </Prose>

          <SubTitle>Recherche d&apos;une solution amiable</SubTitle>
          <Prose>
            En cas de différend relatif à la formation, à l&apos;interprétation,
            à l&apos;exécution ou à la résiliation du contrat, les parties
            s&apos;engagent à rechercher de bonne foi une solution amiable avant
            d&apos;engager une procédure judiciaire, sauf urgence ou disposition
            légale contraire.
          </Prose>
          <Prose>
            La partie souhaitant soulever un différend en informe l&apos;autre
            par écrit, en précisant la nature du désaccord et, dans la mesure du
            possible, les éléments permettant son examen.
          </Prose>
          <Prose>
            Les parties disposent d&apos;un délai de{" "}
            <span className="text-foreground font-medium">
              30 jours calendaires
            </span>{" "}
            à compter de la réception de cette notification pour tenter de
            parvenir à un accord amiable.
          </Prose>
          <Prose>
            Cette démarche ne fait pas obstacle aux mesures urgentes ou
            conservatoires ni à l&apos;exercice des droits reconnus par la loi.
          </Prose>

          <SubTitle>Juridiction compétente</SubTitle>
          <Prose>
            À défaut de résolution amiable, tout litige relatif aux présentes
            CGV ou aux prestations contractuelles sera porté devant les
            juridictions compétentes conformément aux règles légales
            applicables.
          </Prose>
          <Prose>
            Lorsque les parties ont toutes contracté en qualité de commerçant et
            que les conditions légales de validité d&apos;une clause attributive
            de compétence territoriale sont réunies, les tribunaux
            territorialement compétents du ressort de Saint-Denis de La Réunion
            seront seuls compétents, sous réserve des dispositions impératives
            applicables.
          </Prose>
          <Prose>
            Dans les autres situations, la compétence juridictionnelle est
            déterminée selon les règles de droit commun.
          </Prose>

          <SubTitle>Contact</SubTitle>
          <Prose>
            Pour toute question, réclamation ou demande de résolution amiable
            relative aux présentes CGV ou aux prestations réalisées, le Client
            peut contacter le Prestataire par courrier électronique à
            l&apos;adresse suivante :{" "}
            <a
              href="mailto:contact@nexmyr.com"
              className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              contact@nexmyr.com
            </a>
          </Prose>
        </div>

        <Separator />

        {/* Article 12 — Forfaits de maintenance */}
        <div id="maintenance" className="flex flex-col gap-4 scroll-mt-20">
          <SectionTitle index="12">Forfaits de maintenance</SectionTitle>
          <Prose>
            {
              "Les forfaits de maintenance proposés par le Prestataire s'appliquent aux sites et applications réalisés par ses soins. Ils peuvent également être proposés pour des sites réalisés par des tiers, sous réserve d'une évaluation technique préalable et de l'acceptation expresse du Prestataire. Lorsque l'état du site le nécessite, un diagnostic approfondi ou une remise en état peut faire l'objet d'un devis distinct, accepté avant toute intervention."
            }
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
              href="mailto:contact@nexmyr.com"
              className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              contact@nexmyr.com
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
