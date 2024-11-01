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
    // Ambos accepted e pendent retornam um array de 31 dias de consultas de largura aleatória
    const accepted = RandomAppointmentsSeedService.exec(
      100,
      AppointmentStateEnum.ACCEPTED
    )
    const pendent = RandomAppointmentsSeedService.exec(
      100,
      AppointmentStateEnum.PENDENT
    )

    const lastAcceptedSliceIndex = Math.floor(accepted.length / 2)
    const acceptedSlice = accepted.slice(0, lastAcceptedSliceIndex)
    const pendentSlice = pendent.slice(
      lastAcceptedSliceIndex + 1,
      pendent.length - 1
    )

    setAppointments([...acceptedSlice, ...pendentSlice])
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
