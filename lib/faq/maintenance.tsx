import type { Pricing } from "@/types/pricing";
import type { FAQItem } from "./types";

export function generateMaintenanceFaqData(offers: Pricing[]): FAQItem[] {
  const serenity = offers.find(
    (offer) => offer.title === "Maintenance Sérénité",
  );

  const priority = offers.find(
    (offer) => offer.title === "Maintenance Prioritaire",
  );

  const formatPrice = (offer: Pricing | undefined) => {
    if (!offer || offer.onQuote || typeof offer.price !== "number") {
      return "sur devis";
    }

    return `${offer.price.toLocaleString("fr-FR")} € HT/mois`;
  };

  return [
    {
      id: "maintenance-1",
      question:
        "Pourquoi mon site web a-t-il besoin d'une maintenance régulière ?",
      answer: (
        <>
          <p>
            Un site web ne s'arrête pas de fonctionner une fois mis en ligne,
            mais il a besoin d'un suivi régulier pour rester fiable, sécurisé et
            performant.
          </p>
          <p className="mt-4">
            Au fil du temps, les technologies évoluent, des mises à jour
            deviennent nécessaires et certaines fonctionnalités peuvent
            rencontrer des problèmes.
          </p>
          <p className="mt-4">
            Une maintenance régulière permet de surveiller le bon fonctionnement
            de votre site, d'effectuer les interventions nécessaires et de
            limiter les risques de dysfonctionnement ou de failles de sécurité.
          </p>
          <p className="mt-4">
            Chez Nexmyr, mon objectif est de vous accompagner dans la durée pour
            que votre site reste un outil fiable au service de votre activité,
            sans que vous ayez à vous préoccuper constamment des aspects
            techniques.
          </p>
        </>
      ),
    },
    {
      id: "maintenance-2",
      question: "Quelle est la différence entre vos formules de maintenance ?",
      answer: (
        <>
          <p>
            Chez Nexmyr, je propose deux formules de maintenance adaptées aux
            besoins de votre site web.
          </p>
          <p className="mt-4">
            <strong>La formule Maintenance Sérénité</strong>, à{" "}
            <strong>{formatPrice(serenity)}</strong>, comprend les mises à jour
            et la sécurité, les sauvegardes automatiques, la surveillance du bon
            fonctionnement de votre site, ainsi que 2 heures d'intervention par
            mois et un rapport mensuel.
          </p>
          <p className="mt-4">
            Ces heures peuvent être utilisées aussi bien pour résoudre des
            problèmes techniques que pour effectuer de petites modifications sur
            votre site.
          </p>
          <p className="mt-4">
            <strong>La formule Maintenance Prioritaire</strong>, à{" "}
            <strong>{formatPrice(priority)}</strong>, comprend toutes les
            prestations de la formule Sérénité, avec un accompagnement renforcé
            : 4 heures d'intervention mensuelles, une réponse prioritaire sous 4
            heures ouvrées, un rapport détaillé et des conseils personnalisés
            chaque mois.
          </p>
          <p className="mt-4">
            Le délai de réponse prioritaire correspond à mon engagement de
            prendre contact avec vous pendant mes horaires de travail, et non à
            un délai garanti de résolution du problème.
          </p>
          <p className="mt-4">
            La formule Sérénité est idéale pour assurer l'entretien régulier de
            votre site, tandis que la formule Prioritaire convient davantage aux
            activités nécessitant un suivi plus approfondi et une meilleure
            réactivité.
          </p>
          <p className="mt-4">
            Vous hésitez entre les deux ? Nous pouvons en discuter ensemble afin
            de choisir la solution qui correspond réellement à vos besoins.
          </p>
        </>
      ),
    },
    {
      id: "maintenance-3",
      question:
        "Pouvez-vous assurer la maintenance d'un site que vous n'avez pas créé ?",
      answer: (
        <>
          <p>
            Oui, je peux également accompagner les entreprises dont le site web
            a été réalisé par un autre prestataire.
          </p>
          <p className="mt-4">
            Avant de vous proposer un contrat de maintenance, je procède à une
            première évaluation gratuite afin de prendre connaissance de votre
            site, des technologies utilisées et de son état général.
          </p>
          <p className="mt-4">
            Si une analyse technique plus approfondie s'avère nécessaire, je
            vous en informe au préalable et vous propose un diagnostic payant,
            dont le tarif sera défini et accepté avant toute intervention.
          </p>
          <p className="mt-4">
            Cette démarche me permet de vérifier si je peux assurer la
            maintenance de votre site dans de bonnes conditions et d'identifier
            les éventuels problèmes existants.
          </p>
          <p className="mt-4">
            Si des corrections importantes sont nécessaires, une remise en état
            préalable pourra être proposée sur devis.
          </p>
          <p className="mt-4">
            <strong>
              Mon objectif est de vous offrir un accompagnement fiable et
              transparent, en vous expliquant clairement les interventions
              nécessaires avant tout engagement.
            </strong>
          </p>
        </>
      ),
    },
    {
      id: "maintenance-4",
      question:
        "Que se passe-t-il si mon site rencontre un problème technique ?",
      answer: (
        <>
          <p>
            Si votre site rencontre un problème technique, vous pouvez me
            contacter afin que nous puissions identifier la situation et
            déterminer les interventions nécessaires.
          </p>
          <p className="mt-4">
            Selon votre formule de maintenance, vous bénéficiez de{" "}
            <strong>
              2 heures d'intervention mensuelles avec Maintenance Sérénité
            </strong>{" "}
            ou de <strong>4 heures avec Maintenance Prioritaire</strong>. Ces
            heures peuvent être utilisées pour résoudre des incidents techniques
            ou effectuer de petites modifications sur votre site.
          </p>
          <p className="mt-4">
            Avec la formule Maintenance Prioritaire, je m'engage également à
            vous répondre sous <strong>4 heures ouvrées</strong>, pendant mes
            horaires de travail. Ce délai concerne la prise en charge de votre
            demande et non la résolution garantie du problème.
          </p>
          <p className="mt-4">
            Si vos heures d'intervention mensuelles sont épuisées, je peux vous
            proposer une intervention complémentaire sur devis. Aucun travail
            supplémentaire facturé ne sera engagé sans votre accord préalable.
          </p>
          <p className="mt-4">
            <strong>
              Chez Nexmyr, mon objectif est de vous accompagner avec réactivité
              et transparence, en vous tenant informé des solutions possibles et
              des éventuels coûts avant toute intervention.
            </strong>
          </p>
        </>
      ),
    },
    {
      id: "maintenance-5",
      question: "Puis-je modifier ou arrêter mon contrat de maintenance ?",
      answer: (
        <>
          <p>
            Oui, mes forfaits de maintenance sont proposés{" "}
            <strong>sans engagement de durée minimale</strong>, car je souhaite
            que vous restiez libre de choisir l'accompagnement qui correspond à
            vos besoins.
          </p>
          <p className="mt-4">
            Vous pouvez demander la résiliation de votre contrat à tout moment,
            simplement en envoyant un e-mail à{" "}
            <a
              href="mailto:contact@nexmyr.com"
              className="text-primary underline underline-offset-4"
            >
              contact@nexmyr.com
            </a>
            , en respectant un préavis de 15 jours calendaires avant votre
            prochaine échéance de facturation.
          </p>
          <p className="mt-4">
            Si votre demande intervient moins de 15 jours avant cette échéance,
            le mois suivant restera facturé, conformément à mes conditions
            générales de vente.
          </p>
          <p className="mt-4">
            Si vos besoins évoluent et que vous souhaitez passer de la formule
            Maintenance Sérénité à Maintenance Prioritaire, ou inversement, nous
            pouvons également en discuter afin de convenir ensemble des
            modalités de changement.
          </p>
          <p className="mt-4">
            <strong>
              Chez Nexmyr, mon objectif est de construire une relation de
              confiance, sans vous imposer un engagement de longue durée.
            </strong>
          </p>
        </>
      ),
    },
  ];
}
