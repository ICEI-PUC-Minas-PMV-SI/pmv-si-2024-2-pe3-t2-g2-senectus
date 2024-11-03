import { AppointmentsRepo } from '@core/repositories/AppointmentsRepo'
import { GetUserInfoService } from '../users/GetUserInfoService'
import { UserEntity } from '@core/models/UserEntity'

export class DeleteAppointmentService {
  static exec(id: string) {
    const user = GetUserInfoService.exec<UserEntity>()
    if (!user) return

    const appointment = AppointmentsRepo.findById(id)
    if (!appointment) return

    AppointmentsRepo.deleteById(appointment.id)
  }
}
