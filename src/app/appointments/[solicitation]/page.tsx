'use client'

import { AppContainer } from "@components/common/Container/AppContainer";
import { AppHeader } from "@components/common/Header/AppHeader";
import { AppSearchAndFilter } from "@components/common/Inputs/SearchAndFilter/AppSearchAndFilter";
import { AppPagination } from "@components/common/Pagination/AppPagination";
import { NextUIProvider } from "@nextui-org/react";
import { theme } from "@themes/theme";
import { set } from "date-fns/fp";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import ProfessionalCard from "./professional_card/ProfessionalCard";

export default function ExercisesScreen() {
  const [searchValue, setSearchValue] = useState('')
  const [filterValue, setFilter] = useState('')

  const [professionals, setProfessionals] = useState<ProfessionalEntity[] | null>(null);

  const filterOptions = [
    "Área de atuação",
    "Cidade"
  ]

  function onSetSearchValue(value: string) {
    setSearchValue(value)
  }

  function onSetFilterValue(value: string) {
    setFilter(value)
  }

  useEffect(() => {
    const fetchProfessionals = async () => {
      try {
        const response = await fetch('/inMemoryDb/professionals.json')
        const data = await response.json()

        setProfessionals(data.professionals)
      } catch (error) {
        setProfessionals(null)
      }
    }

    fetchProfessionals()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default">
        <AppHeader />

        <AppContainer style={{ justifyContent: 'center' }}>
          <h1>Pesquisar profissional</h1>

          <h3>Para prosseguir, selecione o profissional que você deseja realizar a consulta:</h3>

          <AppSearchAndFilter
            placeholder="Insira o nome do profissional"
            onChange={onSetSearchValue}
            onFilterClick={onSetFilterValue}
            options={filterOptions}
          />

          {professionals != null ? (
            professionals.map((professional) => (
              <ProfessionalCard professional={professional} />
            ))
          ) : <h1 style={{textAlign: 'center'}}>Não foi encontrado nenhum profissional disponível</h1>}

        </AppContainer>
      </NextUIProvider>
    </ThemeProvider>
  )
}