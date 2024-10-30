'use client'

import { ThemeProvider } from 'styled-components'
import { theme } from '../../themes/theme'
import { NextUIProvider } from '@nextui-org/react'
import { FaEnvelope } from 'react-icons/fa6'
import { AppAutocompleteInput } from '@components/common/Inputs/AutocompleteInput/AppAutocompleteInput'
import { AppTextarea } from '@components/common/Inputs/Textarea/AppTextarea'

export default function Tests() {
  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default" locale="pt-BR">
        <AppAutocompleteInput
          label="Insira seu nome"
          icon={<FaEnvelope />}
          options={['Test 1', 'Test 2']}
          isInvalid
          errorMessage="Hello World"
        />
        <AppTextarea
          label="Insira o motivo"
          icon={<FaEnvelope />}
          isInvalid
          errorMessage="Hello World"
        />
      </NextUIProvider>
    </ThemeProvider>
  )
}
