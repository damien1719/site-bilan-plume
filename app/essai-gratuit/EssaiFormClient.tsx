"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export default function EssaiFormClient() {
  const [prenom, setPrenom] = useState("")
  const [nom, setNom] = useState("")
  const [email, setEmail] = useState("")
  const [telephone, setTelephone] = useState("")
  const [profession, setProfession] = useState("")
  const [nbBilans, setNbBilans] = useState("")
  const [disponibilite, setDisponibilite] = useState("")
  const [message, setMessage] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFeedback(null)
    if (!prenom || !nom || !email || !telephone) {
      setFeedback("Veuillez remplir les champs requis.")
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prenom, nom, email, telephone, profession, nbBilans, disponibilite, message }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || "Erreur lors de l'envoi du message")
      }
      setFeedback("Votre demande a été envoyée. Nous vous recontactons rapidement.")
      setPrenom(""); setNom(""); setEmail(""); setTelephone("")
      setProfession(""); setNbBilans(""); setDisponibilite(""); setMessage("")
    } catch (err: any) {
      setFeedback(err?.message || "Une erreur est survenue.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      {/* champs nom/prénom */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="min-w-0">
          <Label htmlFor="prenom">Prénom *</Label>
          <Input
            id="prenom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            placeholder="Votre prénom"
            required
            autoComplete="given-name"
            className="w-full text-base"
          />
        </div>
        <div className="min-w-0">
          <Label htmlFor="nom">Nom *</Label>
          <Input
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            placeholder="Votre nom"
            required
            autoComplete="family-name"
            className="w-full text-base"
          />
        </div>
      </div>

      <div className="min-w-0">
        <Label htmlFor="email">Email professionnel *</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="votre.email@exemple.com"
          required
          autoComplete="email"
          inputMode="email"
          className="w-full text-base"
        />
      </div>

      <div className="min-w-0">
        <Label htmlFor="telephone">Téléphone *</Label>
        <Input
          id="telephone"
          type="tel"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          placeholder="06 12 34 56 78"
          required
          autoComplete="tel"
          inputMode="tel"
          className="w-full text-base"
        />
      </div>

      <div className="min-w-0">
        <Label>Profession *</Label>
        <Select value={profession} onValueChange={setProfession}>
          <SelectTrigger className="w-full text-base">
            <SelectValue placeholder="Sélectionnez votre profession" />
          </SelectTrigger>
          {/* Limiter la hauteur en mobile pour éviter les débordements */}
          <SelectContent className="max-h-[60vh]">
            <SelectItem value="psychomotricien">Psychomotricien(ne)</SelectItem>
            <SelectItem value="ergotherapeute">Ergothérapeute</SelectItem>
            <SelectItem value="neuropsychologue">Neuropsychologue</SelectItem>
            <SelectItem value="autre">Autre profession de santé</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Optionnel : champs libres si tu les utilises */}
      <div className="min-w-0">
        <Label htmlFor="message">Message (optionnel)</Label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Précisez vos disponibilités ou vos besoins"
          className="w-full text-base"
          rows={4}
        />
      </div>

      {feedback && <p className="text-sm text-gray-600">{feedback}</p>}

      <Button
        type="submit"
        size="lg"
        disabled={submitting}
        className="w-full bg-gradient-to-r from-primary via-[#2C7A5D] to-[#1a5d47] hover:from-[#2C7A5D] hover:to-primary text-white px-4 sm:px-6 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
      >
        <Calendar className="w-6 h-6 mr-2 shrink-0" />
        {submitting ? (
          "Envoi..."
        ) : (
          <>
            <span className="hidden sm:inline">Planifiez votre démonstration gratuite</span>
            <span className="sm:hidden">Réserver une démo</span>
          </>
        )}
      </Button>
    </form>
  )
}
