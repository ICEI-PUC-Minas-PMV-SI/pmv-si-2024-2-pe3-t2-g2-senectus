'use client'

import { AppAppointmentsForm } from '@components/appointments/form/AppAppointmentsForm'
import { AppButtonLinkRectOutline } from '@components/common/Buttons/AppButtonLinkRectOutline'
import { AppContainer } from '@components/common/Container/AppContainer'
import { AppHeader } from '@components/common/Header/AppHeader'
import { AppInternalContainer } from '@components/common/InternalContainer/AppInternalContainer'
import { AppInitialText } from '@components/common/Text/AppInitialText'
import { ProfessionalEntity } from '@core/models/ProfessionalEntity'
import { UserEntityTypeEnum } from '@core/models/UserEntity'
import { GetUserByIdService } from '@core/services/users/GetUserByIdService'
import { NextUIProvider } from '@nextui-org/react'
import { theme } from '@themes/theme'
import { useEffect, useState } from 'react'
import { FaAngleLeft } from 'react-icons/fa6'
import { ThemeProvider } from 'styled-components'
import { LoginProvider } from '@context/LoginProvider'
import NotFound from '@screens/not-found'
import { ClientSeed } from '@core/services/seed/userAccount/ClientSeed'
import { ProfessionalListSeed } from '@core/services/seed/professionals/ProfessionalListSeed'

interface AppointmentFormScreenProps {
  params: {
    professionalId: string
  }
}

export default function AppointmentFormScreen({
  params
}: AppointmentFormScreenProps) {
  const [professional, setProfessional] = useState<ProfessionalEntity>()
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    // Espera API do localstorage ficar disponíve
    ProfessionalListSeed.exec()
    ClientSeed.exec()

    const user = GetUserByIdService.exec(
      params.professionalId,
      UserEntityTypeEnum.PROFESSIONAL
    ) as ProfessionalEntity
    if (!user) return setNotFound(true)

    setProfessional(user)
  }, [])

  if (notFound) return NotFound()

  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default" locale="pt-BR">
        <AppHeader />

        <LoginProvider userType={UserEntityTypeEnum.CLIENT}>
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

              <AppAppointmentsForm professional={professional!} />
            </AppInternalContainer>
          </AppContainer>
        </LoginProvider>
      </NextUIProvider>
    </ThemeProvider>
  )
}
