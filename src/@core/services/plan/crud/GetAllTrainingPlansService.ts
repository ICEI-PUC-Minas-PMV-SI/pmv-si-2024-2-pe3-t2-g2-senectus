import { ProfessionalEntity } from '@core/models/ProfessionalEntity'
import { GetUserInfoService } from '../../users/GetUserInfoService'
import { TrainingPlansRepo } from '@core/repositories/TrainingPlansRepo'
import { TrainingPlanEntity } from '@core/models/TrainingPlanEntity'

export class GetAllTrainingPlansService {
  static exec(): TrainingPlanEntity[] {
    const user = GetUserInfoService.exec<ProfessionalEntity>()
    if (!user) return []

    return TrainingPlansRepo.findAllByOwnerId(user.id)
  }
}
