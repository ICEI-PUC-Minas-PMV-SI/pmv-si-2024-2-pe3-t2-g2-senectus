'use client'

import { ThemeProvider } from 'styled-components'
import { theme } from '../../themes/theme'
import { NextUIProvider } from '@nextui-org/react'
import { AppHeader } from '@components/common/Header/AppHeader'
import { AppContainer } from '@components/common/Container/AppContainer'
import { AppDashboardHeader } from '@components/common/DashboardHeader/AppDashboardHeader'
import {
  FaMagnifyingGlass,
  FaSquarePlus,
  FaHandshakeAngle
} from 'react-icons/fa6'
import { AppProfessionalPlanSearchList } from '@components/clients/professionals/home/AppProfessionalPlanSearchList'
import { AppInitialText } from '@components/common/Text/AppInitialText'
import { ProfessionalSeed } from '@core/services/seed/userAccount/ProfessionalSeed'
import { useEffect } from 'react'
import { LoginProvider } from '../../context/LoginProvider'
import { UserEntityTypeEnum } from '@core/models/UserEntity'

export default function ClientsScreen() {
  useEffect(() => {
    ProfessionalSeed.exec()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default">
        <AppHeader isProfessional />

        <LoginProvider userType={UserEntityTypeEnum.PROFESSIONAL}>
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
                  icon: <FaHandshakeAngle />
                },
                {
                  name: 'Clientes',
                  description: 'Gerencie seus clientes',
                  href: '/clients/view',
                  icon: <FaMagnifyingGlass />
                }
              ]}
            />
            <AppInitialText
              title="Planos de treino"
              text="Pesquise pelo seus planos de treino utilizando o nome de seus clientes"
            />

            <AppProfessionalPlanSearchList />
          </AppContainer>
        </LoginProvider>
      </NextUIProvider>
    </ThemeProvider>
  )
}
