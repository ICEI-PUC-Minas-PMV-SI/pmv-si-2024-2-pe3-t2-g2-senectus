'use client'

import { ThemeProvider } from 'styled-components'
import { theme } from '../../themes/theme'
import { NextUIProvider } from '@nextui-org/react'
import { AppFormLogin } from '@components/login/AppFormLogin'

export default function ExercisesScreen() {
  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default">
        <AppFormLogin />
      </NextUIProvider>
    </ThemeProvider>
  )
}
