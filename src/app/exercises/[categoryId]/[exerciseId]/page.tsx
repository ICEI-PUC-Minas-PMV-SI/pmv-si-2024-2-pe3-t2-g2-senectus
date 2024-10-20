'use client'

import { ThemeProvider } from 'styled-components'
import { theme } from '@themes/theme'
import { NextUIProvider } from '@nextui-org/react'
import { AppHeader } from '@components/common/Header/AppHeader'
import { AppContainer } from '@components/common/Container/AppContainer'
import { ExerciseRepo } from '@core/repositories/ExerciseRepo'
import NotFound from '../../../not-found'
import { AppExercisePlayer } from '@components/exercise/AppExercisePlayer'

interface SearchExerciseScreen {
  params: {
    categoryId: string
    exerciseId: string
  }
}

export default function SearchExerciseScreen({ params }: SearchExerciseScreen) {
  const categoryName = ExerciseRepo.getCategoryNameById(params.categoryId)
  const exercise = ExerciseRepo.getExerciseByCategoryIdAndExerciseId(
    params.categoryId,
    params.exerciseId
  )

  if (!categoryName || !exercise) return NotFound()

  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default">
        <AppHeader />

        <AppContainer style={{ justifyContent: 'start' }}>
          <h1 className="prettify-title">{exercise.name}</h1>
          <AppExercisePlayer exercise={exercise} />
        </AppContainer>
      </NextUIProvider>
    </ThemeProvider>
  )
}
