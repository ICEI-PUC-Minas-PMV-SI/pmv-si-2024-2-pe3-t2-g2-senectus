import { AppSearchAndFilter } from '@components/common/Inputs/SearchAndFilter/AppSearchAndFilter'
import { ClientEntity } from '@core/models/ClientEntity'
import { RandomClientsSeedService } from '@core/services/RandomClientsSeedService'
import { useEffect, useState } from 'react'
import { ProfessionalSearchListStyle } from './ProfessionalSearchListStyle'
import { format } from 'date-fns'
import { AppPagination } from '@components/common/Pagination/AppPagination'
import { v4 as uuid } from 'uuid'
import Link from 'next/link'

export function AppProfessionalSearchList() {
  const [clients, setClients] = useState<ClientEntity[]>([])
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(Math.ceil(clients.length / 7))

  useEffect(() => {
    setClients(RandomClientsSeedService.exec(40))
  }, [setClients])

  useEffect(() => {
    setPage(0)
    setTotal(Math.ceil(clients.length / 7))
  }, [clients])

  return (
    <ProfessionalSearchListStyle>
      <div id="input-wrapper">
        <AppSearchAndFilter
          onFilterClick={() => {}}
          options={['Conclusão', 'Ordem alfabética']}
          placeholder="Insira o nome do seu cliente."
          onChange={() => {}}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th className="table-start">Cliente</th>
            <th className="table-mid">Progresso</th>
            <th className="table-end">Criado em</th>
          </tr>
        </thead>
        <tbody>
          {clients.slice(page * 7, (page + 1) * 7).map((client) => (
            <td key={uuid()}>
              <Link
                href={`/clients/plan/edit/${client.id}`}
                className="data-row"
                role="button"
              >
                <p className="table-start">
                  {client.name.length > 40
                    ? client.name.substring(0, 40) + '...'
                    : client.name}
                </p>
                <p className="table-mid">{client.conclusionRate}% concluído</p>
                <p className="table-end">
                  {format(client.createdAt, 'dd/MM/yyyy')} às{' '}
                  {format(client.createdAt, 'HH:mm')}
                </p>
              </Link>
            </td>
          ))}
        </tbody>
      </table>
      {total > 1 && clients.length > 7 && (
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
