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
  title: "Bilan Plume - Bilans psychomoteurs automatiques",
  description:
    "Transformez vos bilans psychomoteurs en un clin d'œil avec notre outil d'écriture automatique conçu pour les professionnels de santé.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${dmSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
