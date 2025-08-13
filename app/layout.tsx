import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

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
    icon: "/logo-bilan-plume.png",
  },
  manifest: "/site.webmanifest",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${dmSans.variable} antialiased`}>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PL55ZMV7"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  )
}
