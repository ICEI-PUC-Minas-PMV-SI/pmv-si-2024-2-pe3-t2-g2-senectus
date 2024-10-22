'use client'

import { ThemeProvider } from 'styled-components'
import { theme } from '../../themes/theme'
import { NextUIProvider } from '@nextui-org/react'
import { AppButtonActionRectOutline } from '@components/common/Buttons/AppButtonActionRectOutline'

export default function Tests() {
  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default">
        <AppButtonActionRectOutline text="Clique aqui" />
      </NextUIProvider>
    </ThemeProvider>
  )
}
