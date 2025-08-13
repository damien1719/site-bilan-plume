import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Shield, Calendar, CheckCircle, Users, Clock } from "lucide-react"
import Link from "next/link"
import EssaiFormClient from "./EssaiFormClient"

export default function EssaiGratuitPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF9F7] via-white to-[#f0faf6]">
      {/* Header simple */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Retour à l'accueil</span>
            </Link>
            <div className="flex items-center gap-2">
              <Image src="/logo-bilan-plume.png" alt="Bilan Plume" width={32} height={32} />
              <span className="font-bold text-xl text-primary">Bilan Plume</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Formulaire */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="space-y-6">
              <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold text-gray-900">Réservez votre essai gratuit</h1>
                <p className="text-lg text-gray-600">
                  Commencez en réservant votre démo gratuite
                </p>
              </div>

              <EssaiFormClient />
            </div>
          </div>

          {/* Avantages */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Comment ça se passe ?</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Démo personnalisée (20 min)</h3>
                    <p className="text-gray-600">Découverte de Bilan Plume avec vos cas concrets</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Accès essai gratuit</h3>
                    <p className="text-gray-600">14 jours d'accès complet à toutes les fonctionnalités</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Accompagnement personnalisé</h3>
                    <p className="text-gray-600">Support dédié pour optimiser votre utilisation</p>
                  </div>
                </div>
              </div>
            </div>

            

            {/* Badges de confiance */}
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl border border-primary/20">
                <Shield className="w-6 h-6 text-[#6ba3d6]" />
                <div>
                  <div className="font-medium text-gray-900">🇫🇷 Hébergement France</div>
                  <div className="text-sm text-gray-600">Conformité RGPD garantie</div>
                </div>
              </div>

              

              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl border border-primary/20">
                <Clock className="w-6 h-6 text-[#a8d5ba]" />
                <div>
                  <div className="font-medium text-gray-900">⏱️ 12h économisées</div>
                  <div className="text-sm text-gray-600">En moyenne par semaine</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: "Essai gratuit",
  description:
    "Réservez une démo personnalisée et profitez de 14 jours d'essai gratuit de Bilan Plume, l'outil d'aide à la rédaction de bilans psychomoteurs.",
  alternates: {
    canonical: "/essai-gratuit",
  },
  openGraph: {
    url: "https://www.bilanplume.fr/essai-gratuit",
    title: "Essai gratuit | Bilan Plume",
    description:
      "Réservez une démo personnalisée et profitez de 14 jours d'essai gratuit de Bilan Plume.",
    images: [
      {
        url: "https://www.bilanplume.fr/logo-bilan-plume.png",
        width: 1200,
        height: 630,
        alt: "Bilan Plume",
      },
    ],
  },
}
