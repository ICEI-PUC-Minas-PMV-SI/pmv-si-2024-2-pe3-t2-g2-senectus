'use client'

import 'react-toastify/dist/ReactToastify.css'

import { PlanBuildStageEnum } from '@components/clients/professionals/sharedProps/PlanBuilderStage'
import { AppProfessionalPlanManager } from '@components/clients/professionals/planBuilder/AppProfessionalPlanManager'
import { ThemeProvider } from 'styled-components'
import { NotificationContainer } from '@components/common/Notification/NotificationContainer'
import { NextUIProvider } from '@nextui-org/react'
import { theme } from '@themes/theme'
import { AppHeader } from '@components/common/Header/AppHeader'
import { AppContainer } from '@components/common/Container/AppContainer'
import { LoginProvider } from '@context/LoginProvider'
import { UserEntityTypeEnum } from '@core/models/UserEntity'

interface EditPlanBuilderScreenProps {
  params: {
    planId: string
  }
}

export default function EditPlanBuilderScreen(
  props: EditPlanBuilderScreenProps
) {
  return (
    <ThemeProvider theme={theme}>
      <NotificationContainer />
      <NextUIProvider className="default" locale="pt-BR">
        <AppHeader isProfessional />

        <LoginProvider userType={UserEntityTypeEnum.PROFESSIONAL}>
          <AppContainer style={{ justifyContent: 'start' }}>
            <AppProfessionalPlanManager
              initialStage={PlanBuildStageEnum.CONFIRM}
              trainingPlanId={props.params.planId}
              skipClientSelection
            />
          </AppContainer>
        </LoginProvider>
      </NextUIProvider>
    </ThemeProvider>
  )
}