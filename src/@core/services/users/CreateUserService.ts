import { userEntityFactory } from '@core/factories/userEntityFactory'
import { UserEntity, UserEntityTypeEnum } from '@core/models/UserEntity'
import { UsersRepo } from '@core/repositories/UsersRepo'

interface CreateUserServiceProps {
  type: UserEntityTypeEnum
  name: string
  email: string
  password: string
}

export class CreateUserService {
  static exec(props: CreateUserServiceProps): UserEntity {
    const user = userEntityFactory(props)
    const searchedUserById = UsersRepo.findByIdWithoutType(user.id)
    const searchedUserByEmail = UsersRepo.findByEmailWithoutType(user.email)

    if (searchedUserById || searchedUserByEmail)
      throw new Error('Este usuário já existe')
    UsersRepo.set(user)

    return user
  }
}
