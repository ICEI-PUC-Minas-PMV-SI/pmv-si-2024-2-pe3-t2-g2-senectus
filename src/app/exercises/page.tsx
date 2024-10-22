'use client'

import { ThemeProvider } from 'styled-components'
import { theme } from '../../themes/theme'
import { NextUIProvider } from '@nextui-org/react'
import { AppHeader } from '@components/common/Header/AppHeader'
import { AppContainer } from '@components/common/Container/AppContainer'
import { AppTrainingPlan } from '@components/exercises/AppTrainingPlan'
import { AppExercisesInitialText } from '@components/exercises/AppExercisesInitialText'
import { AppProgressExercises } from '@components/exercises/AppProgressExercises'
import { AppLibrary } from '@components/exercises/AppLibrary'

export default function ExercisesScreen() {
  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default">
        <AppHeader />

        <AppContainer style={{ justifyContent: 'start' }}>
          <AppExercisesInitialText />
          <AppTrainingPlan />
          <AppProgressExercises />
          <AppLibrary />
        </AppContainer>
      </NextUIProvider>
    </ThemeProvider>
  )
}
