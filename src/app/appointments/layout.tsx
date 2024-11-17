import type { Metadata } from 'next'
import { ReactNode } from 'react'
import '@screens/globals.css'

export const metadata: Metadata = {
  title: 'Consultas',
  description: 'Conferir a suas consultas com profissionais da saúde'
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
