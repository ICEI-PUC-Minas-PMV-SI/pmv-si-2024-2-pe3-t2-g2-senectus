import { AppSearchAndFilter } from '@components/common/Inputs/SearchAndFilter/AppSearchAndFilter'
import { AppPagination } from '@components/common/Pagination/AppPagination'
import { useEffect, useState, useMemo } from 'react'
import { AppSearchNotFound } from '@components/common/SearchPlaceholders/AppSearchNotFound'
import {
  AppointmentSolicitationPaginationStyle,
  ProfessionalsListStyle
} from './AppointmentsSolicitationStyles'
import { AppInitialText } from '@components/common/Text/AppInitialText'
import { ProfessionalCard } from '../professionalCard/ProfessionalCard'
import { ProfessionalListSeed } from '@core/services/seed/professionals/ProfessionalListSeed'
import { SearchOnProfessionalListService } from '@core/services/users/SearchOnProfessionalListService'
import { JobConstant } from '@core/models/ProfessionalEntity'
import { GetAllActiveProfessionalsService } from '@core/services/users/GetAllActiveProfessionalsService'

export function AppAppointmentsSolicitation() {
  const professionals = useMemo(() => {
    const arr = ProfessionalListSeed.staticProfessionals
    const activeProfessionals = GetAllActiveProfessionalsService.exec()
    return [...arr, ...activeProfessionals]
  }, [])
  const [search, setSearch] = useState(professionals)
  const [query, setQuery] = useState({
    key: '',
    filter: ''
  })
  const [page, setPage] = useState(0)
  const totalPages = search ? Math.ceil(search.length / 8) : 0

  const handleSearch = (filter: string, key: string) => {
    const parsedFilter = filter as unknown as JobConstant
    setSearch(
      SearchOnProfessionalListService.exec(professionals, key, parsedFilter)
    )
  }

  useEffect(() => {
    setPage(0)
  }, [search, setPage])

  return (
    <>
      <AppInitialText
        title="Pesquisar profissional"
        text="Para prosseguir, selecione o profissional que você deseja realizar a
          consulta:"
      />

      <AppSearchAndFilter
        placeholder="Insira o nome do profissional"
        onChange={(key) => {
          setQuery((prev) => ({ ...prev, key }))
          handleSearch(query.filter, key)
        }}
        onFilterClick={(filter) => {
          setQuery((prev) => ({ ...prev, filter }))
          handleSearch(filter, query.key)
        }}
        options={[
          'Personal Trainer',
          'Nutricionista',
          'Quiroprata',
          'Fisioterapeuta'
        ]}
      />

      {search && search.length > 0 ? (
        <ProfessionalsListStyle>
          {search.slice(page * 8, (page + 1) * 8).map((professional) => (
            <ProfessionalCard
              key={professional.id}
              professional={professional}
            />
          ))}
        </ProfessionalsListStyle>
      ) : (
        <AppSearchNotFound text="Nenhum profissional encontrado." />
      )}

      <AppointmentSolicitationPaginationStyle>
        {search.length > 8 && totalPages > 1 && (
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
    </>
  )
}
