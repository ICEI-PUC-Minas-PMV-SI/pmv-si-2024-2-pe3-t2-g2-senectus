import {
  AppResponsiveCalendar,
  CalendarContextProps
} from '@components/common/Calendar/AppResponsiveCalendar'
import { AppAppointmentsRoutineCalendarMenu } from './AppAppointmentsRoutineCalendarMenu'
import { AppointmentsRoutineCalendarStyle } from './AppointmentsRoutineCalendarStyle'
import { GetAppointmentsService } from '@core/services/appointments/GetAppointmentsService'
import { createCalendarCollection } from '@core/utils/createCalendarCollection'
import { useMemo, useState } from 'react'
import {
  AppointmentsEntity,
  AppointmentStateEnum
} from '@core/models/AppointmentsEntity'
import { useDisclosure } from '@nextui-org/modal'
import { DeleteAppointmentService } from '@core/services/appointments/DeleteAppointmentService'
import { AppCancelAppointmentModalAction } from '@components/clients/professionals/modals/planBuilder/AppCancelppointmentModalAction'

export function AppAppointmentsRoutineCalendar() {
  const getAppointments = () => {
    const appointments = GetAppointmentsService.exec()
    const pendent: AppointmentsEntity[] = []
    const accepted: AppointmentsEntity[] = []
    for (let i = 0; i < appointments.length; i++) {
      const item = appointments[i]
      if (item.state === AppointmentStateEnum.ACCEPTED) accepted.push(item)
      else if (item.state === AppointmentStateEnum.PENDENT) pendent.push(item)
    }

    return [...accepted, ...pendent]
  }

  const memoizedAppointments = useMemo(() => {
    const appointments = getAppointments()
    return createCalendarCollection(appointments)
  }, [])
  const [appointments, setAppointments] = useState(memoizedAppointments)

  const modalController = useDisclosure()
  const [desktopMenuContext, setDesktopMenuContext] = useState<
    CalendarContextProps<AppointmentsEntity>
  >({})
  const [selectedAppointment, setSelectedAppointment] = useState<
    AppointmentsEntity | undefined
  >()

  const onDelete = () => {
    DeleteAppointmentService.exec(selectedAppointment!.id)

    const appointments = getAppointments()
    setAppointments(createCalendarCollection(appointments))
    modalController.onClose()
    setDesktopMenuContext({})
  }

  return (
    <AppointmentsRoutineCalendarStyle>
      <AppCancelAppointmentModalAction
        title="Cancelar consulta"
        onConfirmAction={onDelete}
        onCancelAction={modalController.onClose}
        controller={modalController}
      />

      <AppResponsiveCalendar
        list={appointments}
        sideMenuContext={desktopMenuContext}
        setSideMenuContext={setDesktopMenuContext}
        onOpenMenu={(appointments) => (
          <AppAppointmentsRoutineCalendarMenu
            appointments={appointments}
            onDelete={(appointment) => {
              setSelectedAppointment(appointment)
              modalController.onOpen()
            }}
          />
        )}
      />
    </AppointmentsRoutineCalendarStyle>
  )
}
