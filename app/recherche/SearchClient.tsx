"use client"
import { useState } from "react"

export default function SearchClient() {
  const [query, setQuery] = useState("")
  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Rechercher..."
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <p className="mt-4 text-gray-500">Fonction de recherche simplifiée (démo).</p>
    </div>
  )
}


