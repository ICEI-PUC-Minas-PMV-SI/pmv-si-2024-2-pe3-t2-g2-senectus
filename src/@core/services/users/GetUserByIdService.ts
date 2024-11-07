import { UserEntityTypeEnum } from '@core/models/UserEntity'
import { UsersRepo } from '@core/repositories/UsersRepo'

export class GetUserByIdService {
  static exec(id: string, type: UserEntityTypeEnum) {
    return UsersRepo.findById(id, type)
  }
}
