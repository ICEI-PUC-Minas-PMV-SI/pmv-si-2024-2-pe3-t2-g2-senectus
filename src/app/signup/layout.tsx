import type { Metadata } from 'next'
import '../globals.css'
import StyledComponentsRegistry from '../../lib/registry'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['700', '500', '400'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}