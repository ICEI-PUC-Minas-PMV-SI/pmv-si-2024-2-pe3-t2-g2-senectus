'use client'

import { ThemeProvider } from 'styled-components'
import { theme } from '../../themes/theme'
import { NextUIProvider } from '@nextui-org/react'
import { AppFormSigin } from '@components/sigin/AppFormSigin'

export default function ExercisesScreen() {
  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default">
        <AppFormSigin />
      </NextUIProvider>
    </ThemeProvider>
  )
}
