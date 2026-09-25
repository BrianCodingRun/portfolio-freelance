import { SiteBanner } from "@/components/banner/SiteBanner";
import ClientProviders from "@/components/ClientProviders";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import "maplibre-gl/dist/maplibre-gl.css";
import { Metadata } from "next";
import { Martian_Mono, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const martianMono = Martian_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nexmyr.com"),

  title: {
    template:
      "%s | Nexmyr - Conception de sites web et d'application à La Réunion",
    default: "Nexmyr - Conception de sites web et d'application à La Réunion",
  },

  robots: {
    index: false,
    follow: false,
  },

  openGraph: {
    siteName: "Nexmyr - Conception de sites web et d'application à La Réunion",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${syne.variable} ${martianMono.variable} min-h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background antialiased font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>
            <ClientProviders />
            <div className="sticky top-0 left-0 right-0 bottom-0 w-full z-30">
              <SiteBanner />
              <Header />
            </div>
            <main>{children}</main>
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Nexmyr - Conception de solution web sur mesure",
              url: "https://nexmyr.com",
              areaServed: "La Réunion",
              founder: {
                "@type": "Person",
                name: "Brian Coupama",
              },
              employee: {
                "@type": "Person",
                name: "Brian Coupama",
                jobTitle: "Développeur web freelance",
              },
              numberOfEmployees: {
                "@type": "QuantitativeValue",
                value: 1,
              },
              sameAs: [
                "https://www.linkedin.com/company/nexmyr",
                "https://www.instagram.com/nexmyr_officiel",
                "https://x.com/nexmyr_officiel",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
