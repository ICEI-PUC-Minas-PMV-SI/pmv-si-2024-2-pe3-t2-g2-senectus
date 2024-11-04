'use client'

import { AppContainer } from '@components/common/Container/AppContainer'
import { AppHeader } from '@components/common/Header/AppHeader'
import { NextUIProvider } from '@nextui-org/react'
import { theme } from '@themes/theme'
import { ThemeProvider } from 'styled-components'

import { AppAppointmentsSolicitation } from '@components/appointments/search/home/AppAppointmentsSolicitation'
import { LoginProvider } from '@context/LoginProvider'
import { UserEntityTypeEnum } from '@core/models/UserEntity'
import { useEffect } from 'react'
import { ProfessionalListSeed } from '@core/services/seed/professionals/ProfessionalListSeed'
import { ClientSeed } from '@core/services/seed/userAccount/ClientSeed'

export default function AppointmentsSolicitationScreen() {
  useEffect(() => {
    ProfessionalListSeed.exec()
    ClientSeed.exec()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default">
        <AppHeader />

        <LoginProvider userType={UserEntityTypeEnum.CLIENT}>
          <AppContainer style={{ justifyContent: 'start' }}>
            <AppAppointmentsSolicitation />
          </AppContainer>
        </LoginProvider>
      </NextUIProvider>
    </ThemeProvider>
  )
}
