import { AppResponsiveCalendar } from '@components/common/Calendar/AppResponsiveCalendar'
import { AppointmentsEntity } from '@core/models/AppointmentsEntity'
import { CollectionEventsOnDay } from '@core/models/CollectionEventsOnDay'
import { AppAppointmentsRoutineCalendarMenu } from './AppAppointmentsRoutineCalendarMenu'
import { AppointmentsRoutineCalendarStyle } from './AppointmentsRoutineCalendarStyle'

interface AppAppointmentsRoutineCalendarProps {
  appointments: CollectionEventsOnDay<AppointmentsEntity>[]
}

export function AppAppointmentsRoutineCalendar({
  appointments
}: AppAppointmentsRoutineCalendarProps) {
  return (
    <AppointmentsRoutineCalendarStyle>
      <AppResponsiveCalendar
        list={appointments}
        onOpenMenu={(appointments) => (
          <AppAppointmentsRoutineCalendarMenu appointments={appointments} />
        )}
      />
    </AppointmentsRoutineCalendarStyle>
  )
}
