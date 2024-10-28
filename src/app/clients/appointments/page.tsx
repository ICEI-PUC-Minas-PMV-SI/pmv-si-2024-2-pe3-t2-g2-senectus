'use client'

import { ThemeProvider } from 'styled-components'
import { theme } from '@themes/theme'
import { NextUIProvider } from '@nextui-org/react'
import { AppHeader } from '@components/common/Header/AppHeader'
import { AppContainer } from '@components/common/Container/AppContainer'
import { AppInitialText } from '@components/common/Text/AppInitialText'
import { AppButtonLinkRectOutline } from '@components/common/Buttons/AppButtonLinkRectOutline'
import { AppInternalContainer } from '@components/common/InternalContainer/AppInternalContainer'
import { FaAngleLeft } from 'react-icons/fa6'
import {
  AppointmentsEntity,
  AppointmentStateEnum
} from '@core/models/AppointmentsEntity'
import { CollectionEventsOnDay } from '@core/models/CollectionEventsOnDay'
import { useEffect, useState } from 'react'
import { RandomAppointmentsSeedService } from '@core/services/seed/clients/RandomAppointmentsSeedService'
import { AppProfessionalAppointmentsView } from '@components/clients/professionals/appointments/AppProfessionalAppointmentsView'

interface AppointmentsProps {
  accepted: CollectionEventsOnDay<AppointmentsEntity>[]
  pendent: CollectionEventsOnDay<AppointmentsEntity>[]
}

export default function AppointmentsScreen() {
  const [appointments, setAppointments] = useState<AppointmentsProps>({
    accepted: [],
    pendent: []
  })

  useEffect(() => {
    const accepted = RandomAppointmentsSeedService.exec(
      100,
      AppointmentStateEnum.PENDENT
    )
    const pendent = RandomAppointmentsSeedService.exec(
      100,
      AppointmentStateEnum.ACCEPTED
    )

    setAppointments({ accepted, pendent })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default">
        <AppHeader />

        <AppContainer style={{ justifyContent: 'start' }}>
          <AppButtonLinkRectOutline
            href="/clients"
            text="Voltar"
            icon={<FaAngleLeft />}
          />

          <AppInternalContainer>
            <AppInitialText
              title="Consultas"
              text="Pesquise as suas consultas mercadas e suas solicitações por aqui:"
            />

            <AppProfessionalAppointmentsView
              pendentAppointments={appointments.pendent}
              acceptedAppointments={appointments.accepted}
            />
          </AppInternalContainer>
        </AppContainer>
      </NextUIProvider>
    </ThemeProvider>
  )
}
