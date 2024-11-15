import type { Metadata } from 'next'
import { ReactNode } from 'react'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Configurações',
  description: 'Acessar página de configuração da conta'
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
