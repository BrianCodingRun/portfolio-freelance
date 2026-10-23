import type { Pricing } from "@/types/pricing";
import type { FAQItem } from "./types";

export function generateApplicationsFaqData(offers: Pricing[]): FAQItem[] {
  void offers;

  return [
    {
      id: "applications-1",
      question:
        "Quelle est la différence entre une application web et une application mobile ?",
      answer: (
        <>
          <p>
            Une application web est accessible directement depuis un navigateur
            Internet, sur ordinateur, tablette ou smartphone. Elle ne nécessite
            généralement aucune installation et permet, par exemple, de gérer
            des réservations, des rendez-vous ou des espaces clients.
          </p>
          <p className="mt-4">
            Une application mobile est conçue pour être utilisée sur un
            smartphone ou une tablette. Elle peut être installée sur l'appareil
            et, selon ses fonctionnalités, exploiter certaines capacités comme
            l'appareil photo, les notifications ou la géolocalisation.
          </p>
          <p className="mt-4">
            Le choix dépend avant tout de vos besoins et de l'expérience que
            vous souhaitez offrir à vos utilisateurs.
          </p>
          <p className="mt-4">
            Chez Nexmyr, je prends le temps de comprendre votre projet pour vous
            orienter vers la solution la plus adaptée, sans vous proposer des
            fonctionnalités dont vous n'avez pas réellement besoin.
          </p>
        </>
      ),
    },
    {
      id: "applications-2",
      question:
        "J'ai une idée d'application, mais je ne sais pas par où commencer. Pouvez-vous m'accompagner ?",
      answer: (
        <>
          <p>
            Bien sûr ! Vous n'avez pas besoin d'avoir des connaissances
            techniques ni un projet entièrement défini pour me contacter.
          </p>
          <p className="mt-4">
            Nous commençons par échanger sur votre idée, les objectifs que vous
            souhaitez atteindre et les personnes auxquelles votre application
            s'adressera.
          </p>
          <p className="mt-4">
            Je vous accompagne ensuite pour clarifier vos besoins, identifier
            les fonctionnalités essentielles et définir les grandes étapes de
            réalisation de votre projet.
          </p>
          <p className="mt-4">
            Mon rôle est de transformer votre idée en un projet concret,
            réaliste et adapté à vos moyens, en vous expliquant les possibilités
            et les contraintes techniques avec des mots simples.
          </p>
          <p className="mt-4">
            Nous avançons ensemble, étape par étape, afin que vous puissiez
            prendre vos décisions en toute confiance.
          </p>
        </>
      ),
    },
    {
      id: "applications-3",
      question: "Combien coûte le développement d'une application ?",
      answer: (
        <>
          <p>
            Le coût de développement d'une application dépend de plusieurs
            éléments : les fonctionnalités souhaitées, la complexité du projet,
            les plateformes ciblées et les éventuels services à intégrer.
          </p>
          <p className="mt-4">
            Chaque projet étant différent, je privilégie une estimation
            personnalisée plutôt qu'un tarif fixe qui ne refléterait pas
            forcément vos besoins.
          </p>
          <p className="mt-4">
            Nous prenons d'abord le temps d'échanger sur votre idée, vos
            objectifs et votre budget. Cela me permet de vous proposer une
            solution adaptée, accompagnée d'un devis détaillé et transparent.
          </p>
          <p className="mt-4">
            Si votre projet nécessite un investissement important, nous pouvons
            également envisager un développement progressif, en commençant par
            les fonctionnalités essentielles avant d'ajouter de nouvelles
            possibilités.
          </p>
          <p className="mt-4">
            Mon objectif est de vous proposer une solution utile, réaliste et
            adaptée à vos moyens, sans vous pousser vers des dépenses inutiles.
          </p>
        </>
      ),
    },
    {
      id: "applications-4",
      question: "Comment se déroule le développement de mon application ?",
      answer: (
        <>
          <p>
            Chaque projet commence par un échange pour comprendre votre idée,
            vos objectifs et les fonctionnalités dont vous avez réellement
            besoin.
          </p>
          <p className="mt-4">
            Nous définissons ensuite ensemble un cahier des charges qui servira
            de référence tout au long du développement. Il permet de préciser
            les fonctionnalités prévues, les différentes étapes du projet ainsi
            que le budget et les délais estimés.
          </p>
          <p className="mt-4">
            Je travaille par phases, avec des points réguliers pour vous
            présenter l'avancement de votre application, recueillir vos retours
            et valider ensemble les étapes importantes. Vous restez ainsi
            impliqué dans votre projet du début à la fin.
          </p>
          <p className="mt-4">
            Je sais également qu'une idée peut évoluer en cours de réalisation.
            C'est pourquoi je peux accepter, à titre exceptionnel, jusqu'à deux
            ajustements mineurs sur l'ensemble du projet, sans frais
            supplémentaires, après évaluation de leur faisabilité.
          </p>
          <p className="mt-4">
            Si vous souhaitez ajouter de nouvelles fonctionnalités ou apporter
            des modifications plus importantes, nous en discuterons ensemble
            afin d'évaluer leur impact éventuel sur le budget et les délais,
            avant toute intervention.
          </p>
          <p className="mt-4">
            Mon objectif est de construire votre application dans un cadre clair
            et transparent, tout en conservant une collaboration humaine et
            flexible.
          </p>
        </>
      ),
    },
    {
      id: "applications-5",
      question:
        "Mon application pourra-t-elle évoluer après sa mise en ligne ?",
      answer: (
        <>
          <p>
            Bien sûr ! Une application est conçue pour répondre à vos besoins
            actuels, mais elle peut également évoluer au rythme de votre
            activité.
          </p>
          <p className="mt-4">
            Après sa mise en ligne, vous pouvez envisager l'ajout de nouvelles
            fonctionnalités, l'amélioration de certaines interfaces ou
            l'adaptation de votre application à de nouveaux besoins.
          </p>
          <p className="mt-4">
            Chez Nexmyr, je privilégie une approche progressive : il est souvent
            préférable de commencer avec les fonctionnalités essentielles, puis
            de faire évoluer votre application en fonction des retours de vos
            utilisateurs et de vos objectifs.
          </p>
          <p className="mt-4">
            Chaque évolution fait l'objet d'un échange pour évaluer sa
            faisabilité, son coût et son délai de réalisation. Un devis
            complémentaire peut être proposé selon l'ampleur des modifications
            souhaitées.
          </p>
          <p className="mt-4">
            Mon objectif est de vous accompagner dans la durée, en faisant
            évoluer votre application de manière réfléchie, sans vous imposer
            des fonctionnalités inutiles.
          </p>
        </>
      ),
    },
  ];
}
