'use client'

import { AppProfessionalPlanManager } from '@components/clients/professionals/planBuilder/AppProfessionalPlanManager'
import { AppContainer } from '@components/common/Container/AppContainer'
import { AppHeader } from '@components/common/Header/AppHeader'
import { NotificationContainer } from '@components/common/Notification/NotificationContainer'
import { NextUIProvider } from '@nextui-org/react'
import { theme } from '@themes/theme'
import { ThemeProvider } from 'styled-components'
import { LoginProvider } from '@context/LoginProvider'
import { UserEntityTypeEnum } from '@core/models/UserEntity'

export default function PlanBuilderScreen() {
  return (
    <ThemeProvider theme={theme}>
      <NotificationContainer />
      <NextUIProvider className="default" locale="pt-BR">
        <AppHeader isProfessional />

        <LoginProvider userType={UserEntityTypeEnum.PROFESSIONAL}>
          <AppContainer style={{ justifyContent: 'start' }}>
            <AppProfessionalPlanManager />
          </AppContainer>
        </LoginProvider>
      </NextUIProvider>
    </ThemeProvider>
  )
}
