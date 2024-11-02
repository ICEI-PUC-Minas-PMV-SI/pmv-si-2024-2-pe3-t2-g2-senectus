'use client'

import { AppAppointmentsForm } from '@components/appointments/form/AppAppointmentsForm'
import { AppButtonLinkRectOutline } from '@components/common/Buttons/AppButtonLinkRectOutline'
import { AppContainer } from '@components/common/Container/AppContainer'
import { AppHeader } from '@components/common/Header/AppHeader'
import { AppInternalContainer } from '@components/common/InternalContainer/AppInternalContainer'
import { AppInitialText } from '@components/common/Text/AppInitialText'
import { NextUIProvider } from '@nextui-org/react'
import { theme } from '@themes/theme'
import { FaAngleLeft } from 'react-icons/fa6'
import { ThemeProvider } from 'styled-components'

export default function AppointmentFormScreen() {
  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default" locale="pt-BR">
        <AppHeader />

        <AppContainer style={{ justifyContent: 'start' }}>
          <AppButtonLinkRectOutline
            href="/appointments/new"
            text="Voltar"
            icon={<FaAngleLeft />}
          />

          <AppInternalContainer>
            <AppInitialText
              title="Preencher formulário"
              text="Preencha o formulário para que o profissional saiba os seus objetivos com a consulta"
            />

            <AppAppointmentsForm />
          </AppInternalContainer>
        </AppContainer>
      </NextUIProvider>
    </ThemeProvider>
  )
}
