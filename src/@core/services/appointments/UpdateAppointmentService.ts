import { AppointmentsRepo } from '@core/repositories/AppointmentsRepo'
import { GetUserInfoService } from '../users/GetUserInfoService'
import { UserEntity } from '@core/models/UserEntity'
import { AppointmentsEntity } from '@core/models/AppointmentsEntity'

export class UpdateAppointmentService {
  static exec(appointment: AppointmentsEntity) {
    const user = GetUserInfoService.exec<UserEntity>()
    if (!user) return

    AppointmentsRepo.set(appointment)
  }
}
