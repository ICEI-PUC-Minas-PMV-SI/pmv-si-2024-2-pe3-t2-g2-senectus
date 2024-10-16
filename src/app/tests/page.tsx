'use client'

import { ThemeProvider } from 'styled-components'
import theme from '../../themes/theme'
import { NextUIProvider } from '@nextui-org/react'
import { AppSearchAndFilter } from '@components/common/Inputs/SearchAndFilter/AppSearchAndFilter'

export default function Tests() {
  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default">
        <AppSearchAndFilter
          options={['Filtro 1', 'Filtro 2']}
          onFilterClick={(value) => console.log(value)}
          onChange={(value) => console.log(value)}
          placeholder="Insire qualquer coisa"
        />
      </NextUIProvider>
    </ThemeProvider>
  )
}
