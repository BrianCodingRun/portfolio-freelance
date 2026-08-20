import Logo from "@/public/assets/logo-original.svg";
import Link from "next/link";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t-2 border-primary bg-card">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr] items-center">
          {/* Présentation */}
          <div className="space-y-4">
            <div className="space-y-4">
              <Link href="/" aria-label="Retour à la page d'accueil">
                <Logo className="h-16 w-auto" />
              </Link>
              <p className="mt-2 text-sm tracking-wider">
                Développeur Web Freelance
                <br />à La Réunion
              </p>
            </div>

            <p className="max-w-xs text-sm text-muted-foreground">
              Sites web modernes, performants et conçus pour répondre aux
              besoins réels de votre activité.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm text-primary font-semibold uppercase">
              Navigation
            </h4>

            <ul className="space-y-3">
              {[
                {
                  title: "Portfolio",
                  href: "/projects",
                  ariaLabel: "Voir mes projets",
                },
                {
                  title: "Tarifs",
                  href: "/pricings",
                  ariaLabel: "Consulter mes tarifs",
                },
                {
                  title: "Parcours",
                  href: "/journey",
                  ariaLabel: "Voir mon parcours",
                },
                {
                  title: "Contact",
                  href: "/contact",
                  ariaLabel: "Me contacter",
                },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    aria-label={item.ariaLabel}
                  >
                    {index + 1 + "."} {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Réseaux */}
          <div>
            <h4 className="mb-6 text-primary font-semibold uppercase">
              Restons connectés
            </h4>

            <p className="mb-6 text-sm text-muted-foreground">
              Une idée de projet ou simplement envie {"d'échanger"} ?
            </p>

            <div className="flex gap-4">
              {[
                {
                  icon: <FaXTwitter size={16} />,
                  href: "https://x.com/CoupamaBrian",
                  ariaLabel: "Accéder à mon profil Twitter",
                },
                {
                  icon: <FaInstagram size={16} />,
                  href: "https://www.instagram.com/briandevrun",
                  ariaLabel: "Accéder à mon profil Instagram",
                },
                {
                  icon: <FaGithub size={16} />,
                  href: "https://github.com/BrianCodingRun",
                  ariaLabel: "Accéder à mon profil Github",
                },
                {
                  icon: <FaLinkedinIn size={16} />,
                  href: "https://www.linkedin.com/in/brian-coupama/",
                  ariaLabel: "Mon profil Linkedin",
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-primary border border-primary/30 p-3 transition-all hover:border-primary hover:-translate-y-0.5"
                  aria-label={item.ariaLabel}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="mt-12 flex flex-col gap-4 border-t border-primary/20 pt-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Brian Coupama — Développeur Web
            Freelance à La Réunion
          </p>

          <div className="flex gap-6">
            <Link
              href="/legal"
              className="hover:text-primary hover:underline transition-colors"
            >
              Mentions légales
            </Link>

            <Link
              href="/cgv"
              className="hover:text-primary hover:underline transition-colors"
            >
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
