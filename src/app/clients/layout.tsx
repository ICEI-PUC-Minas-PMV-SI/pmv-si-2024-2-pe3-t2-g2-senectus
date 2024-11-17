import type { Metadata } from 'next'
import { ReactNode } from 'react'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Gerenciar seu clientes, consultas e planos de treino'
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
