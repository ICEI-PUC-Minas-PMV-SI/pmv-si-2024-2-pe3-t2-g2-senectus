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
import { LoginProvider } from '@context/LoginProvider'
import { UserEntityTypeEnum } from '@core/models/UserEntity'
import { useEffect } from 'react'
import { ProfessionalListSeed } from '@core/services/seed/professionals/ProfessionalListSeed'
import { AppInternalContainer } from '@components/common/InternalContainer/AppInternalContainer'
import { AppButtonLinkRectOutline } from '@components/common/Buttons/AppButtonLinkRectOutline'
import { FaAngleLeft } from 'react-icons/fa6'

interface SearchExerciseScreen {
  params: {
    categoryId: string
  }
}

export default function SearchExerciseScreen({ params }: SearchExerciseScreen) {
  const categoryName = ExerciseRepo.getCategoryNameById(params.categoryId)
  const exercises = ExerciseRepo.getExercisesByCategoryId(params.categoryId)

  useEffect(() => {
    ProfessionalListSeed.exec()
  }, [])

  if (!categoryName || exercises.length <= 0) return NotFound()

  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default">
        <AppHeader />

        <LoginProvider userType={UserEntityTypeEnum.CLIENT}>
          <AppContainer style={{ justifyContent: 'start' }}>
            <AppButtonLinkRectOutline
              href="/exercises"
              text="Voltar"
              icon={<FaAngleLeft />}
            />
            <AppInternalContainer>
              <AppSearchExerciseInitialText categoryName={categoryName} />
              <AppExerciseList
                categoryId={params.categoryId}
                exercises={exercises}
              />
            </AppInternalContainer>
          </AppContainer>
        </LoginProvider>
      </NextUIProvider>
    </ThemeProvider>
  )
}
