import { AppSearchAndFilter } from '@components/common/Inputs/SearchAndFilter/AppSearchAndFilter'
import { ClientEntity } from '@core/models/ClientEntity'
import { RandomClientsSeedService } from '@core/services/seed/clients/RandomClientsSeedService'
import { useEffect, useState } from 'react'
import { ProfessionalSearchListStyle } from '../ProfessionalSearchListStyle'
import { format } from 'date-fns'
import { AppPagination } from '@components/common/Pagination/AppPagination'
import { AppThreeColumnTable } from '@components/common/Tables/AppThreeColumnTable'

interface ProfessionalClientsSearchListProps {
  onClick?: (client: ClientEntity) => void
}

export function AppProfessionalClientsSearchList(
  props: ProfessionalClientsSearchListProps
) {
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
          secondCol: 'Consultas',
          thirdCol: 'Última consulta'
        }}
        rows={clients.slice(page * 7, (page + 1) * 7).map((client) => {
          let onClick: undefined | (() => void)
          if (props.onClick)
            onClick = () => {
              return props.onClick && props.onClick(client)
            }
          const lastAppointment = new Date(client.lastAppointmentInMilli)

          return {
            firstCol:
              client.name.length > 40
                ? client.name.substring(0, 40) + '...'
                : client.name,
            secondCol: `${client.totalAppointments}`,
            thirdCol: `${format(
              lastAppointment,
              'dd/MM/yyyy'
            )} às ${format(lastAppointment, 'HH:mm')}`,
            onClick
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
