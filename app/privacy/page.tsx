import Section from "@/components/Section";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = buildMetadata({
  title: "Politique de confidentialité",
  description:
    "Quelles données sont collectées sur ce site, pourquoi, combien de temps, et comment exercer vos droits.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Section className="px-4 py-8 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl space-y-10">
        <header className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Politique de confidentialité
          </h1>
          <p className="text-sm text-muted-foreground">
            Dernière mise à jour : 8 octobre 2026
          </p>
        </header>

        <Block title="Qui est responsable de vos données ?">
          <p>
            Le responsable du traitement est Brian Coupama, entrepreneur
            individuel, éditeur du site Nexmyr. Les coordonnées complètes sont
            dans les{" "}
            <Link href="/legal" className="underline underline-offset-4">
              mentions légales
            </Link>
            . Pour toute question sur vos données :{" "}
            <Link href="mailto:contact@nexmyr.com" className="hover:underline">
              <strong>contact@nexmyr.com</strong>
            </Link>
            .
          </p>
        </Block>

        <Block title="Mesure d'audience">
          <p>
            Si vous acceptez la mesure d&apos;audience, j&apos;enregistre pour
            chaque page visitée : l&apos;adresse de la page, le temps passé
            dessus, votre pays, le type d&apos;appareil (ordinateur, mobile,
            tablette), le navigateur et le système d&apos;exploitation, ainsi
            qu&apos;un identifiant technique.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Votre adresse IP n&apos;est jamais enregistrée.</strong>{" "}
              Mon serveur l&apos;utilise un instant, en mémoire, pour déterminer
              votre pays à l&apos;aide d&apos;une base de données hébergée sur
              le serveur lui-même, puis pour calculer l&apos;identifiant
              technique. Elle est ensuite écartée.
            </li>
            <li>
              L&apos;identifiant technique est un code haché qui change chaque
              jour : il permet de compter les visiteurs sans pouvoir vous suivre
              d&apos;un jour à l&apos;autre.
            </li>
            <li>
              Les statistiques sont stockées dans une base de données MongoDB
              Atlas hébergée en France (AWS, région Paris). Elles ne sont
              transmises à aucun autre service tiers.
            </li>
          </ul>
          <p>
            <strong>Finalité :</strong> connaître la fréquentation du site et
            l&apos;améliorer. <br /> <strong>Base légale :</strong> votre
            consentement. Vous pouvez le refuser sans conséquence sur votre
            navigation, et le retirer à tout moment avec l&apos;icône en bas à
            gauche de l&apos;écran. Votre choix vous est redemandé environ tous
            les six mois.
          </p>
          <p>
            <strong>Durée de conservation :</strong> 13 mois, puis suppression
            automatique.
          </p>
        </Block>

        <Block title="Me contacter par e-mail">
          <p>
            Ce site ne comporte aucun formulaire : le bouton de contact ouvre
            simplement votre messagerie (lien « mailto »), et rien n&apos;est
            transmis à ce site. Si vous m&apos;écrivez, je reçois votre adresse
            e-mail et le contenu de votre message dans ma boîte de réception,
            hébergée chez mon fournisseur de compte de messagerie{" "}
            <Link href="https://hostinger.com">
              <strong>Hostinger</strong>
            </Link>
            .
          </p>
          <p>
            <strong>Finalité :</strong> répondre à votre message. <br />
            <strong>Base légale :</strong> mon intérêt légitime à répondre aux
            demandes qui me sont adressées, ou l&apos;exécution de mesures
            précontractuelles si vous demandez un devis. <br />
            <strong>Durée de conservation :</strong> 2 ans après le dernier
            échange.
          </p>
        </Block>

        <Block title="Prise de rendez-vous">
          <p>
            Le bouton de prise de rendez-vous est un simple lien vers ma page
            Calendly. Aucun élément de Calendly n&apos;est chargé sur ce site.
            Une fois sur Calendly, vous quittez ce site : les informations que
            vous y saisissez (nom, adresse e-mail, créneau choisi) sont
            transférées aux États-Unis et traitées par Calendly conformément à
            ses garanties de protection (Clauses Contractuelles Types) et selon{" "}
            <Link
              href="https://calendly.com/legal/privacy-notice"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              sa politique de confidentialité
            </Link>
            , et je les reçois pour organiser notre rendez-vous.
          </p>
          <p>
            <strong>Finalité :</strong> planifier un échange avec vous. <br />
            <strong>Base légale :</strong> l&apos;exécution de mesures
            précontractuelles prises à votre demande. <br />
            <strong>Durée de conservation :</strong> 2 ans après le dernier
            échange.
          </p>
        </Block>

        <Block title="Cookies et stockage local">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>analytics_consent</strong> (cookie et stockage local) :
              mémorise votre choix sur la mesure d&apos;audience, pour ne pas
              vous le redemander à chaque visite. Il est indispensable au
              respect de votre choix et ne nécessite pas de consentement.
            </li>
            <li>
              <strong>theme</strong> (stockage local) : mémorise votre
              préférence d&apos;affichage clair ou sombre. Ce paramètre
              technique ne contient aucune donnée personnelle et reste sur votre
              navigateur.
            </li>
          </ul>
          <p>
            Ce site ne dépose aucun cookie publicitaire ni de suivi par des
            tiers.
          </p>
        </Block>

        <Block title="Hébergement et journaux techniques">
          <p>
            Le site est hébergé sur un serveur privé virtuel chez{" "}
            <strong>
              Hostinger dans l&apos;Union européenne (serveur situé en France)
            </strong>
            . Comme tout serveur web, il enregistre dans des journaux techniques
            l&apos;adresse IP et les pages demandées, uniquement pour la
            sécurité et le dépannage. Ces journaux sont conservés{" "}
            <strong>
              pendant une durée de 14 jours avant d&apos;être automatiquement
              supprimés.
            </strong>
          </p>
        </Block>

        <Block title="Vos droits">
          <p>
            Vous pouvez demander l&apos;accès à vos données, leur rectification,
            leur effacement, **la portabilité de vos données**, la limitation de
            leur traitement ou vous y opposer, et retirer votre consentement à
            tout moment. Écrivez-moi à l&apos;adresse indiquée plus haut ; je
            réponds dans un délai d&apos;un mois.
          </p>
          <p>
            Si vous estimez, après m&apos;avoir contacté, que vos droits ne sont
            pas respectés, vous pouvez déposer une réclamation auprès de la CNIL
            (
            <Link
              href="https://www.cnil.fr/fr/plaintes"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              cnil.fr/fr/plaintes
            </Link>
            ).
          </p>
        </Block>
      </article>
    </Section>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3 leading-relaxed">
      <h2 className="text-xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}
