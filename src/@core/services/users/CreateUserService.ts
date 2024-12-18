import { ServiceError } from '@core/errors/ServiceError'
import { userEntityFactory } from '@core/factories/userEntityFactory'
import { UserEntity, UserEntityTypeEnum } from '@core/models/UserEntity'
import { UsersRepo } from '@core/repositories/UsersRepo'
import { GetRandomTrainingPlanService } from '../seed/trainingPlan/GetRandomTrainingPlanService'
import { TrainingPlansRepo } from '@core/repositories/TrainingPlansRepo'

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
      throw new ServiceError('Este usuário já existe')
    UsersRepo.set(user)

    if (user.type === UserEntityTypeEnum.CLIENT) {
      const plan = GetRandomTrainingPlanService.exec()
      plan.client = user.id
      TrainingPlansRepo.set(plan)
    }

    return user
  }
}
