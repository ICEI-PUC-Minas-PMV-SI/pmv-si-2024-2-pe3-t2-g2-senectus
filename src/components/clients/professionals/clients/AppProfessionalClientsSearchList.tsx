import { AppSearchAndFilter } from '@components/common/Inputs/SearchAndFilter/AppSearchAndFilter'
import { ClientEntity } from '@core/models/ClientEntity'
import { useEffect, useMemo, useState } from 'react'
import { ProfessionalSearchListStyle } from '../ProfessionalSearchListStyle'
import { format } from 'date-fns'
import { AppPagination } from '@components/common/Pagination/AppPagination'
import {
  AppThreeColumnTable,
  ThreeColumnTableRowsType
} from '@components/common/Tables/AppThreeColumnTable'
import { GetUserInfoService } from '@core/services/users/GetUserInfoService'
import { ProfessionalEntity } from '@core/models/ProfessionalEntity'
import { GetUserByIdService } from '@core/services/users/GetUserByIdService'
import { UserEntityTypeEnum } from '@core/models/UserEntity'
import { SearchOnClientListService } from '@core/services/users/SearchOnClientListService'

export type ClientFiltersType =
  | 'Conclusão (crescente)'
  | 'Conclusão (decrescente)'
  | ''

interface ProfessionalClientsSearchListProps {
  preRenderedClientList?: ClientEntity[]
  onClick?: (client: ClientEntity) => void
}

export function AppProfessionalClientsSearchList(
  props: ProfessionalClientsSearchListProps
) {
  const formattedClients = useMemo(() => {
    if (props.preRenderedClientList)
      return SearchOnClientListService.format(props.preRenderedClientList)

    const user = GetUserInfoService.exec<ProfessionalEntity>()
    if (!user) throw new Error('Sua conta não foi encontrada')

    const clients: ClientEntity[] = []
    for (let i = 0; i < user.clientIdList.length; i++) {
      const clientId = user.clientIdList[i]
      const client = GetUserByIdService.exec(
        clientId,
        UserEntityTypeEnum.CLIENT
      ) as ClientEntity
      clients.push(client)
    }

    return SearchOnClientListService.format(clients)
  }, [])

  const [search, setSearch] = useState(formattedClients)
  const [query, setQuery] = useState({
    filter: '',
    key: ''
  })

  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(Math.ceil(search.length / 7))

  const handleSearch = (filter: string, key: string) => {
    const parsedFilter = filter as unknown as ClientFiltersType
    setSearch(
      SearchOnClientListService.exec(formattedClients, key, parsedFilter)
    )
  }

  useEffect(() => {
    setPage(0)
    setTotal(Math.ceil(search.length / 7))
  }, [search])

  return (
    <ProfessionalSearchListStyle>
      <div id="input-wrapper">
        <AppSearchAndFilter
          onFilterClick={(filter) => {
            setQuery((prev) => ({ ...prev, filter }))
            handleSearch(filter, query.key)
          }}
          options={['Conclusão (crescente)', 'Conclusão (decrescente)']}
          placeholder="Insira o nome do seu cliente."
          onChange={(key) => {
            setQuery((prev) => ({ ...prev, key }))
            handleSearch(query.filter, key)
          }}
        />
      </div>

      <AppThreeColumnTable
        header={{
          firstCol: 'Cliente',
          secondCol: 'Consultas',
          thirdCol: 'Última consulta'
        }}
        rows={(() => {
          const slice = search.slice(page * 7, (page + 1) * 7)
          const rows = slice.map((formattedClient) => {
            const client = formattedClient.client
            const lastAppointment = formattedClient.lastAppointment
            const totalAppointments = formattedClient.totalAppointments

            let onClick: undefined | (() => void)
            if (props.onClick)
              onClick = () => {
                return props.onClick && props.onClick(client)
              }

            return {
              firstCol:
                client.name.length > 40
                  ? client.name.substring(0, 40) + '...'
                  : client.name,
              secondCol: `${totalAppointments}`,
              thirdCol: `${format(
                lastAppointment!,
                'dd/MM/yyyy'
              )} às ${format(lastAppointment!, 'HH:mm')}`,
              onClick
            }
          }) as ThreeColumnTableRowsType

          if (slice.length < 7) {
            let emptyRows: ThreeColumnTableRowsType = Array.from({
              length: 7 - slice.length
            })
            emptyRows = emptyRows.map(() => ({
              firstCol: '-',
              secondCol: '-',
              thirdCol: '-'
            }))
            rows.push(...emptyRows)
          }

          return rows
        })()}
      />
      {total > 1 && search.length > 7 && (
        <AppPagination
          className="pagination"
          total={total}
          page={page + 1}
          onChange={(page) => {
            setPage(page - 1)
          }}
        />
      )}
    </ProfessionalSearchListStyle>
  )
}
