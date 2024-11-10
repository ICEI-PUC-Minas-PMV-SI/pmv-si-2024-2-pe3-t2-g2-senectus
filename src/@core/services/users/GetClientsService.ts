import { ClientEntity } from '@core/models/ClientEntity'
import { UserEntityTypeEnum } from '@core/models/UserEntity'
import { UsersRepo } from '@core/repositories/UsersRepo'

export class GetClientsUserService {
  static exec(key: string) {
    return UsersRepo.findByRegExp(
      key,
      UserEntityTypeEnum.PROFESSIONAL
    ) as ClientEntity[]
  }
}
