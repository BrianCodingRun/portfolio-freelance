import Section from "@/components/Section";

const applicationTypes = [
  {
    number: "01",
    title: "Application web",
    description:
      "Accessible directement depuis un navigateur, sans installation obligatoire.",
    examples: [
      "Outils de gestion internes",
      "Espaces clients",
      "Plateformes et services en ligne",
    ],
    detail:
      "Une solution accessible depuis différents appareils, avec une connexion Internet généralement nécessaire.",
  },
  {
    number: "02",
    title: "Application mobile",
    description:
      "Conçue pour une utilisation sur smartphone, avec une expérience adaptée aux usages mobiles.",
    examples: [
      "Services utilisés régulièrement",
      "Fonctionnalités liées au téléphone",
      "Expériences mobiles dédiées",
    ],
    detail:
      "Selon les besoins, elle peut intégrer des notifications, la géolocalisation ou certaines fonctionnalités hors ligne.",
  },
];

export default function PricingApplicationTypesSection() {
  return (
    <Section
      aria-labelledby="pricing-application-types-title"
      className="mx-auto w-full max-w-7xl"
    >
      <div className="mb-12 max-w-3xl space-y-6">
        <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
          Comprendre les solutions
        </p>

        <h2
          id="pricing-application-types-title"
          className="text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Application web ou mobile :{" "}
          <span className="text-primary">
            quelle solution pour votre projet ?
          </span>
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          Chaque projet est différent. Le bon choix dépend avant tout de vos
          utilisateurs, des fonctionnalités souhaitées et de la manière dont
          votre application sera utilisée.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {applicationTypes.map((application) => (
          <article
            key={application.number}
            className="border-border flex flex-col border p-6 md:p-8"
          >
            <span className="text-primary mb-8 text-sm font-medium">
              {application.number}
            </span>

            <h3 className="mb-4 text-2xl font-semibold">{application.title}</h3>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              {application.description}
            </p>

            <div className="border-border mb-8 border-t pt-6">
              <p className="mb-5 text-sm font-medium">Idéale pour</p>

              <ul className="space-y-4">
                {application.examples.map((example) => (
                  <li key={example} className="flex items-start gap-3">
                    <span aria-hidden="true" className="text-primary">
                      +
                    </span>
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-muted-foreground border-border mt-auto border-t pt-6 text-sm leading-relaxed">
              {application.detail}
            </p>
          </article>
        ))}
      </div>

      <div className="border-border mt-8 border-l-2 pl-6">
        <h3 className="mb-3 text-lg font-medium">
          Vous hésitez entre les deux ?
        </h3>

        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          Une application web peut parfois être installable grâce aux
          technologies PWA. Je vous accompagne pour choisir la solution adaptée
          à votre projet, sans vous imposer une technologie inutile.
        </p>
      </div>
    </Section>
  );
}
