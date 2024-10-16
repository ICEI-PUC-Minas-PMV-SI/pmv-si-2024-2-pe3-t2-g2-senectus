'use client'

import { ThemeProvider } from 'styled-components'
import { theme } from '../../themes/theme'
import { NextUIProvider } from '@nextui-org/react'
import { AppHeader } from '@components/common/Header/AppHeader'
import { AppContainer } from '@components/common/Container/AppContainer'
import { AppTrainingPlan } from '@components/exercises/AppTrainingPlan'
import { AppExercisesInitialText } from '@components/exercises/AppExercisesInitialText'

export default function ExercisesScreen() {
  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default">
        <AppHeader />

        <AppContainer style={{ justifyContent: 'start' }}>
          <AppExercisesInitialText />
          <AppTrainingPlan />
        </AppContainer>
      </NextUIProvider>
    </ThemeProvider>
  )
}
