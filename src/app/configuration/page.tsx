'use client'

import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../themes/theme'
import { NextUIProvider } from '@nextui-org/react'
import { AppHeader } from '@components/common/Header/AppHeader'
import { AppContainer } from '@components/common/Container/AppContainer'
import { AppConfigurationForm } from '@components/configuration/AppConfigurationForm'
import { AppConfigurationInitialText } from '@components/configuration/AppConfigurationInitialText'
import { AppDangerZone } from '@components/configuration/AppDangerZone'
import { AppConfigurationFormProfessional } from '@components/configuration/AppConfigurationFormProfessional'
import { AppDivider } from '@components/common/Divider/AppDivider'
import { useContext, useEffect, useCallback } from 'react'
import { LoginContext, LoginProvider } from '@context/LoginProvider'
import { UserEntityTypeEnum } from '@core/models/UserEntity'
import { NotificationContainer } from '@components/common/Notification/NotificationContainer'
import { GetUserInfoService } from '@core/services/users/GetUserInfoService'
import { ProfessionalEntity } from '@core/models/ProfessionalEntity'
import {
  NotificationService,
  NotificationTypeEnum
} from '@core/services/notifications/NotificationService'

function Configuration() {
  const { auth } = useContext(LoginContext)
  const dispatchNotification = useCallback(() => {
    const user = GetUserInfoService.exec()
    if (
      !user ||
      (user instanceof ProfessionalEntity &&
        (!Boolean(user.state) ||
          !Boolean(user.city) ||
          !Boolean(user.address) ||
          !Boolean(user.job) ||
          !Boolean(user.startedAtInMilli) ||
          user.services.length <= 0))
    )
      NotificationService.dispatch(
        NotificationTypeEnum.INFO,
        'Preencha todas as suas informações.'
      )
  }, [])

  useEffect(dispatchNotification, [dispatchNotification])

  return (
    <>
      <NotificationContainer />
      <AppConfigurationInitialText></AppConfigurationInitialText>
      <AppConfigurationForm></AppConfigurationForm>
      {auth.token.type === UserEntityTypeEnum.PROFESSIONAL && (
        <>
          <AppDivider></AppDivider>
          <AppConfigurationFormProfessional></AppConfigurationFormProfessional>
        </>
      )}
      <AppDivider></AppDivider>
      <AppDangerZone></AppDangerZone>
    </>
  )
}

export default function ConfigurationScreen() {
  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default" locale="pt-BR">
        <AppHeader />
        <LoginProvider>
          <AppContainer style={{ justifyContent: 'start' }}>
            <Configuration />
          </AppContainer>
        </LoginProvider>
      </NextUIProvider>
    </ThemeProvider>
  )
}
