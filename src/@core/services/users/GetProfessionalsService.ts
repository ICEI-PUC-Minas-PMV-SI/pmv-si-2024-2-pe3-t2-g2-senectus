import { ProfessionalEntity } from '@core/models/ProfessionalEntity'
import { UserEntityTypeEnum } from '@core/models/UserEntity'
import { UsersRepo } from '@core/repositories/UsersRepo'

export class GetProfessionalsUserService {
  static exec(key: string) {
    return UsersRepo.findByRegExp(
      key,
      UserEntityTypeEnum.PROFESSIONAL
    ) as ProfessionalEntity[]
  }
}
