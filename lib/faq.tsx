import type { Pricing } from "@/types/pricing";
import { getPricingsByCategory } from "./pricing";

export type FAQItem = {
  id: string;
  question: string;
  answer: React.ReactNode;
};

export function generateFaqData(pricings: Pricing[]): FAQItem[] {
  const packs = getPricingsByCategory(pricings, "pack");
  const maintenance = getPricingsByCategory(pricings, "maintenance");
  const refonte = getPricingsByCategory(pricings, "refonte");

  const maintenancePrice = maintenance[0]?.price;
  const refontePrice = refonte[0]?.price;

  const seoPacks = packs.filter((pack) => pack.seo);
  const advancedSeoPacks = packs.filter((pack) => pack.advancedSeo);

  const trainingPacks = packs.filter((pack) => pack.trainingIncluded);

  const customPack = packs.find((pack) => pack.onQuote);

  return [
    {
      id: "item-1",
      question: "Combien coûte la création d'un site web ?",
      answer: (
        <>
          Je propose plusieurs formules selon vos besoins :{" le "}
          {packs
            .filter((pack) => pack.onQuote !== true)
            .map((pack, index) => {
              const isLast = index === packs.length - 1;
              return (
                <span key={pack._id}>
                  <strong className="text-foreground">{pack.title}</strong> à
                  partir de {pack.price} € HT
                  {!isLast ? (index === packs.length - 2 ? "" : " et le ") : ""}
                </span>
              );
            })}
          {refontePrice && (
            <>
              . Je propose également la{" "}
              <strong className="text-foreground">refonte de site web</strong> à
              partir de {refontePrice} € HT
            </>
          )}
          {customPack && (
            <>
              . Pour les projets qui nécessite plus de réflexion {"j'ai"}{" "}
              également le{" "}
              <strong className="text-foreground">{customPack.title}</strong>
            </>
          )}
          . Tous les prix sont hors taxes — TVA non applicable (art. 293B du
          CGI).
        </>
      ),
    },

    {
      id: "item-2",
      question: "Comment se passe le paiement ?",
      answer: (
        <>
          Le règlement se fait en deux fois : un acompte de{" "}
          <strong className="text-foreground">30 %</strong> à la signature du
          devis pour démarrer les travaux, et le solde de{" "}
          <strong className="text-foreground">70 %</strong> à la livraison,
          avant la mise en ligne. Pour les projets supérieurs à 2 000 €, un
          échéancier intermédiaire peut être convenu. Le paiement {"s'effectue"}{" "}
          par virement bancaire.
        </>
      ),
    },

    {
      id: "item-3",
      question: "Combien de temps prend la création d'un site ?",
      answer: (
        <>
          Les délais varient selon le pack choisi :{" "}
          {packs.map((pack, index) => {
            const isLast = index === packs.length - 1;

            return (
              <span key={pack._id}>
                <strong className="text-foreground">{pack.delay}</strong> pour
                le {pack.title}
                {!isLast ? (index === packs.length - 2 ? ", et " : ", ") : "."}
              </span>
            );
          })}{" "}
          Ces délais sont estimatifs et dépendent de la rapidité de transmission
          de vos contenus et retours.
        </>
      ),
    },

    {
      id: "item-4",
      question: "Mon site sera-t-il bien référencé sur Google ?",
      answer: (
        <>
          Tous mes sites intègrent les bonnes pratiques SEO de base : structure
          sémantique, balises optimisées, vitesse de chargement et compatibilité
          mobile.
          {seoPacks.length > 0 && (
            <>
              {" "}
              Les{" "}
              {seoPacks.map((pack, index) => (
                <span key={pack._id}>
                  <strong className="text-foreground">{pack.title}</strong>
                  {index < seoPacks.length - 1 ? ", " : ""}
                </span>
              ))}{" "}
              incluent une optimisation SEO.
            </>
          )}
          {advancedSeoPacks && (
            <>
              {" "}
              Les{" "}
              {advancedSeoPacks.map((pack, index) => (
                <span key={pack._id}>
                  <strong className="text-foreground">{pack.title}</strong>
                  {index < advancedSeoPacks.length - 1 ? " et " : " "}
                </span>
              ))}
              incluent un référencement avancé.
            </>
          )}
        </>
      ),
    },

    {
      id: "item-5",
      question: "Pourrai-je modifier mon site moi-même après la livraison ?",
      answer: (
        <>
          Oui.
          {trainingPacks.length > 0 && (
            <>
              {" "}
              Les{" "}
              {trainingPacks.map((pack, index) => (
                <span key={pack._id}>
                  <strong className="text-foreground">{pack.title}</strong>
                  {index < trainingPacks.length - 1 ? ", " : ""}
                </span>
              ))}{" "}
              incluent une formation à la gestion du site vous permettant de
              mettre à jour vos contenus en toute autonomie.
            </>
          )}{" "}
          Pour les modifications plus techniques, mes offres de maintenance sont
          là pour vous accompagner.
        </>
      ),
    },

    {
      id: "item-6",
      question: "Que se passe-t-il après la livraison si j'ai un problème ?",
      answer: (
        <>
          Certains projets incluent une période de support après la livraison.
          Ensuite, mes forfaits de maintenance prennent le relais pour corriger
          les bugs, effectuer les mises à jour et assurer le bon fonctionnement
          de votre site dans la durée.
          {maintenancePrice && (
            <>
              {" "}
              Les offres de maintenance démarrent à partir de{" "}
              <strong className="text-foreground">
                {maintenancePrice} € HT / mois
              </strong>
              .
            </>
          )}
        </>
      ),
    },
  ];
}
