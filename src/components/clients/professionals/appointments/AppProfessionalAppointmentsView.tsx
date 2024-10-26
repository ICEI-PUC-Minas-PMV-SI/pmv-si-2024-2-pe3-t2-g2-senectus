import { AppButtonActionRect } from '@components/common/Buttons/AppButtonActionRect'
import { AppResponsiveCalendar } from '@components/common/Calendar/AppResponsiveCalendar'
import { AppointmentsEntity } from '@core/models/AppointmentsEntity'
import { CollectionEventsOnDay } from '@core/models/CollectionEventsOnDay'
import { useState } from 'react'
import { AppProfessionalAppointmentsMenu } from './AppProfessionalAppointmentsMenu'
import { ProfessionalAppointmentsViewStyle } from './ProfessionalAppointmentsViewStyle'
import { AppButtonActionRectOutline } from '@components/common/Buttons/AppButtonActionRectOutline'

interface ProfessionalAppointmentsViewProps {
  pendentAppointments: CollectionEventsOnDay<AppointmentsEntity>[]
  acceptedAppointments: CollectionEventsOnDay<AppointmentsEntity>[]
}

export function AppProfessionalAppointmentsView({
  pendentAppointments,
  acceptedAppointments
}: ProfessionalAppointmentsViewProps) {
  const [state, setState] = useState<'accepted' | 'pendent'>('pendent')

  const changeToPendent = () => {
    setState('pendent')
  }
  const changeToAccepted = () => {
    setState('accepted')
  }

  return (
    <ProfessionalAppointmentsViewStyle>
      <div id="calendar-actions">
        {state === 'accepted' ? (
          <AppButtonActionRect text="Solicitações" onClick={changeToPendent} />
        ) : (
          <AppButtonActionRectOutline text="Solicitações" disabled />
        )}
        <span className="separator"></span>
        {state === 'pendent' ? (
          <AppButtonActionRect text="Agendadas" onClick={changeToAccepted} />
        ) : (
          <AppButtonActionRectOutline text="Agendadas" disabled />
        )}
      </div>

      {state === 'accepted' && (
        <AppResponsiveCalendar
          list={acceptedAppointments}
          onOpenMenu={(appointments) => (
            <AppProfessionalAppointmentsMenu
              appointments={appointments}
              title="Consultas"
              positiveButtonTitle="Finalizar"
              negativeButtonTitle="Desmarcar"
              onPositiveButtonClick={() => {}}
              onNegativeButtonClick={() => {}}
            />
          )}
        />
      )}
      {state === 'pendent' && (
        <AppResponsiveCalendar
          list={pendentAppointments}
          onOpenMenu={(appointments) => (
            <AppProfessionalAppointmentsMenu
              appointments={appointments}
              title="Solicitações"
              positiveButtonTitle="Aceitar"
              negativeButtonTitle="Recusar"
              onPositiveButtonClick={() => {}}
              onNegativeButtonClick={() => {}}
            />
          )}
        />
      )}
    </ProfessionalAppointmentsViewStyle>
  )
}
