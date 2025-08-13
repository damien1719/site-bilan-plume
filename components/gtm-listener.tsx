'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export function GTMListener() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window === 'undefined') return
    const queryString = searchParams?.toString()
    const pagePath = queryString ? `${pathname}?${queryString}` : pathname
    ;(window as any).dataLayer = (window as any).dataLayer || []
    ;(window as any).dataLayer.push({
      event: 'page_view',
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
    })
  }, [pathname, searchParams])

  return null
}


