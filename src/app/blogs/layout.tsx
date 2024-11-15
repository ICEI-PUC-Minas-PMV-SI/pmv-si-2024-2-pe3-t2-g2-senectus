import type { Metadata } from 'next'
import { ReactNode } from 'react'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Postagens',
  description: 'Conferir postagens feitas por profissionais da saúde'
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
