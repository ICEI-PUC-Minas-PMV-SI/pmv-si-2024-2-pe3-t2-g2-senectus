'use client'

import { ThemeProvider } from 'styled-components'
import { theme } from '@themes/theme'
import { NextUIProvider } from '@nextui-org/react'
import { AppHeader } from '@components/common/Header/AppHeader'
import { AppContainer } from '@components/common/Container/AppContainer'
import { ExerciseRepo } from '@core/repositories/ExerciseRepo'
import NotFound from '../../../not-found'
import { AppExercisePlayer } from '@components/exercise/AppExercisePlayer'
import { LoginProvider } from '@context/LoginProvider'
import { useEffect, useMemo, useState } from 'react'
import { GetTrainingPlanAsClientService } from '@core/services/plan/crud/GetTrainingPlanAsClientService'
import { ProfessionalListSeed } from '@core/services/seed/professionals/ProfessionalListSeed'

interface SearchExerciseScreen {
  params: {
    categoryId: string
    exerciseId: string
  }
}

export default function SearchExerciseScreen({ params }: SearchExerciseScreen) {
  const exercise = useMemo(() => {
    return ExerciseRepo.getExerciseByCategoryIdAndExerciseId(
      params.categoryId,
      params.exerciseId
    )
  }, [params.categoryId, params.exerciseId])

  const [persistentExercise, setPersistentExercise] = useState(exercise)
  const [notFoundPersistentExercise, setNotFoundPersistentExercise] =
    useState(false)

  useEffect(() => {
    ProfessionalListSeed.exec()
    if (params.exerciseId.length !== 36)
      return setNotFoundPersistentExercise(true)

    const plan = GetTrainingPlanAsClientService.exec()
    if (!plan) return setNotFoundPersistentExercise(true)

    for (let i = 0; i < plan.exerciseList.length; i++) {
      const item = plan.exerciseList[i]
      if (item.id === params.exerciseId) return setPersistentExercise(item)
    }

    return setNotFoundPersistentExercise(true)
  }, [params.exerciseId])

  if (notFoundPersistentExercise && !exercise) return NotFound()

  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default">
        <AppHeader />

        <LoginProvider>
          <AppContainer style={{ justifyContent: 'start' }}>
            <h1 className="prettify-title">
              {persistentExercise?.name ?? exercise?.name}
            </h1>
            <AppExercisePlayer exercise={persistentExercise! ?? exercise!} />
          </AppContainer>
        </LoginProvider>
      </NextUIProvider>
    </ThemeProvider>
  )
}
