import { ClientEntity } from '@core/models/ClientEntity'
import { GetUserInfoService } from '../../users/GetUserInfoService'
import { TrainingPlansRepo } from '@core/repositories/TrainingPlansRepo'
import { TrainingPlanEntity } from '@core/models/TrainingPlanEntity'

export class GetTrainingPlanAsClientService {
  static exec(): TrainingPlanEntity | undefined {
    const user = GetUserInfoService.exec<ClientEntity>()
    if (!user) return

    return TrainingPlansRepo.findByClientId(user.id)
  }
}
