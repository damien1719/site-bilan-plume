import Link from "next/link"
import { FileText } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Bilan Plume</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              L'outil d'écriture automatique de bilans psychomoteurs conçu pour les professionnels de santé.
            </p>
            <p className="text-sm text-gray-500">© 2024 Bilan Plume. Tous droits réservés.</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
{/*                 <Link href="/a-propos" className="text-gray-400 hover:text-white transition-colors">
                  À propos
                </Link> */}
              </li>
              <li>
{/*                 <Link href="/connexion" className="text-gray-400 hover:text-white transition-colors">
                  Se connecter
                </Link> */}
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/mentions-legales" className="text-gray-400 hover:text-white transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="text-gray-400 hover:text-white transition-colors">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/cgu" className="text-gray-400 hover:text-white transition-colors">
                  CGU
                </Link>
              </li>
              <li>
                <Link 
                  href="mailto:support@bilanplume.fr" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
