import type { Pricing } from "@/types/pricing";
import type { FAQItem } from "./types";

export function generateSitesWebFaqData(offers: Pricing[]): FAQItem[] {
  void offers;

  return [
    {
      id: "sites-web-1",
      question: "Quel type de site web correspond le mieux à mon activité ?",
      answer: (
        <>
          <p>
            Chaque activité possède ses propres besoins. Un site vitrine permet
            de présenter votre entreprise, vos services et vos coordonnées,
            tandis qu'un site e-commerce vous permet de vendre vos produits
            directement en ligne.
          </p>
          <p className="mt-4">
            Chez Nexmyr, je vous accompagne dans le choix de la solution la plus
            adaptée à votre activité, à vos objectifs et à votre budget. L'idée
            n'est pas de vous proposer le site le plus complexe, mais celui qui
            répond réellement à vos besoins.
          </p>
        </>
      ),
    },
    {
      id: "sites-web-2",
      question: "Dois-je fournir les textes et les images de mon site ?",
      answer: (
        <>
          <p>
            Idéalement, vous me fournissez les textes, les images et les
            éléments visuels que vous souhaitez intégrer à votre site. Cela me
            permet de mieux comprendre votre activité et de créer un site qui
            vous ressemble.
          </p>
          <p className="mt-4">
            Vous n'êtes pas à l'aise avec la rédaction ? Pas d'inquiétude, je
            peux vous accompagner dans la formulation de vos textes et vous
            aider à présenter votre activité de manière claire et
            professionnelle.
          </p>
          <p className="mt-4">
            Cet accompagnement est inclus dans mes prestations. Toutefois, selon
            la quantité de contenus à préparer, il peut nécessiter un temps de
            travail supplémentaire et influencer le délai de livraison de votre
            site.
          </p>
          <p className="mt-4">
            Nous prendrons le temps d'en discuter ensemble afin d'organiser
            votre projet dans les meilleures conditions.
          </p>
        </>
      ),
    },
    {
      id: "sites-web-3",
      question: "Le nom de domaine et l'hébergement sont-ils inclus ?",
      answer: (
        <>
          <p>
            Oui, le nom de domaine et l'hébergement sont inclus pendant la
            première année dans mes prestations de création de sites web.
          </p>
          <p className="mt-4">
            Je m'occupe de leur mise en place et de leur configuration afin que
            votre site soit accessible en ligne.
          </p>
          <p className="mt-4">
            Vous êtes libre de choisir comment gérer ces services. Si vous
            souhaitez être autonome, je vous accompagne dans le choix de votre
            hébergeur, la prise en main de votre espace d'administration et la
            configuration des renouvellements.
          </p>
          <p className="mt-4">
            Si vous préférez me confier leur gestion, je peux également prendre
            en charge les démarches techniques et le suivi des renouvellements,
            avec votre accord.
          </p>
          <p className="mt-4">
            À partir de la deuxième année, les frais de renouvellement restent à
            prévoir. Dans tous les cas, vous restez titulaire de votre nom de
            domaine et libre de reprendre la gestion de vos services.
          </p>
          <p className="mt-4">
            Chez Nexmyr, l'accompagnement s'adapte à vos besoins, et non
            l'inverse.
          </p>
        </>
      ),
    },
    {
      id: "sites-web-4",
      question: "Mon site sera-t-il adapté aux smartphones et aux tablettes ?",
      answer: (
        <>
          <p>
            Absolument ! Aujourd'hui, de nombreuses personnes consultent
            Internet depuis leur smartphone ou leur tablette. Il est donc
            essentiel que votre site soit agréable à utiliser, quel que soit
            l'appareil.
          </p>
          <p className="mt-4">
            Tous les sites web que je réalise sont conçus pour s'adapter
            automatiquement aux différentes tailles d'écran : ordinateur,
            tablette et smartphone.
          </p>
          <p className="mt-4">
            Je veille également à ce que les textes restent lisibles, que la
            navigation soit intuitive et que les éléments importants soient
            facilement accessibles.
          </p>
          <p className="mt-4">
            L'objectif est simple : offrir à vos visiteurs une expérience fluide
            et confortable, peu importe la manière dont ils consultent votre
            site.
          </p>
        </>
      ),
    },
    {
      id: "sites-web-5",
      question: "Comment se déroule la création de mon site web ?",
      answer: (
        <>
          <p>
            Chaque projet commence par un échange pour apprendre à vous
            connaître, comprendre votre activité, vos besoins et les objectifs
            de votre futur site web.
          </p>
          <p className="mt-4">
            Une fois votre projet défini et le devis accepté, nous passons à la
            préparation des contenus et à la conception de votre site.
          </p>
          <p className="mt-4">
            Je travaille par phases, avec des points réguliers pour vous
            présenter l'avancement du projet, recueillir vos retours et valider
            ensemble les étapes importantes. Vous restez ainsi impliqué dans la
            création de votre site, sans avoir à vous préoccuper des aspects
            techniques.
          </p>
          <p className="mt-4">
            Pour les projets réalisés avec la formule{" "}
            <strong>Sur-mesure</strong>, une étape de maquettage est également
            prévue afin de définir ensemble l'apparence et l'organisation de
            votre futur site avant son développement.
          </p>
          <p className="mt-4">
            Lorsque votre site est prêt, nous prenons le temps de le vérifier
            ensemble afin de nous assurer qu'il correspond à vos attentes. Après
            les derniers ajustements prévus, je procède à sa mise en ligne.
          </p>
          <p className="mt-4">
            Et parce qu'un projet ne s'arrête pas à sa livraison, je reste
            disponible pour vous accompagner selon les conditions de support et
            de maintenance prévues dans votre prestation.
          </p>
        </>
      ),
    },
  ];
}
