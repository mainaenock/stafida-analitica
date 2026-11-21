import type { Metadata } from "next";
import { Header } from "@/components/header";
import { ScrollMotion } from "@/components/motion";
import { Footer } from "@/components/site";
import { asset, business } from "@/lib/business";
import "@fontsource-variable/dm-sans/wght.css";
import "@fontsource/instrument-serif/latin-400.css";
import "@fontsource/instrument-serif/latin-400-italic.css";
import "./globals.css";

const description = "Stafida Analytica is a Nairobi-based consultancy for market and social research, data analytics, actuarial and insurance services, and academic research support.";

export const metadata: Metadata = {
  title: { default: "Stafida Analytica | Research, Analytics & Advisory", template: "%s | Stafida Analytica" },
  description,
  applicationName: business.name,
  icons: { icon: { url: asset("/stafida-icon.png"), type: "image/png", sizes: "48x48" } },
  openGraph: { type: "website", locale: "en_KE", siteName: business.name, description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-KE">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <ScrollMotion />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
