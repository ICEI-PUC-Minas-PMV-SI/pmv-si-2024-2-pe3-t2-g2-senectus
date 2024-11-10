import { AppButtonActionRect } from '@components/common/Buttons/AppButtonActionRect'
import {
  AppResponsiveCalendar,
  CalendarContextProps
} from '@components/common/Calendar/AppResponsiveCalendar'
import {
  AppointmentsEntity,
  AppointmentStateEnum
} from '@core/models/AppointmentsEntity'
import { useMemo, useState } from 'react'
import { AppProfessionalAppointmentsMenu } from './AppProfessionalAppointmentsMenu'
import { ProfessionalAppointmentsViewStyle } from './ProfessionalAppointmentsViewStyle'
import { AppButtonActionRectOutline } from '@components/common/Buttons/AppButtonActionRectOutline'
import { GetAppointmentsService } from '@core/services/appointments/GetAppointmentsService'
import { createCalendarCollection } from '@core/utils/createCalendarCollection'
import { CollectionEventsOnDay } from '@core/models/CollectionEventsOnDay'
import { UpdateAppointmentService } from '@core/services/appointments/UpdateAppointmentService'
import { DeleteAppointmentService } from '@core/services/appointments/DeleteAppointmentService'
import { AppCancelAppointmentModalAction } from '../modals/planBuilder/AppCancelppointmentModalAction'
import { useDisclosure } from '@nextui-org/modal'
import { UpdateUserService } from '@core/services/users/UpdateUserService'
import { GetUserInfoService } from '@core/services/users/GetUserInfoService'
import { ProfessionalEntity } from '@core/models/ProfessionalEntity'
import { GetUserByIdService } from '@core/services/users/GetUserByIdService'
import { ClientEntity } from '@core/models/ClientEntity'
import { UserEntityTypeEnum } from '@core/models/UserEntity'

export function AppProfessionalAppointmentsView() {
  const [state, setState] = useState<'accepted' | 'pendent'>('pendent')
  const getAppointments = () => {
    const appointments = GetAppointmentsService.exec()
    const pendent: AppointmentsEntity[] = []
    const accepted: AppointmentsEntity[] = []
    for (let i = 0; i < appointments.length; i++) {
      const item = appointments[i]
      if (item.state === AppointmentStateEnum.ACCEPTED) accepted.push(item)
      else if (item.state === AppointmentStateEnum.PENDENT) pendent.push(item)
    }

    return { accepted, pendent }
  }

  const appointments = useMemo(() => {
    const { accepted, pendent } = getAppointments()

    return {
      memoizedPendentAppointments: createCalendarCollection(pendent),
      memoizedAcceptedAppointments: createCalendarCollection(accepted)
    }
  }, [])

  const [acceptedAppointments, setAcceptedAppointments] = useState<
    CollectionEventsOnDay<AppointmentsEntity>[]
  >(appointments.memoizedAcceptedAppointments)
  const [pendentAppointments, setPendentAppointments] = useState<
    CollectionEventsOnDay<AppointmentsEntity>[]
  >(appointments.memoizedPendentAppointments)
  const [selectedAppointment, setSelectedAppointment] = useState<
    AppointmentsEntity | undefined
  >()

  const modalController = useDisclosure()
  const [desktopMenuContext, setDesktopMenuContext] = useState<
    CalendarContextProps<AppointmentsEntity>
  >({})

  const changeToPendent = () => {
    setState('pendent')
  }
  const changeToAccepted = () => {
    setState('accepted')
  }

  const onFinish = (appointment: AppointmentsEntity) => {
    appointment.state = AppointmentStateEnum.DONE
    UpdateAppointmentService.exec(appointment)

    const user = GetUserInfoService.exec<ProfessionalEntity>()
    let index = user!.clientIdList.findIndex(
      (item) => item === appointment.client
    )
    if (index < 0) user!.clientIdList.push(appointment.client)

    const client = GetUserByIdService.exec(
      appointment.client,
      UserEntityTypeEnum.CLIENT
    ) as ClientEntity
    index = client.professionalIdList.findIndex(
      (item) => item === appointment.host
    )
    if (index < 0) client.professionalIdList.push(user!.id)

    UpdateUserService.exec(user!)
    UpdateUserService.exec(client)

    const { accepted, pendent } = getAppointments()
    setAcceptedAppointments(createCalendarCollection(accepted))
    setPendentAppointments(createCalendarCollection(pendent))
    modalController.onClose()
    setDesktopMenuContext({})
  }

  const onAccept = (appointment: AppointmentsEntity) => {
    appointment.state = AppointmentStateEnum.ACCEPTED
    UpdateAppointmentService.exec(appointment)

    const { accepted, pendent } = getAppointments()
    setAcceptedAppointments(createCalendarCollection(accepted))
    setPendentAppointments(createCalendarCollection(pendent))
    modalController.onClose()
    setDesktopMenuContext({})
  }

  const onDelete = () => {
    DeleteAppointmentService.exec(selectedAppointment!.id)

    const { accepted, pendent } = getAppointments()
    setAcceptedAppointments(createCalendarCollection(accepted))
    setPendentAppointments(createCalendarCollection(pendent))
    modalController.onClose()
    setDesktopMenuContext({})
  }

  return (
    <ProfessionalAppointmentsViewStyle>
      <AppCancelAppointmentModalAction
        title="Cancelar consulta"
        onConfirmAction={onDelete}
        onCancelAction={modalController.onClose}
        controller={modalController}
      />
      {state === 'accepted' && (
        <AppResponsiveCalendar
          list={acceptedAppointments}
          sideMenuContext={desktopMenuContext}
          setSideMenuContext={setDesktopMenuContext}
          header={
            <div id="calendar-actions">
              <AppButtonActionRect
                text="Solicitações"
                onClick={changeToPendent}
              />
              <span className="separator"></span>
              <AppButtonActionRectOutline text="Agendadas" disabled />
            </div>
          }
          onOpenMenu={(appointments) => (
            <AppProfessionalAppointmentsMenu
              appointments={appointments}
              title="Consultas"
              positiveButtonTitle="Finalizar"
              negativeButtonTitle="Desmarcar"
              onPositiveButtonClick={(appointment) => onFinish(appointment)}
              onNegativeButtonClick={(appointment) => {
                setSelectedAppointment(appointment)
                modalController.onOpen()
              }}
            />
          )}
        />
      )}
      {state === 'pendent' && (
        <AppResponsiveCalendar
          list={pendentAppointments}
          sideMenuContext={desktopMenuContext}
          setSideMenuContext={setDesktopMenuContext}
          header={
            <div id="calendar-actions">
              <AppButtonActionRectOutline text="Solicitações" disabled />
              <span className="separator"></span>
              <AppButtonActionRect
                text="Agendadas"
                onClick={changeToAccepted}
              />
            </div>
          }
          onOpenMenu={(appointments) => (
            <AppProfessionalAppointmentsMenu
              appointments={appointments}
              title="Solicitações"
              positiveButtonTitle="Aceitar"
              negativeButtonTitle="Recusar"
              onPositiveButtonClick={(appointment) => onAccept(appointment)}
              onNegativeButtonClick={(appointment) => {
                setSelectedAppointment(appointment)
                modalController.onOpen()
              }}
            />
          )}
        />
      )}
    </ProfessionalAppointmentsViewStyle>
  )
}
