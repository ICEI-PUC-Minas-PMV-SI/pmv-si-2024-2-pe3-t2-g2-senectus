'use client'

import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { NextUIProvider } from '@nextui-org/react'
import { AppHeader } from '@components/common/Header/AppHeader'
import { AppContainer } from '@components/common/Container/AppContainer'
import { AppInitialText } from '@components/common/Text/AppInitialText'
import { AppButtonLinkRectOutline } from '@components/common/Buttons/AppButtonLinkRectOutline'
import { AppProfessionalClientsSearchList } from '@components/clients/professionals/clients/AppProfessionalClientsSearchList'
import { AppInternalContainer } from '@components/common/InternalContainer/AppInternalContainer'
import { FaAngleLeft } from 'react-icons/fa6'

export default function ClientsScreen() {
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
              title="Seus clientes"
              text="Insira o nome de clientes que você já atendeu em suas consultas por aqui:"
            />

            <AppProfessionalClientsSearchList />
          </AppInternalContainer>
        </AppContainer>
      </NextUIProvider>
    </ThemeProvider>
  )
}