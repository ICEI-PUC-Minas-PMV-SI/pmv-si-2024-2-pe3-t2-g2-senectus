'use client'

import { ThemeProvider } from 'styled-components'
import { theme } from '../../themes/theme'
import { NextUIProvider } from '@nextui-org/react'
import { AppFormSignUp } from '@components/signup/AppFormSignUp'

export default function ExercisesScreen() {
  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default">
        <AppFormSignUp />
      </NextUIProvider>
    </ThemeProvider>
  )
}