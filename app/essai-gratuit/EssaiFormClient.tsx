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
      setPrenom("")
      setNom("")
      setEmail("")
      setTelephone("")
      setProfession("")
      setNbBilans("")
      setDisponibilite("")
      setMessage("")
    } catch (err: any) {
      setFeedback(err?.message || "Une erreur est survenue.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="prenom">Prénom *</Label>
          <Input id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} placeholder="Votre prénom" required />
        </div>
        <div>
          <Label htmlFor="nom">Nom *</Label>
          <Input id="nom" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Votre nom" required />
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email professionnel *</Label>
        <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="votre.email@exemple.com" required />
      </div>

      <div>
        <Label htmlFor="telephone">Téléphone *</Label>
        <Input id="telephone" type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} placeholder="06 12 34 56 78" required />
      </div>

      <div>
        <Label>Profession *</Label>
        <Select value={profession} onValueChange={setProfession}>
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
        <Label>Nombre de bilans/mois</Label>
        <Select value={nbBilans} onValueChange={setNbBilans}>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1-5">1 à 5 bilans</SelectItem>
            <SelectItem value="6-10">6 à 10 bilans</SelectItem>
            <SelectItem value="11-20">11 à 20 bilans</SelectItem>
            <SelectItem value=">20">Plus de 20 bilans</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Préférence de créneau</Label>
        <Select value={disponibilite} onValueChange={setDisponibilite}>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="matin">Matinée (9h-12h)</SelectItem>
            <SelectItem value="apres-midi">Après-midi (14h-17h)</SelectItem>
            <SelectItem value="soir">Soirée (18h-20h)</SelectItem>
            <SelectItem value="flexible">Flexible</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="message">Message (optionnel)</Label>
        <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Votre contexte ou préférences..." />
      </div>

      {feedback && <p className="text-sm text-gray-600">{feedback}</p>}

      <Button type="submit" size="lg" disabled={submitting} className="w-full bg-gradient-to-r from-primary via-[#2C7A5D] to-[#1a5d47] hover:from-[#2C7A5D] hover:to-primary text-white px-12 py-4 text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
        <Calendar className="w-6 h-6 mr-2" />
        {submitting ? "Envoi..." : "Réserver ma démo gratuite"}
      </Button>
    </form>
  )
}


