'use client'

import { AppContainer } from "@components/common/Container/AppContainer";
import { AppHeader } from "@components/common/Header/AppHeader";
import { AppSearchAndFilter } from "@components/common/Inputs/SearchAndFilter/AppSearchAndFilter";
import { AppPagination } from "@components/common/Pagination/AppPagination";
import { NextUIProvider } from "@nextui-org/react";
import { theme } from "@themes/theme";
import { useEffect, useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";
import { AppSearchNotFound } from "@components/common/SearchPlaceholders/AppSearchNotFound";
import { AppointmentSolicitationPaginationStyle, ProfessionalsListStyle } from "./AppointmentsSolicitationStyles";

import professionalsData from "../../../../public/inMemoryDb/professionals.json";
import ProfessionalEntity from "../../../@core/models/ProfessionalEntity";
import ProfessionalCard from "@components/professional_card/ProfessionalCard";

export default function AppointmentsSolicitationScreen() {
  const [searchValue, setSearchValue] = useState('')
  const [filterValue, setFilter] = useState("Todas")

  const professionals = useMemo(() => professionalsData.professionals.map(professional => (
    new ProfessionalEntity({
      id: professional.id,
      role: professional.role,
      name: professional.name,
      city: professional.city,
      email: professional.email,
      phone: professional.phone,
    })
  )), []);
  
  const filteredProfessionals = useMemo(() => {
    return professionals.filter(professional => {
      const matchesSearch = professional.name.toLowerCase().includes(searchValue.toLowerCase());
      const matchesFilter = filterValue === "Todas" || professional.city === filterValue;
      
      return matchesSearch && matchesFilter;
    });
  }, [searchValue, filterValue, professionals]);

  const [page, setPage] = useState(0);
  const totalPages = filteredProfessionals ? Math.ceil(filteredProfessionals.length / 8) : 0;

  const cities = useMemo(() => ["Todas", ...Array.from(new Set(professionals.map(p => p.city)))], [professionals]);

  function onSetSearchValue(value: string) {
    setSearchValue(value);
  }

  function onSetFilterValue(value: string) {
    setFilter(value);
  }

  useEffect(() => {
    setPage(0);
  }, [searchValue, filterValue]);

  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default">
        <AppHeader />

        <AppContainer style={{ justifyContent: 'start', width: '100%' }}>
          <h1 className="prettify-title">Pesquisar profissional</h1>

          <h3>Para prosseguir, selecione o profissional que você deseja realizar a consulta:</h3>

          <AppSearchAndFilter
            placeholder="Insira o nome do profissional"
            onChange={onSetSearchValue}
            onFilterClick={onSetFilterValue}
            options={cities}
          />

          {filteredProfessionals && filteredProfessionals.length > 0 ? (
            <ProfessionalsListStyle>
              {filteredProfessionals.slice(page * 8, (page + 1) * 8).map((professional) => (
                <ProfessionalCard key={professional.id} professional={professional} />
              ))}
            </ProfessionalsListStyle>
          ) : (
            <AppSearchNotFound text="Nenhum profissional encontrado." />
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
