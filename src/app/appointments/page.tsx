'use client'

import { AppContainer } from '@components/common/Container/AppContainer'
import { AppDashboardHeader } from '@components/common/DashboardHeader/AppDashboardHeader'
import { AppInitialText } from '@components/common/Text/AppInitialText'
import { NextUIProvider } from '@nextui-org/react'
import { FaSquarePlus } from 'react-icons/fa6'
import { ThemeProvider } from 'styled-components'
import { theme } from '@themes/theme'
import { AppAppointmentsRoutineCalendar } from '@components/appointments/routine/AppAppointmentsRoutineCalendar'
import {
  AppointmentsEntity,
  AppointmentStateEnum
} from '@core/models/AppointmentsEntity'
import { RandomAppointmentsSeedService } from '@core/services/seed/clients/RandomAppointmentsSeedService'
import { useCalendar } from '../../hooks/useCalendar'
import { useEffect } from 'react'
import { AppHeader } from '@components/common/Header/AppHeader'

export default function AppointmentsScreen() {
  const [appointments, setAppointments] = useCalendar<AppointmentsEntity>()

  useEffect(() => {
    const accepted = RandomAppointmentsSeedService.exec(
      100,
      AppointmentStateEnum.PENDENT
    )
    const pendent = RandomAppointmentsSeedService.exec(
      100,
      AppointmentStateEnum.ACCEPTED
    )

    setAppointments([...accepted, ...pendent])
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default">
        <AppHeader />

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

          <AppAppointmentsRoutineCalendar appointments={appointments} />
        </AppContainer>
      </NextUIProvider>
    </ThemeProvider>
  )
}
