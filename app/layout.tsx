import type { Metadata } from "next";
import Script from "next/script";              // ⟵ important
import { Suspense } from "react";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { GTMListener } from "@/components/gtm-listener";

const dmSans = DM_Sans({ subsets: ["latin"], display: "swap", variable: "--font-dm-sans" });


export const metadata: Metadata = {
  metadataBase: new URL("https://www.bilanplume.fr"),
  title: {
    default: "Bilan Plume - Bilans psychomoteurs automatiques",
    template: "%s | Bilan Plume",
  },
  description:
    "Transformez vos bilans psychomoteurs en un clin d'œil avec notre outil d'écriture automatique conçu pour les professionnels de santé.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.bilanplume.fr",
    title: "Bilan Plume - Bilans psychomoteurs automatiques",
    description:
      "Transformez vos bilans psychomoteurs en un clin d'œil avec notre outil d'écriture automatique conçu pour les professionnels de santé.",
    siteName: "Bilan Plume",
    images: [
      {
        url: "https://www.bilanplume.fr/logo-bilan-plume.png",
        width: 1200,
        height: 630,
        alt: "Bilan Plume",
      },
    ],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilan Plume - Bilans psychomoteurs automatiques",
    description:
      "Transformez vos bilans psychomoteurs en un clin d'œil avec notre outil d'écriture automatique conçu pour les professionnels de santé.",
    images: ["https://www.bilanplume.fr/logo-bilan-plume.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ]
  },
  manifest: "/site.webmanifest",
  generator: "v0.app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${dmSans.variable} antialiased`}>
      <head>
        {/* GTM script */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PL55ZMV7');
          `}
        </Script>
      </head>
      <body>
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PL55ZMV7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>

        <Suspense fallback={null}>
          <GTMListener />
        </Suspense>

        {children}
      </body>
    </html>
  );
}

