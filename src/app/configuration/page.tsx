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
import { Divider } from '@nextui-org/divider'

const user = {
  isProfessional: true
}

export default function ConfigurationScreen() {
  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default">
        <AppHeader />

        <AppContainer>
          <AppConfigurationInitialText></AppConfigurationInitialText>
          <AppConfigurationForm></AppConfigurationForm>
          {user.isProfessional && (
            <>
              <Divider className="my-6"></Divider>
              <AppConfigurationFormProfessional></AppConfigurationFormProfessional>
            </>
          )}
          <Divider className="my-6"></Divider>
          <AppDangerZone></AppDangerZone>
        </AppContainer>
      </NextUIProvider>
    </ThemeProvider>
  )
}
