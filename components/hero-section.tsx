import { Button } from "@/components/ui/button"
import { Shield, Gift, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FAF9F7] via-white to-[#f0faf6] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                {" "}
                <span className="sr-only">Outil IA pour rédiger vos bilans psychomoteurs plus rapidement</span>
                <span aria-hidden="true">
                  <span className="text-gray-900">Allégez vos semaines</span>,{" "}
                  <span className="text-primary">pas vos bilans</span>.
                </span>
              </h1>
              <h2 className="text-xl lg:text-2xl font-medium text-gray-700 leading-relaxed">
                Bilan Plume est un assistant intelligent pour psychomotriciens, ergothérapeutes et neuropsychologues qui
                vous permet de rédiger vos bilans 2x plus vite
              </h2>
            </div>

            <div className="space-y-4">
              <Link href="/essai-gratuit">
                <Button
                  size="xl"
                  className="bg-primary hover:bg-[#2C7A5D] text-white px-12 py-4 text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 inline-flex items-center gap-3 rounded-xl"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" fill="currentColor" opacity="0.8" />
                    <path d="M16 8L2 22" stroke="currentColor" strokeWidth="2" />
                    <path d="M17.5 15H9" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  <span>Essayer gratuitement</span>
                </Button>
              </Link>
              <p className="text-sm text-gray-500">Sans CB, sans engagement</p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full border border-primary/20 hover-lift">
                <Shield className="w-4 h-4 text-[#6ba3d6]" />
                <span>🇫🇷 Données hébergées en France</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full border border-primary/20 hover-lift">
                <Gift className="w-4 h-4 text-[#7dd3c0]" />
                <span>🎁 Essai gratuit</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full border border-primary/20 hover-lift">
                <BookOpen className="w-4 h-4 text-[#a8d5ba]" />
                <span>📚 Cofondée par une psychomotricienne</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift">
              <Image
                src="/pexels-karolina-grabowska-4467687.png"
                alt="Psychomotricienne souriante rédigeant un bilan dans son cabinet avec matériel thérapeutique"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Overlay avec badge */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium text-gray-900">Rédaction en cours...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
