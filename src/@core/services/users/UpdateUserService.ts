import { UserEntity } from '@core/models/UserEntity'
import { UsersRepo } from '@core/repositories/UsersRepo'
import { AuthenticationService } from '../login/AuthenticationService'
import { TokenRepo } from '@core/repositories/TokenRepo'

export class UpdateUserService {
  static exec(user: UserEntity) {
    UsersRepo.set(user)

    const jwt = AuthenticationService.genJWT(user)
    TokenRepo.set(jwt.payload)
  }
}
