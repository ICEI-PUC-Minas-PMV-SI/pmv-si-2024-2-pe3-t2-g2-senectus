'use client'

import { AppContainer } from "@components/common/Container/AppContainer";
import { AppHeader } from "@components/common/Header/AppHeader";
import { AppSearchAndFilter } from "@components/common/Inputs/SearchAndFilter/AppSearchAndFilter";
import { AppPagination } from "@components/common/Pagination/AppPagination";
import { NextUIProvider } from "@nextui-org/react";
import { theme } from "@themes/theme";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import ProfessionalCard from "./professional_card/ProfessionalCard";
import { AppSearchNotFound } from "@components/common/SearchPlaceholders/AppSearchNotFound";
import { AppointmentSolicitationPaginationStyle, ProfessionalsListStyle } from "./AppointmentsSolicitationStyles";

export default function ExercisesScreen() {
  const [searchValue, setSearchValue] = useState('')
  const [filterValue, setFilter] = useState("Todas")
  const [professionals, setProfessionals] = useState<ProfessionalEntity[] | null>(null);
  const [filteredProfessionals, setFilteredProfessionals] = useState<ProfessionalEntity[] | null>(professionals);

  const [page, setPage] = useState(0);
  const totalPages = filteredProfessionals ? Math.ceil(filteredProfessionals.length / 8) : 0;

  const [filterOptions, setFilterOptions] = useState<string[]>([]);

  function onSetSearchValue(value: string) {
    setSearchValue(value);
  }

  function onSetFilterValue(value: string) {
    setFilter(value);
  }

  useEffect(() => {
    const fetchProfessionals = async () => {
      try {
        const response = await fetch('/inMemoryDb/professionals.json');
        const data = await response.json();
        setProfessionals(data.professionals);
        setFilteredProfessionals(data.professionals);

        const cities = data.professionals.map((professional: { city: string; }) => professional.city);
        cities.push("Todas");

        setFilterOptions(cities);
      } catch (error) {
        setProfessionals(null);
      }
    };

    fetchProfessionals();
  }, []);

  useEffect(() => {
    if (professionals) {
      const filtered = professionals.filter((professional) => {
        const matchesSearch = professional.name.toLowerCase().includes(searchValue.toLowerCase());
        const matchesFilter = professional.city == filterValue || filterValue == "Todas";
        return matchesSearch && matchesFilter;
      });
      setFilteredProfessionals(filtered);
      setPage(0);
    }
  }, [searchValue, filterValue, professionals]);

  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default">
        <AppHeader />

        <AppContainer style={{ justifyContent: 'start', width: '100%' }}>
          <h1>Pesquisar profissional</h1>

          <h3>Para prosseguir, selecione o profissional que você deseja realizar a consulta:</h3>

          <AppSearchAndFilter
            placeholder="Insira o nome do profissional"
            onChange={onSetSearchValue}
            onFilterClick={onSetFilterValue}
            options={filterOptions}
          />

          {filteredProfessionals && filteredProfessionals.length > 0 ? (
            <ProfessionalsListStyle>
              {filteredProfessionals.slice(page * 8, (page + 1) * 8).map((professional) => (
                <ProfessionalCard key={professional.name} professional={professional} />
              ))}
            </ProfessionalsListStyle>
          ) : (
            <AppSearchNotFound text="Nenhum exercício encontrado." />
          )}

          <AppointmentSolicitationPaginationStyle>
            {professionals != null && professionals.length > 8 && totalPages > 1 && (
              <AppPagination
                id="appointment-solicitation-pagination"
                total={totalPages}
                page={page + 1}
                onChange={(page) => {
                  setPage(page - 1)
                }}
              />
            )}
          </AppointmentSolicitationPaginationStyle>
        </AppContainer>
      </NextUIProvider>
    </ThemeProvider>
  )
}
