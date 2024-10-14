'use client'

import { ThemeProvider } from 'styled-components'
import theme from '../themes/theme'
import { NextUIProvider } from '@nextui-org/react'
import { Header } from '@components/common/Header/Header'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default">
        <Header />
      </NextUIProvider>
    </ThemeProvider>
  )
}
