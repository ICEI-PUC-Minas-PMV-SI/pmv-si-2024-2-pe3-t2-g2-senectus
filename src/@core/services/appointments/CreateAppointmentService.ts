import {
  AppointmentsEntity,
  AppointmentStateEnum
} from '@core/models/AppointmentsEntity'
import { AppointmentsRepo } from '@core/repositories/AppointmentsRepo'
import { ServiceError } from '../../errors/ServiceError'

interface CreateAppointmentServiceProps {
  professionalId: string
  clientId: string
  date: Date
  serviceType: string
  description?: string
}

export class CreateAppointmentService {
  static exec(props: CreateAppointmentServiceProps) {
    const appointment = new AppointmentsEntity({
      host: props.professionalId,
      client: props.clientId,
      dateInMilli: props.date.getTime(),
      serviceType: props.serviceType,
      description: props.description,
      state: AppointmentStateEnum.PENDENT
    })

    const searchedAppointment =
      AppointmentsRepo.findByProfessionalIdAndClientIdAndDateInMilli(
        appointment.host,
        appointment.client,
        appointment.dateInMilli
      )
    if (searchedAppointment) throw new ServiceError('Consulta já foi marcada')
    AppointmentsRepo.set(appointment)
  }
}
