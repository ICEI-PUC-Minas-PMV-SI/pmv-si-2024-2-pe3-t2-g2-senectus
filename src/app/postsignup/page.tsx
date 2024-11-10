'use client'

import { ThemeProvider } from 'styled-components'
import { theme } from '../../themes/theme'
import { NextUIProvider } from '@nextui-org/react'
import { AppFormPostSignUp } from '@components/postsignup/AppFormPostSignUp'

export default function ExercisesScreen() {
  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default">
        <AppFormPostSignUp />
      </NextUIProvider>
    </ThemeProvider>
  )
}
