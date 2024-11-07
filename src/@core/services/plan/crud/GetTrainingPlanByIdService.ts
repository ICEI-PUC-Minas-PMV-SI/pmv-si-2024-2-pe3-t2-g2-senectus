import { ProfessionalEntity } from '@core/models/ProfessionalEntity'
import { GetUserInfoService } from '../../users/GetUserInfoService'
import { TrainingPlansRepo } from '@core/repositories/TrainingPlansRepo'
import { TrainingPlanEntity } from '@core/models/TrainingPlanEntity'

export class GetTrainingPlanByIdService {
  static exec(id: string): TrainingPlanEntity | undefined {
    const user = GetUserInfoService.exec<ProfessionalEntity>()
    if (!user) return

    return TrainingPlansRepo.findByIdAndOwnerId(id, user.id)
  }
}
