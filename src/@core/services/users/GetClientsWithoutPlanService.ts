import { ProfessionalEntity } from '@core/models/ProfessionalEntity'
import { GetUserInfoService } from './GetUserInfoService'
import { GetUserByIdService } from './GetUserByIdService'
import { TrainingPlansRepo } from '@core/repositories/TrainingPlansRepo'
import { ClientEntity } from '@core/models/ClientEntity'
import { UserEntityTypeEnum } from '@core/models/UserEntity'

export class GetClientsWithoutPlanService {
  static exec() {
    const user = GetUserInfoService.exec<ProfessionalEntity>()
    if (!user) return

    const clients: ClientEntity[] = []
    for (let i = 0; i < user.clientIdList.length; i++) {
      const clientId = user.clientIdList[i]
      const plan = TrainingPlansRepo.findByClientId(clientId)
      if (plan) continue

      const client = GetUserByIdService.exec(
        clientId,
        UserEntityTypeEnum.CLIENT
      ) as ClientEntity
      if (!client) throw new Error(`Usuário ${clientId} não existe`)

      clients.push(client)
    }

    return clients
  }
}
