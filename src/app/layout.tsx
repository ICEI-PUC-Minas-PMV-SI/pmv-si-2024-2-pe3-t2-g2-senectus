import type { Metadata } from 'next'
import './globals.css'
import StyledComponentsRegistry from '../lib/registry'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['700', '500', '400'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Página inicial',
  description: 'Acessa já a plataforma Senectus para começar a se exercitar'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className}`}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
