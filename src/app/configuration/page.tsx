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

const user = {
  isProfessional: true
}

export default function ConfigurationScreen() {
  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default">
        <AppHeader />
        <AppContainer style={{ justifyContent: 'start' }}>
          <AppConfigurationInitialText></AppConfigurationInitialText>
          <AppConfigurationForm></AppConfigurationForm>
          {user.isProfessional && (
            <>
              <AppDivider></AppDivider>
              <AppConfigurationFormProfessional></AppConfigurationFormProfessional>
            </>
          )}
          <AppDivider></AppDivider>
          <AppDangerZone></AppDangerZone>
        </AppContainer>
      </NextUIProvider>
    </ThemeProvider>
  )
}
