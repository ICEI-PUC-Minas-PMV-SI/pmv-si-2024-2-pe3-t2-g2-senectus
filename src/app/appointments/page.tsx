'use client'

import { AppContainer } from '@components/common/Container/AppContainer'
import { AppDashboardHeader } from '@components/common/DashboardHeader/AppDashboardHeader'
import { AppInitialText } from '@components/common/Text/AppInitialText'
import { NextUIProvider } from '@nextui-org/react'
import { FaSquarePlus } from 'react-icons/fa6'
import { ThemeProvider } from 'styled-components'
import { theme } from '@themes/theme'
import { AppAppointmentsRoutineCalendar } from '@components/appointments/routine/AppAppointmentsRoutineCalendar'
import { AppHeader } from '@components/common/Header/AppHeader'
import { LoginProvider } from '@context/LoginProvider'
import { UserEntityTypeEnum } from '@core/models/UserEntity'
import { useEffect } from 'react'
import { ProfessionalListSeed } from '@core/services/seed/professionals/ProfessionalListSeed'

export default function AppointmentsScreen() {
  useEffect(() => {
    ProfessionalListSeed.exec()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default">
        <AppHeader />

        <LoginProvider userType={UserEntityTypeEnum.CLIENT}>
          <AppContainer style={{ justifyContent: 'start' }}>
            <AppDashboardHeader
              options={[
                {
                  name: 'Nova consulta',
                  description: 'Solicite uma nova consulta',
                  href: '/appointments/new',
                  icon: <FaSquarePlus />
                }
              ]}
            />

            <AppInitialText
              title="Consultas"
              text="Confira as suas consultas pelo nosso calendário:"
            />

            <AppAppointmentsRoutineCalendar />
          </AppContainer>
        </LoginProvider>
      </NextUIProvider>
    </ThemeProvider>
  )
}
