// lib/faq.tsx

import type { Pricing } from "@/types/pricing";
import type { FAQItem } from "./faq/types";
import { getPricingsByCategory } from "./pricings/pricing";
export type { FAQItem } from "./faq/types";

export function generateFaqData(pricings: Pricing[]): FAQItem[] {
  const packs = getPricingsByCategory(pricings, "pack");
  const maintenance = getPricingsByCategory(pricings, "maintenance");
  const refonte = getPricingsByCategory(pricings, "refonte");

  // Packs avec un tarif défini
  const pricedPacks = packs.filter(
    (pack) => !pack.onQuote && typeof pack.price === "number",
  );

  // Prix de maintenance le plus bas
  const maintenancePrices = maintenance
    .map((offer) => offer.price)
    .filter((price): price is number => typeof price === "number");

  const maintenancePrice =
    maintenancePrices.length > 0 ? Math.min(...maintenancePrices) : undefined;

  const refontePrice = refonte.find(
    (offer) => typeof offer.price === "number" && !offer.onQuote,
  )?.price;

  const seoPacks = packs.filter((pack) => pack.seo);
  const advancedSeoPacks = packs.filter((pack) => pack.advancedSeo);

  const trainingPacks = packs.filter((pack) => pack.trainingIncluded);

  const customPack = packs.find((pack) => pack.onQuote);

  const packsWithDelay = packs.filter(
    (pack) => typeof pack.delay === "string" && pack.delay.trim() !== "",
  );

  return [
    {
      id: "item-1",
      question: "Combien coûte la création d'un site web ?",
      answer: (
        <div className="[word-spacing:0.2rem]">
          Je propose plusieurs formules selon vos besoins :{" "}
          {pricedPacks.map((pack, index) => (
            <span key={pack._id}>
              {index > 0 && (index === pricedPacks.length - 1 ? " et " : ", ")}
              le{" "}
              <strong className="text-foreground font-semibold">
                {pack.title}
              </strong>{" "}
              à {pack.price}€ HT
              {index > 0 && index === pricedPacks.length - 1 && "."}
            </span>
          ))}
          {refontePrice && (
            <>
              Je propose également la{" "}
              <strong className="text-foreground font-semibold">
                refonte de site web
              </strong>{" "}
              à partir de {refontePrice} € HT
            </>
          )}
          {customPack && (
            <>
              <br />
              <br />
              Pour les projets qui nécessitent une conception plus
              personnalisée, je propose également le{" "}
              <strong className="text-foreground font-semibold">
                {customPack.title}
              </strong>{" "}
              disponible sur devis.
            </>
          )}
          <br /> <br /> Tous les prix sont hors taxes — TVA non applicable (art.
          293B du CGI).
        </div>
      ),
    },

    {
      id: "item-2",
      question: "Comment se passe le paiement ?",
      answer: (
        <>
          Le règlement se fait en deux fois : un acompte de{" "}
          <strong className="text-foreground font-semibold">30 %</strong> à la
          signature du devis pour démarrer les travaux, et le solde de{" "}
          <strong className="text-foreground font-semibold">70 %</strong> à la
          livraison, avant la mise en ligne. <br /> <br /> Le paiement{" "}
          {"s'effectue"} par virement bancaire, les coordonnées bancaires sont
          visibles sur la facture en bas à gauche.
        </>
      ),
    },

    {
      id: "item-3",
      question: "Combien de temps prend la création d'un site ?",
      answer: (
        <>
          Les délais varient selon le pack choisi :{" "}
          {packsWithDelay.map((pack, index) => {
            const isLast = index === packsWithDelay.length - 1;

            return (
              <span key={pack._id}>
                <strong className="text-foreground font-semibold">
                  {pack.delay}
                </strong>{" "}
                pour le {pack.title}
                {!isLast ? (index === packs.length - 2 ? ", et " : ", ") : "."}
              </span>
            );
          })}{" "}
          <br /> <br />
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
              <br /> <br /> Les{" "}
              {seoPacks.map((pack, index) => (
                <span key={pack._id}>
                  <strong className="text-foreground font-semibold">
                    {pack.title}
                  </strong>
                  {index < seoPacks.length - 1 ? ", " : ""}
                </span>
              ))}{" "}
              incluent une optimisation SEO.
            </>
          )}
          {advancedSeoPacks.length > 0 && (
            <>
              <br />
              Les{" "}
              {advancedSeoPacks.map((pack, index) => (
                <span key={pack._id}>
                  <strong className="text-foreground font-semibold">
                    {pack.title}
                  </strong>
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
          Cela dépend de la solution choisie et des fonctionnalités prévues pour
          votre projet.
          {trainingPacks.length > 0 && (
            <>
              {" "}
              Certaines formules incluent également une formation pour vous
              accompagner dans la gestion de vos contenus.
            </>
          )}
          <br /> <br />
          Pour les modifications plus techniques, mes offres de maintenance
          permettent de bénéficier {"d'"}un accompagnement régulier.
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
          {maintenancePrice !== undefined && (
            <>
              <br /> <br />
              Les offres de maintenance démarrent à partir de{" "}
              <strong className="text-foreground font-semibold">
                {maintenancePrice}€ HT / mois
              </strong>
              .
            </>
          )}
        </>
      ),
    },
  ];
}
