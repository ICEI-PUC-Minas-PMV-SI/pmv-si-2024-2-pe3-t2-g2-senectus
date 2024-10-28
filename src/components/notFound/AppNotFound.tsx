'use client'

import Image from 'next/image'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../themes/theme'
import { NextUIProvider } from '@nextui-org/react'
import { AppHeader } from '@components/common/Header/AppHeader'
import { AppButtonLinkRect } from '@components/common/Buttons/AppButtonLinkRect'
import { NotFoundStyle } from './NotFoundStyle'

export function AppNotFound() {
  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default">
        <AppHeader />

        <NotFoundStyle>
          <Image
            src="/img/not-found/main-icon.svg"
            alt="Imagem com o status http 404, simbolizando que o item que você procura não foi encontrado"
            width={300}
            height={300}
          />
          <p>Ooops! Não conseguimos encontrar o que você procura.</p>
          <AppButtonLinkRect href="/" text="Página inicial" />
        </NotFoundStyle>
      </NextUIProvider>
    </ThemeProvider>
  )
}
