'use client'

import { ThemeProvider } from 'styled-components'
import { theme } from '../../themes/theme'
import { NextUIProvider } from '@nextui-org/react'
import { AppHeader } from '@components/common/Header/AppHeader'
import { AppContainer } from '@components/common/Container/AppContainer'
import { AppDashboardHeader } from '@components/common/DashboardHeader/AppDashboardHeader'
import { FaMagnifyingGlass, FaSquarePlus } from 'react-icons/fa6'
import { AppProfessionalAppointmentsInitialText } from '@components/clients/professionals/home/AppProfessionalAppointmentsInitialText'
import { AppProfessionalSearchList } from '@components/clients/professionals/home/AppProfessionalSearchList'

export default function ClientsScreen() {
  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default">
        <AppHeader />

        <AppContainer style={{ justifyContent: 'start' }}>
          <AppDashboardHeader
            options={[
              {
                name: 'Novo plano',
                description: 'Crie um plano de treino para seu cliente',
                href: '/clients/plan/new',
                icon: <FaSquarePlus />
              },
              {
                name: 'Consultas',
                description: 'Gerencie suas consultas',
                href: '/clients/appointments',
                icon: <FaMagnifyingGlass />
              },
              {
                name: 'Clientes',
                description: 'Gerencie seus clientes',
                href: '/clients/view',
                icon: <FaMagnifyingGlass />
              }
            ]}
          />
          <AppProfessionalAppointmentsInitialText />

          <AppProfessionalSearchList />
        </AppContainer>
      </NextUIProvider>
    </ThemeProvider>
  )
}
