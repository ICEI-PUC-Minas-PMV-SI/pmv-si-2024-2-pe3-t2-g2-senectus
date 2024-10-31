import { AppSearchAndFilter } from '@components/common/Inputs/SearchAndFilter/AppSearchAndFilter'
import { ClientEntity } from '@core/models/ClientEntity'
import { RandomClientsSeedService } from '@core/services/seed/clients/RandomClientsSeedService'
import { useEffect, useState } from 'react'
import { ProfessionalSearchListStyle } from '../ProfessionalSearchListStyle'
import { format } from 'date-fns'
import { AppPagination } from '@components/common/Pagination/AppPagination'
import { AppThreeColumnTable } from '@components/common/Tables/AppThreeColumnTable'
import { useRouter } from 'next/navigation'

export function AppProfessionalPlanSearchList() {
  const router = useRouter()
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

      <AppThreeColumnTable
        header={{
          firstCol: 'Cliente',
          secondCol: 'Progresso',
          thirdCol: 'Criado em'
        }}
        rows={clients.slice(page * 7, (page + 1) * 7).map((client) => {
          const createdAt = new Date(client.createdAtInMilli)
          return {
            firstCol:
              client.name.length > 40
                ? client.name.substring(0, 40) + '...'
                : client.name,
            secondCol: `${client.conclusionRate}% concluído`,
            thirdCol: `${format(createdAt, 'dd/MM/yyyy')} às ${format(createdAt, 'HH:mm')}`,
            onClick: () => {
              router.push(`/clients/plan/edit/${client.id}`)
            }
          }
        })}
      />
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
