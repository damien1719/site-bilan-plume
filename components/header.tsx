"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo-bilan-plume.png" alt="Bilan Plume" width={32} height={32} className="w-8 h-8" />
            <span className="text-xl font-bold text-gray-900">Bilan Plume</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
              Accueil
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/a-propos" className="text-gray-600 hover:text-primary transition-colors">
              À propos
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" asChild>
              <Link href="/connexion">Se connecter</Link>
            </Button>
            <Button
              className="bg-primary hover:bg-[#2C7A5D] text-white px-8 py-3 text-lg font-semibold rounded-xl"
              asChild
            >
              <Link href="/essai-gratuit">Essayer gratuitement</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
                Accueil
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/a-propos" className="text-gray-600 hover:text-primary transition-colors">
                À propos
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" asChild>
                  <Link href="/connexion">Se connecter</Link>
                </Button>
                <Button
                  className="bg-primary hover:bg-[#2C7A5D] text-white px-8 py-3 text-lg font-semibold rounded-xl"
                  asChild
                >
                  <Link href="/essai-gratuit">Demander un accès</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
