import type { Metadata } from 'next'
import { ReactNode } from 'react'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Conectar-se',
  description: 'Entrar na plataforma Senectus'
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
