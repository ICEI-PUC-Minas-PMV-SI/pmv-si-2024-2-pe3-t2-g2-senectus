import { AppointmentsEntity } from '@core/models/AppointmentsEntity'
import { CollectionEventsOnDay } from '@core/models/CollectionEventsOnDay'
import { v4 as uuid } from 'uuid'
import { format } from 'date-fns'
import { ptBR as locale } from 'date-fns/locale'
import { AppButtonActionRect } from '@components/common/Buttons/AppButtonActionRect'
import { AppButtonActionRectOutline } from '@components/common/Buttons/AppButtonActionRectOutline'
import { useRef, useState, useEffect } from 'react'
import { AppPagination } from '@components/common/Pagination/AppPagination'
import { ProfessionalAppointmentsMenuStyle } from './ProfessionalAppointmentsMenuStyle'

interface AppProfessionalAppointmentsMenuProps {
  appointments: CollectionEventsOnDay<AppointmentsEntity>
  title: string
  positiveButtonTitle: string
  negativeButtonTitle: string
  onPositiveButtonClick: () => void
  onNegativeButtonClick: () => void
}

export function AppProfessionalAppointmentsMenu({
  appointments,
  title,
  positiveButtonTitle,
  negativeButtonTitle,
  onPositiveButtonClick,
  onNegativeButtonClick
}: AppProfessionalAppointmentsMenuProps) {
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(Math.ceil(appointments.events.length / 5))
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setPage(0)
    setTotal(Math.ceil(appointments.events.length / 5))
  }, [appointments])

  return (
    <ProfessionalAppointmentsMenuStyle ref={listRef}>
      <h2>{title}</h2>
      <div id="list-container">
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

                <div className="appointment-item-actions">
                  <AppButtonActionRect
                    text={positiveButtonTitle}
                    onClick={onPositiveButtonClick}
                  />
                  <AppButtonActionRectOutline
                    text={negativeButtonTitle}
                    onClick={onNegativeButtonClick}
                  />
                </div>
              </li>
            )
          })}
        </ul>

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
    </ProfessionalAppointmentsMenuStyle>
  )
}