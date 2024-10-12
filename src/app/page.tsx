'use client'

import { ThemeProvider } from 'styled-components'
import theme from '../themes/theme'
import { NextUIProvider } from '@nextui-org/react'
import { AppHeader } from '@components/common/Header/AppHeader'
import { AppInitialSectionHome } from '@components/home/AppInitialSectionHome'
import { AppContainer } from '@components/common/Container/AppContainer'
import { AppAboutUs } from '@components/home/AppAboutUs'
import { AppBenefits } from '@components/home/AppBenefits'
import { AppFooter } from '@components/common/Footer/AppFooter'

export default function HomeScreen() {
  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default">
        <AppHeader />

        <AppContainer>
          <AppInitialSectionHome />
          <AppAboutUs />
          <AppBenefits />
        </AppContainer>

        <AppFooter />
      </NextUIProvider>
    </ThemeProvider>
  )
}
