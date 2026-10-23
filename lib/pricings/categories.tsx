export type PricingBenefit = {
  title: string;
  description: string;
};

export type PricingBenefitsConfig = {
  eyebrow: string;
  heading: React.ReactNode;
  description: string;
  items: PricingBenefit[];
};

export type PricingComparisonValue = boolean | string;

export type PricingComparisonRow = {
  label: string;
  values: PricingComparisonValue[];
};

export type PricingComparisonContent = {
  eyebrow: string;
  heading: React.ReactNode;
  description: string;
};

export type PricingComparisonConfig = PricingComparisonContent & {
  columns: string[];
  rows: PricingComparisonRow[];
};

export type PricingCtaConfig = {
  eyebrow: string;
  heading: string;
  description: string;
  buttonLabel: string;
};

export const pricingCategories = {
  "sites-web": {
    category: "pack",
    breadcrumbLabel: "Sites web",
    title: "Création de sites web",
    heading: (
      <>
        Votre activité mérite un site à{" "}
        <span className="text-primary">sa hauteur.</span>
      </>
    ),
    description:
      "Des sites web professionnels, performants et adaptés à vos objectifs. De la simple vitrine à une expérience entièrement sur mesure.",

    seo: {
      title: "Création de sites web à La Réunion",
      description:
        "Découvrez les offres de création de sites web de Nexmyr : site vitrine, site professionnel et développement sur mesure à La Réunion.",
    },
    benefits: {
      eyebrow: "Pourquoi un site web ?",
      heading: (
        <>
          Bien plus {"qu'"}une simple{" "}
          <span className="text-primary">vitrine.</span>
        </>
      ),
      description:
        "Aujourd'hui, vos futurs clients recherchent des informations en ligne avant de faire leur choix. Un site web professionnel vous permet d'être présent, de rassurer et de donner envie de vous contacter.",
      items: [
        {
          title: "Soyez visible",
          description:
            "Permettez à vos futurs clients de découvrir votre activité, vos services et vos coordonnées à tout moment.",
        },
        {
          title: "Inspirez confiance",
          description:
            "Présentez votre savoir-faire et renforcez votre crédibilité avec une présence professionnelle en ligne.",
        },
        {
          title: "Facilitez les échanges",
          description:
            "Offrez à vos visiteurs un moyen simple de vous contacter, de demander un devis ou de prendre rendez-vous.",
        },
        {
          title: "Démarquez-vous",
          description:
            "Valorisez votre identité et vos atouts pour faire la différence face à vos concurrents.",
        },
      ],
    },
    comparison: {
      eyebrow: "Comparer les formules",
      heading: (
        <>
          Quelle formule pour{" "}
          <span className="text-primary">votre projet ?</span>
        </>
      ),
      description:
        "Comparez les fonctionnalités de mes différentes formules et trouvez celle qui correspond le mieux à votre projet.",
    },
    cta: {
      eyebrow: "Passons à l'action",
      heading: "Un projet en tête ?",
      description:
        "Vous avez une idée de site web ? Échangeons sur vos besoins et donnons-lui vie ensemble.",
      buttonLabel: "Échangeons sur votre projet",
    },
  },

  applications: {
    category: "app",
    breadcrumbLabel: "Applications",
    title: "Développement d'applications",
    heading: (
      <>
        Des applications pensées pour{" "}
        <span className="text-primary">vos ambitions.</span>
      </>
    ),
    description:
      "Des applications web et mobiles conçues pour simplifier vos processus, répondre à vos besoins métier et accompagner votre croissance.",

    seo: {
      title: "Développement d'applications",
      description:
        "Découvrez les prestations de développement d'applications web et mobiles sur mesure proposées par Nexmyr.",
    },
    benefits: {
      eyebrow: "Pourquoi une application ?",
      heading: (
        <>
          Des outils pensés pour{" "}
          <span className="text-primary">vous simplifier la vie.</span>
        </>
      ),
      description:
        "Certaines activités ont des besoins auxquels les outils classiques ne répondent pas toujours. Une application sur mesure permet de simplifier votre organisation, d'automatiser certaines tâches et de développer de nouveaux services.",
      items: [
        {
          title: "Gagnez du temps",
          description:
            "Automatisez les tâches répétitives et consacrez davantage de temps à votre activité.",
        },
        {
          title: "Simplifiez votre organisation",
          description:
            "Centralisez vos informations et facilitez la gestion quotidienne de votre entreprise.",
        },
        {
          title: "Offrez de nouveaux services",
          description:
            "Proposez à vos clients une expérience adaptée à leurs besoins, sur le web ou sur mobile.",
        },
        {
          title: "Évoluez à votre rythme",
          description:
            "Développez une solution conçue pour accompagner les évolutions de votre activité.",
        },
      ],
    },
    cta: {
      eyebrow: "Passons à l'action",
      heading: "Un projet en tête ?",
      description:
        "Une application à imaginer ou à développer ? Parlons de vos objectifs pour construire une solution qui vous ressemble.",
      buttonLabel: "Échangeons sur votre projet",
    },
  },

  maintenance: {
    category: "maintenance",
    breadcrumbLabel: "Maintenance",
    title: "Maintenance de sites web",
    heading: (
      <>
        Votre site entre de <span className="text-primary">bonnes mains.</span>
      </>
    ),
    description:
      "Un accompagnement régulier pour maintenir votre site performant, sécurisé et disponible.",

    seo: {
      title: "Maintenance de sites web",
      description:
        "Découvrez les forfaits de maintenance de Nexmyr pour assurer la sécurité, les mises à jour et le bon fonctionnement de votre site web.",
    },
    benefits: {
      eyebrow: "Pourquoi entretenir votre site ?",
      heading: (
        <>
          Votre site mérite de rester{" "}
          <span className="text-primary">entre de bonnes mains.</span>
        </>
      ),
      description:
        "La mise en ligne n'est que le début. Pour continuer à fonctionner correctement, votre site nécessite un suivi régulier. La maintenance permet de limiter les risques, de préserver ses performances et d'intervenir lorsqu'un problème survient.",
      items: [
        {
          title: "Renforcez votre sécurité",
          description:
            "Maintenez vos composants à jour pour réduire les risques liés aux vulnérabilités connues.",
        },
        {
          title: "Préservez vos performances",
          description:
            "Surveillez le bon fonctionnement de votre site pour offrir une expérience agréable à vos visiteurs.",
        },
        {
          title: "Limitez les interruptions",
          description:
            "Identifiez les anomalies et intervenez rapidement pour réduire les perturbations de votre activité.",
        },
        {
          title: "Restez serein",
          description:
            "Bénéficiez d'un accompagnement technique régulier sans devoir gérer seul les problèmes de votre site.",
        },
      ],
    },
    comparison: {
      eyebrow: "Comparer les formules",
      heading: (
        <>
          Quel accompagnement pour{" "}
          <span className="text-primary">votre site ?</span>
        </>
      ),
      description:
        "Comparez les prestations incluses dans mes formules de maintenance et choisissez l'accompagnement adapté aux besoins de votre site.",
    },
    cta: {
      eyebrow: "Parlons de votre site",
      heading: "Votre site mérite de l'attention.",
      description:
        "Confiez-moi la maintenance de votre site et concentrez-vous sereinement sur votre activité.",
      buttonLabel: "Discutons de votre site",
    },
  },
} as const satisfies Record<
  string,
  {
    category: "pack" | "app" | "maintenance";
    breadcrumbLabel: string;
    title: string;
    heading: React.ReactNode;
    description: string;
    benefits: PricingBenefitsConfig;
    seo: {
      title: string;
      description: string;
    };
    comparison?: PricingComparisonContent;
    cta: PricingCtaConfig;
  }
>;

export type PricingSlug = keyof typeof pricingCategories;

export type PricingCategoryConfig = (typeof pricingCategories)[PricingSlug];

export function isPricingSlug(slug: string): slug is PricingSlug {
  return Object.prototype.hasOwnProperty.call(pricingCategories, slug);
}
