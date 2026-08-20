import type { ReactNode } from "react";

export type FAQItem = {
  id: string;
  question: string;
  answer: ReactNode;
};

export const faqData: FAQItem[] = [
  {
    id: "item-1",
    question: "Combien coûte la création d'un site web ?",
    answer: (
      <>
        Je propose plusieurs formules selon vos besoins :{" "}
        <strong className="text-foreground">Pack Starter</strong> (1 à 3 pages)
        à partir de 960 € HT,{" "}
        <strong className="text-foreground">Pack Pro</strong> (pages illimitées,
        SEO, blog) à partir de 2 000 € HT, et{" "}
        <strong className="text-foreground">Pack Premium</strong> (sur mesure,
        UX/UI avancée, support 1 mois) à partir de 2 560 € HT. Je propose
        également la{" "}
        <strong className="text-foreground">refonte de site</strong> à partir de
        1 500 € HT. Tous les prix sont hors taxes — TVA non applicable (art.
        293B du CGI).
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
        <strong className="text-foreground">70 %</strong> à la livraison, avant
        la mise en ligne. Pour les projets supérieurs à 2 000 €, un échéancier
        intermédiaire peut être convenu. Le paiement {"s'"}effectue par virement
        bancaire ou PayPal.
      </>
    ),
  },
  {
    id: "item-3",
    question: "Combien de temps prend la création d'un site ?",
    answer: (
      <>
        Les délais varient selon le pack choisi :{" "}
        <strong className="text-foreground">1 à 2 semaines</strong> pour le Pack
        Starter, <strong className="text-foreground">2 à 4 semaines</strong>{" "}
        pour le Pack Pro, et{" "}
        <strong className="text-foreground">4 à 6 semaines</strong> pour le Pack
        Premium. Ces délais sont estimatifs et dépendent de la rapidité de
        transmission de vos contenus et retours.
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
        mobile. Le <strong className="text-foreground">Pack Pro</strong> inclut
        un SEO optimisé et le{" "}
        <strong className="text-foreground">Pack Premium</strong> un SEO avancé.
        Ces fondations solides maximisent votre visibilité sur Google dès la
        mise en ligne.
      </>
    ),
  },
  {
    id: "item-5",
    question: "Pourrai-je modifier mon site moi-même après la livraison ?",
    answer: (
      <>
        Oui. Les packs Pro et Premium incluent une{" "}
        <strong className="text-foreground">
          formation à la gestion du site
        </strong>
        , vous permettant de mettre à jour vos contenus (textes, photos,
        actualités) en toute autonomie. Pour les modifications plus techniques,
        mes forfaits de maintenance sont là pour vous accompagner.
      </>
    ),
  },
  {
    id: "item-6",
    question: "Que se passe-t-il après la livraison si j'ai un problème ?",
    answer: (
      <>
        Le Pack Premium inclut{" "}
        <strong className="text-foreground">1 mois de support technique</strong>{" "}
        après la livraison. Pour les autres packs, mes forfaits de maintenance
        sans engagement prennent le relais pour corriger tout bug, effectuer des
        mises à jour et assurer le bon fonctionnement de votre site sur la
        durée.
      </>
    ),
  },
];
