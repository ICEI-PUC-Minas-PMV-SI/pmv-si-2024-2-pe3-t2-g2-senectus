import { ClientEntity } from '@core/models/ClientEntity'
import { ProfessionalEntity } from '@core/models/ProfessionalEntity'
import { UserEntity, UserEntityTypeEnum } from '@core/models/UserEntity'
import { UsersRepo } from '@core/repositories/UsersRepo'
import { GetUserInfoService } from './GetUserInfoService'

export class DeleteUserService {
  static exec() {
    const user = GetUserInfoService.exec<UserEntity>()
    if (!user) return
    UsersRepo.deleteById(user.id, user.type as UserEntityTypeEnum)

    if (user.type === 'CLIENT')
      DeleteUserService.removeRefFromProfessionals(user)
    else DeleteUserService.removeRefFromClients(user)
  }

  static removeRefFromProfessionals(user: UserEntity) {
    const client = user as ClientEntity
    const clientId = client.id
    const professionalIdList = client.professionalIdList

    for (let i = 0; i < professionalIdList.length; i++) {
      const item = professionalIdList[i]
      const searchedProfessional = UsersRepo.findById(
        item,
        UserEntityTypeEnum.PROFESSIONAL
      ) as ProfessionalEntity | undefined
      if (!searchedProfessional) break

      searchedProfessional.clientIdList.find((item) => item === clientId)
      UsersRepo.set(searchedProfessional)
    }
  }

  static removeRefFromClients(user: UserEntity) {
    const professional = user as ProfessionalEntity
    const professionalId = professional.id
    const clientIdList = professional.clientIdList

    for (let i = 0; i < clientIdList.length; i++) {
      const item = clientIdList[i]
      const searchedClient = UsersRepo.findById(
        item,
        UserEntityTypeEnum.CLIENT
      ) as ClientEntity | undefined
      if (!searchedClient) break

      searchedClient.professionalIdList.find((item) => item === professionalId)
      UsersRepo.set(searchedClient)
    }
  }
}
