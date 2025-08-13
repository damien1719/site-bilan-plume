"use client"

import { useState } from "react"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFeedback(null)
    if (!email) {
      setFeedback("Veuillez saisir un email valide.")
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || "Erreur lors de l'inscription")
      }
      setFeedback("Merci ! Vous êtes bien inscrit(e) à nos actualités.")
      setEmail("")
    } catch (err: any) {
      setFeedback(err?.message || "Une erreur est survenue.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
      <input
        type="email"
        placeholder="Votre email professionnel"
        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button
        type="submit"
        disabled={submitting}
        className="bg-primary hover:bg-[#2C7A5D] text-white px-6 py-3 rounded-lg font-medium transition-colors"
      >
        {submitting ? "Envoi..." : "S'abonner"}
      </button>
      {feedback && <p className="text-sm text-gray-600 sm:col-span-2">{feedback}</p>}
    </form>
  )
}


