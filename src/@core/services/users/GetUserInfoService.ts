import { UserEntity, UserEntityTypeEnum } from '@core/models/UserEntity'
import { TokenRepo } from '@core/repositories/TokenRepo'
import { UsersRepo } from '@core/repositories/UsersRepo'

export class GetUserInfoService {
  static exec<T extends UserEntity>(): T | undefined {
    const userInfo = TokenRepo.get()
    if (!userInfo) return

    return UsersRepo.findById(
      userInfo.id,
      userInfo.type as UserEntityTypeEnum
    ) as T | undefined
  }
}
