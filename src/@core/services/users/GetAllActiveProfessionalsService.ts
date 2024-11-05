import { ProfessionalEntity } from '@core/models/ProfessionalEntity'
import { UserEntityTypeEnum } from '@core/models/UserEntity'
import { UsersRepo } from '@core/repositories/UsersRepo'

export class GetAllActiveProfessionalsService {
  static exec() {
    return UsersRepo.getSource(UserEntityTypeEnum.PROFESSIONAL).filter(
      (user) => {
        const professional = user as ProfessionalEntity
        if (
          professional.job &&
          professional.startedAtInMilli &&
          professional.services.length > 0 &&
          professional.city &&
          professional.state &&
          professional.phoneNumber &&
          professional.address
        )
          return true
      }
    ) as ProfessionalEntity[]
  }
}
