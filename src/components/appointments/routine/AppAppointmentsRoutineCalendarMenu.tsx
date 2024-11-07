import { AppointmentsEntity } from '@core/models/AppointmentsEntity'
import { CollectionEventsOnDay } from '@core/models/CollectionEventsOnDay'
import { useState, useRef, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import { format } from 'date-fns'
import { ptBR as locale } from 'date-fns/locale'
import { AppButtonActionRectOutline } from '@components/common/Buttons/AppButtonActionRectOutline'
import { AppPagination } from '@components/common/Pagination/AppPagination'
import { AppointmentsRoutineCalendarMenuStyle } from './AppointmentsRoutineCalendarMenuStyle'
import { AppAppointmentsRoutineModal } from '../modals/AppAppointmentsRoutineModal'
import { useDisclosure } from '@nextui-org/modal'

interface AppAppointmentsRoutineCalendarMenuProps {
  appointments: CollectionEventsOnDay<AppointmentsEntity>
}

export function AppAppointmentsRoutineCalendarMenu({
  appointments
}: AppAppointmentsRoutineCalendarMenuProps) {
  const modalController = useDisclosure()
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(Math.ceil(appointments.events.length / 5))
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setPage(0)
    setTotal(Math.ceil(appointments.events.length / 5))
  }, [appointments])

  return (
    <AppointmentsRoutineCalendarMenuStyle ref={listRef}>
      <h2>Consultas</h2>
      <div id="list-container">
        <AppAppointmentsRoutineModal
          onCancel={() => {}}
          onDelete={() => {}}
          controller={modalController}
        >
          <ul id="appointments-list">
            {appointments.events.slice(page * 5, (page + 1) * 5).map((item) => {
              const date = new Date(item.dateInMilli)
              return (
                <li key={uuid()} className="li-item">
                  <p>
                    <b>Nome</b>: {item.client}
                  </p>
                  <p>
                    <b>Data</b>: {format(date, 'dd')} de{' '}
                    {format(date, 'MMMM', { locale })} de {format(date, 'yyyy')}{' '}
                    às {format(date, 'HH:mm')}
                  </p>
                  <p>
                    <b>Descrição</b>: {item.description}
                  </p>
                  <p>
                    <b>Tipo de serviço</b>: {item.serviceType}
                  </p>
                  <p>
                    <b>Situação</b>: {item.state.toLowerCase()}
                  </p>
                  <div className="appointment-item-actions">
                    <AppButtonActionRectOutline
                      text="Cancelar"
                      onClick={modalController.onOpen}
                    />
                  </div>
                </li>
              )
            })}
          </ul>
        </AppAppointmentsRoutineModal>

        {total > 1 && appointments.events.length > 5 && (
          <AppPagination
            className="pagination"
            total={total}
            page={page + 1}
            onChange={(page) => {
              setPage(page - 1)
              listRef?.current?.scrollIntoView({
                behavior: 'smooth'
              })
            }}
          />
        )}
      </div>
    </AppointmentsRoutineCalendarMenuStyle>
  )
}
