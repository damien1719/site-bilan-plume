import type { ReactNode } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

type SiteLayoutProps = {
  children: ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

