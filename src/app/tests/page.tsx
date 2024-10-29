'use client'

import { ThemeProvider } from 'styled-components'
import { theme } from '../../themes/theme'
import { NextUIProvider } from '@nextui-org/react'
import { FaEnvelope } from 'react-icons/fa6'
import { AppDefaultInput } from '@components/common/Inputs/DefaultInput/AppDefaultInput'

export default function Tests() {
  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default">
        <AppDefaultInput label="Insira seu nome" icon={<FaEnvelope />} />
      </NextUIProvider>
    </ThemeProvider>
  )
}
