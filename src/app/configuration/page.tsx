'use client'

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
import { useContext } from 'react'
import { LoginContext, LoginProvider } from '@context/LoginProvider'
import { UserEntityTypeEnum } from '@core/models/UserEntity'

function Configuration() {
  const { auth } = useContext(LoginContext)
  return (
    <>
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
