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
import { LoginProvider } from '@context/LoginProvider'
import { UserEntityTypeEnum } from '@core/models/UserEntity'
import { useEffect, useMemo } from 'react'
import { GetTrainingPlanAsClientService } from '@core/services/plan/crud/GetTrainingPlanAsClientService'
import {
  CalendarCreationStrategy,
  CreateCalendarCollectionByPlanService
} from '@core/services/plan/builder/CreateCalendarCollectionByPlanService'
import { ProfessionalListSeed } from '@core/services/seed/professionals/ProfessionalListSeed'

function ExerciseContent() {
  const plan = useMemo(() => {
    const plan = GetTrainingPlanAsClientService.exec()
    return plan
  }, [])

  const exercises = useMemo(() => {
    return plan
      ? CreateCalendarCollectionByPlanService.exec(
          plan,
          CalendarCreationStrategy.EXERCISE_LIST
        )
      : []
  }, [plan])

  return (
    <AppContainer style={{ justifyContent: 'start' }}>
      <AppExercisesInitialText />
      {plan && (
        <>
          <AppTrainingPlan exercises={exercises} />
          <AppProgressExercises plan={plan} />
        </>
      )}
      <AppLibrary
        style={!plan ? { width: '80vw', maxWidth: '42rem' } : undefined}
      />
    </AppContainer>
  )
}

export default function ExercisesScreen() {
  useEffect(() => {
    ProfessionalListSeed.exec()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default">
        <AppHeader />

        <LoginProvider userType={UserEntityTypeEnum.CLIENT}>
          <ExerciseContent />
        </LoginProvider>
      </NextUIProvider>
    </ThemeProvider>
  )
}
