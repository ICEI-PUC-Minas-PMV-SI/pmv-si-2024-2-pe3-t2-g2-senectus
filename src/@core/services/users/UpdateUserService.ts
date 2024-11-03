import { UserEntity } from '@core/models/UserEntity'
import { UsersRepo } from '@core/repositories/UsersRepo'

export class UpdateUserService {
  static exec(user: UserEntity) {
    UsersRepo.set(user)
  }
}
