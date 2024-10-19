'use client'

import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { NextUIProvider } from '@nextui-org/react'
import { AppHeader } from '@components/common/Header/AppHeader'
import { AppContainer } from '@components/common/Container/AppContainer'
import { AppSearchExerciseInitialText } from '@components/searchExercises/AppSearchExerciseInitialText'
import { AppExerciseList } from '@components/searchExercises/AppExerciseList'
import { ExerciseRepo } from '@core/repositories/ExerciseRepo'
import NotFound from '../../not-found'

interface SearchExerciseScreen {
  params: {
    categoryId: string
  }
}

export default function SearchExerciseScreen({ params }: SearchExerciseScreen) {
  const categoryName = ExerciseRepo.getCategoryNameById(params.categoryId)
  const exercises = ExerciseRepo.getExercisesByCategoryId(params.categoryId)

  if (!categoryName || exercises.length <= 0) return NotFound()

  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default">
        <AppHeader />

        <AppContainer style={{ justifyContent: 'start' }}>
          <AppSearchExerciseInitialText categoryName={categoryName} />
          <AppExerciseList exercises={exercises} />
        </AppContainer>
      </NextUIProvider>
    </ThemeProvider>
  )
}
