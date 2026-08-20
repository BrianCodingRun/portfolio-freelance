import ClientProviders from "@/components/ClientProviders";
import Footer from "@/components/Footer";
import "maplibre-gl/dist/maplibre-gl.css";
import { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
// import { SiteBanner } from "@/components/banner/SiteBanner";
import { SiteBanner } from "@/components/banner/SiteBanner";
import { Header } from "@/components/Header";
import { TooltipProvider } from "@/components/ui/tooltip";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const blanka = localFont({
  src: "./fonts/Blanka.otf",
  variable: "--font-blanka",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.briancoupama.re"),

  title: {
    template: "%s | Brian Coupama - Développeur Web Freelance à La Réunion",
    default: "Brian Coupama - Développeur Web Freelance à La Réunion",
  },

  robots: {
    index: false,
    follow: false,
  },

  openGraph: {
    siteName: "Brian Coupama - Développeur Web Freelance à La Réunion",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${spaceGrotesk.variable} ${blanka.variable} h-full antialiased`}
    >
      <body className="h-full bg-background text-foreground antialiased font-sans">
        <TooltipProvider>
          <ClientProviders />
          <div className="sticky top-0 left-0 w-full z-30">
            <SiteBanner />
            <Header />
          </div>
          <main>{children}</main>
          <Footer />
        </TooltipProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Brian Coupama - Développeur Web Freelance à La Réunion",
              url: "https://portfolio.briancoupama.re",
              areaServed: "La Réunion",
              jobTitle: "Développeur Web",
            }),
          }}
        />
      </body>
    </html>
  );
}
