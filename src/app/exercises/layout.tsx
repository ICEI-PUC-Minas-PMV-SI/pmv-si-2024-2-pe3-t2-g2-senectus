import type { Metadata } from 'next'
import { ReactNode } from 'react'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Exercícios',
  description: 'Praticar exercícios físicos'
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
