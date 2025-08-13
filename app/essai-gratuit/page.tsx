import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Shield, Calendar, CheckCircle, Users, Clock } from "lucide-react"
import Link from "next/link"

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
              <img src="/logo-bilan-plume.png" alt="Bilan Plume" className="w-8 h-8" />
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

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="prenom">Prénom *</Label>
                    <Input id="prenom" placeholder="Votre prénom" required />
                  </div>
                  <div>
                    <Label htmlFor="nom">Nom *</Label>
                    <Input id="nom" placeholder="Votre nom" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email professionnel *</Label>
                  <Input id="email" type="email" placeholder="votre.email@exemple.com" required />
                </div>

                <div>
                  <Label htmlFor="telephone">Téléphone *</Label>
                  <Input id="telephone" type="tel" placeholder="06 12 34 56 78" required />
                </div>

                <div>
                  <Label htmlFor="profession">Profession *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez votre profession" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="psychomotricien">Psychomotricien(ne)</SelectItem>
                      <SelectItem value="ergotherapeute">Ergothérapeute</SelectItem>
                      <SelectItem value="neuropsychologue">Neuropsychologue</SelectItem>
                      <SelectItem value="autre">Autre profession de santé</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  
                  
                </div>

                <div>
                  
                  <Select>
                    
                    <SelectContent>
                      <SelectItem value="1-5">1 à 5 bilans</SelectItem>
                      <SelectItem value="6-10">6 à 10 bilans</SelectItem>
                      <SelectItem value="11-20">11 à 20 bilans</SelectItem>
                      <SelectItem value="20+">Plus de 20 bilans</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  
                  <Select>
                    
                    <SelectContent>
                      <SelectItem value="matin">Matinée (9h-12h)</SelectItem>
                      <SelectItem value="apres-midi">Après-midi (14h-17h)</SelectItem>
                      <SelectItem value="soir">Soirée (18h-20h)</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  
                  
                </div>

                

                <Button
                  type="submit"
                  size="xl"
                  className="w-full bg-gradient-to-r from-primary via-[#2C7A5D] to-[#1a5d47] hover:from-[#2C7A5D] hover:to-primary text-white px-12 py-4 text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
                >
                  <Calendar className="w-6 h-6 mr-2" />
                  Réserver ma démo gratuite
                </Button>

                <p className="text-center text-sm text-gray-500">
                  Démo de 20 minutes • Accès essai 14 jours • Sans engagement
                </p>
              </form>
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
