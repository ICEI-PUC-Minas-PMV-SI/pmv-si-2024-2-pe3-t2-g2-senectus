import { AppointmentsRepo } from '@core/repositories/AppointmentsRepo'
import { GetUserInfoService } from '../users/GetUserInfoService'
import { UserEntity } from '@core/models/UserEntity'
import { AppointmentsEntity } from '@core/models/AppointmentsEntity'

export class GetAppointmentsService {
  static exec(): AppointmentsEntity[] {
    const user = GetUserInfoService.exec<UserEntity>()
    if (!user) return []

    return AppointmentsRepo.findAllByClientIdOrProfessionalId(user.id, user.id)
  }
}
