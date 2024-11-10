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
import { AppProfessionalAppointmentsView } from '@components/clients/professionals/appointments/AppProfessionalAppointmentsView'
import { LoginProvider } from '@context/LoginProvider'
import { UserEntityTypeEnum } from '@core/models/UserEntity'

export default function AppointmentsScreen() {
  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default">
        <AppHeader isProfessional />

        <AppContainer style={{ justifyContent: 'start' }}>
          <AppButtonLinkRectOutline
            href="/clients"
            text="Voltar"
            icon={<FaAngleLeft />}
          />

          <LoginProvider userType={UserEntityTypeEnum.PROFESSIONAL}>
            <AppInternalContainer>
              <AppInitialText
                title="Consultas"
                text="Pesquise as suas consultas mercadas e suas solicitações por aqui:"
              />

              <AppProfessionalAppointmentsView />
            </AppInternalContainer>
          </LoginProvider>
        </AppContainer>
      </NextUIProvider>
    </ThemeProvider>
  )
}
