import type { Metadata } from 'next'
import { ReactNode } from 'react'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Eventos',
  description: 'Participar de eventos presenciais e online'
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
